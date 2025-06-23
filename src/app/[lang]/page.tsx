import Contact from "../components/Contact";
import HeaderLabel from "../components/HeaderLabel";
import HeadingHome from "../components/HeadingHome";
import HomeBlog from "../components/HomeBlog";
import HomeMessage from "../components/HomeMessage";
import HomeProducts from "../components/HomeProducts";
import HomeSeedlings from "../components/HomeSeedlings";
import Landing from "../components/Landing";
import SlowCarousel from "../components/ui/SlowCarousel";
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

  return (
    <div className="">
      <div className=" top-0 w-full h-[100dvh]">
        <Landing t={t} />
      </div>
      <div className="">
        <HeaderLabel t={t} />
        <HeadingHome t={t} />
      </div>
      <div className="overflow-hidden py-[60px] bg-white md:py-[140px]">
        <HomeProducts t={t} />
      </div>
      <div className="">
        <HomeSeedlings t={t} />
      </div>
      <div className="pt-[140px] pb-[140px] bg-white">
        <HomeMessage t={t} />
      </div>
      <div className=" pb-[140px] bg-white">
        <SlowCarousel />
      </div>
      <div className="pb-[140px] bg-white">
        <YouTubeVideo />
      </div>
      <div  className="">
        <Contact t={t} />
      </div>
      <div className="py-[140px] bg-white px-4">
        <div  className="max-w-screen-sw  w-full  mx-auto flex flex-col gap-8">
          <h1  className='font-heading text-6xl text-primary   max-lsw:text-5xl max-md:text-4xl font-bold line'>
            {t.home.blog.title}
          </h1>
          <HomeBlog />
        </div>
      </div>
    </div>
  );
}
