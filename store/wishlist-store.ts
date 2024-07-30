import http from "@/api/interceptors";
import { Product } from "@/types/product-types";
import { create } from "zustand";

interface GetAllWishlist {
  page: number;
  limit: number;
}

interface WishlistStore {
  datawishlist: Product[];
  dataLength: number;
  isLoading: boolean;
  totalCount: number;
  getAllWishlist: (params: GetAllWishlist) => Promise<void>;
  create: (id: string) => Promise<void>;
}

const useWishlistStore = create<WishlistStore>((set) => ({
  datawishlist: [],
  isLoading: false,
  totalCount: 1,
  dataLength: 0,

  getAllWishlist: async (params: GetAllWishlist) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/wishlist`, {
        params: {
          page: params.page,
          limit: params.limit,
        },
      });

      if (response.status === 200) {
        const { total_count, products } = response.data;
        set({
          totalCount: Math.ceil(total_count / params.limit),
          datawishlist: products,
          dataLength: products.length,
        });
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      set({ totalCount: 0, datawishlist: [], dataLength: 0 });
    } finally {
      set({ isLoading: false });
    }
  },

  create: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await http.post(`/like/${id}`);
      if (response.status === 201) {
        const datawishlist = response.data;
        set((state) => ({
          dataLength: state.dataLength + (datawishlist ? 1 : -1),
        }));
      }
      return response.data;
    } catch (error) {
      console.error("Error liking product:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useWishlistStore;
