import HeaderLabel from "./components/HeaderLabel";
import HeadingHome from "./components/HeadingHome";
import HomeMessage from "./components/HomeMessage";
import HomeProducts from "./components/HomeProducts";
import HomeSeedlings from "./components/HomeSeedlings";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 w-full">
        <Landing />
      </div>
      <div className="mt-[620px] max-md:mt-[420px]">
        <HeaderLabel />
        <HeadingHome />
      </div>
      <div className="overflow-hidden mt-[60px] md:mt-[140px]">
        <HomeProducts />
      </div>
      <div className="pt-[140px]">
        <HomeSeedlings />
      </div>
      <div className="pt-[140px] pb-[140px]">
        <HomeMessage />
      </div>
      <div>
        <div className="w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/watch?v=vHbs0XlD4A4&t=43s"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
}
