import Contact from "../components/Contact";
import HeaderLabel from "../components/HeaderLabel";
import HeadingHome from "../components/HeadingHome";
import HomeBlog from "../components/HomeBlog";
import HomeMessage from "../components/HomeMessage";
import HomeProducts from "../components/HomeProducts";
import HomeSeedlings from "../components/HomeSeedlings";
import Landing from "../components/Landing";
import YouTubeVideo from "../components/YouTubeVideo";

import { getDictionary, Locale } from "./dictionaries";

export interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  const blogPosts = [
    {
      title: "Climate Change",
      description: "Climate change is beginning to have a devastating impact on forests across the world Climate change is beginning to have a devastating Climate change is beginning to have a devastating impact on forests across the world Climate change is beginning to have a devastating impact on Climate change is beginning to have a devastating impact on forests across the world forests across the world",
      imageUrl: "/images/home/carousel1.jpg",
      link: ""
    },
    {
      title: "Climate Change",
      description: "Climate change is beginning to have a devastating impact on forests across the world",
      imageUrl: "/images/home/carousel7.jpg",
      link: ""
    },
    {
      title: "Climate Change",
      description: "Climate change is beginning to have a devastating impact on forests across the world",
      imageUrl: "/images/home/carousel8.jpg",
      link: ""
    },
  ]

  return (
    <div>
      <div className="absolute top-0 w-full">
        <Landing t={t}/>
      </div>
      <div className="mt-[636px] max-md:mt-[445px]">
        <HeaderLabel t={t}/>
        <HeadingHome t={t}/>
      </div>
      <div className="overflow-hidden py-[60px] bg-white md:py-[140px]">
        <HomeProducts t={t}/>
      </div>
      <div className="">
        <HomeSeedlings t={t}/>
      </div>
      <div className="pt-[140px] pb-[140px] bg-white">
        <HomeMessage  t={t}/>
      </div>
      <div className="pb-[140px] bg-white">
        <YouTubeVideo />
      </div>
      <div className="">
        <Contact t={t}/>
      </div>
      <div className="py-[140px] bg-white">
        <HomeBlog posts={blogPosts} />
      </div>
    </div>
  );
}
