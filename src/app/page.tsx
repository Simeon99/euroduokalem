import HeaderLabel from "./components/HeaderLabel";
import HeadingHome from "./components/HeadingHome";
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

    </div>
  );
}
