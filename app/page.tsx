import Hero from "@/components/home/Hero";
import Trending from "@/components/home/TrendingCollection";
import TopCreator from "@/components/home/TopCreators"
import Category from "@/components/home/BrowseCategory"
import Discover from "@/components/home/Discover"
import Works from "@/components/home/HowItWorks";
import Mashroom from "@/components/home/MagicMashroom";
import Message from "@/components/home/Message"


export default function Home() {
  return (
    <div className="px-12 xl:px-32 md:px-20">
      <div className="flex flex-col gap-36">
        <Hero />
        <Trending />
        <TopCreator />
        <Category />
        <Discover />
        <div className="mx-auto w-full flex justify-center mt-20">
          <Mashroom />
        </div>
        <Works />
        <Message />
      </div>
    </div>
  );
}
