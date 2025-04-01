import Contact from "./components/Contact";
import HeaderLabel from "./components/HeaderLabel";
import HeadingHome from "./components/HeadingHome";
import HomeBlog from "./components/HomeBlog";
import HomeMessage from "./components/HomeMessage";
import HomeProducts from "./components/HomeProducts";
import HomeSeedlings from "./components/HomeSeedlings";
import Landing from "./components/Landing";
import YouTubeVideo from "./components/YouTubeVideo";

export default function Home() {

  const blogPosts =[ 
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
      <div className="pb-[140px]">
        <YouTubeVideo />
      </div>
      <div className="pb-[140px]">
        <Contact />
      </div>
      <div className="pb-[140px]">
        <HomeBlog posts={blogPosts}/>
      </div>
    </div>
  );
}
