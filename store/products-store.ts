import http from "@/api/interceptors";
import { GetAll, Product } from "@/types/product-types";
import { create } from "zustand";

interface ProductStoreState {
  data: Product[];
  isLoading: boolean;
  totalCount: number;
  getAll: (params: GetAll) => Promise<void>;
}

const useProductStore = create<ProductStoreState>((set) => ({
  data: [],
  isLoading: false,
  totalCount: 1,

  getAll: async (params: GetAll) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/products`, {
        params: {
          page: params.page,
          limit: params.limit,
          name: params.name,
        },
      });

      if (response.status === 200) {
        const { total_count, products } = response.data;
        set({
          totalCount: Math.ceil(total_count / params.limit),
          data: products,
        });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductStore;
