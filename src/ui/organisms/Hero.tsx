import HeroBg from "@/constants/data/hero.bg.data";
import {
  Html,
  Css,
  Javascript,
  Docker,
  REACT_LOGO,
  Sql,
} from "@/assets/hero-logos";
import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import Image from "../atoms/Image";
type logosType = ReactNode;
const logosArray: logosType[] = [
  <Html />,
  <Css />,
  <Javascript />,
  <REACT_LOGO />,
  <Sql />,
  <Docker />,
];

export function AboutUsBtn() {
  return (
    <Link to="/aboutus">
      <button
        type="submit"
        className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group border-2"
      >
        About Us
        <svg
          className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-gray-800 group-hover:fill-gray-800"
          ></path>
        </svg>
      </button>
    </Link>
  );
}

export default function Hero() {
  return (
    <div className="w-full min-h-[800px] sm:min-h-screen relative after:content-[''] after:absolute after:inset-0 after:bg-black/65">
      <Image
        src={HeroBg.src}
        alt={HeroBg.alt}
        className="w-full h-full object-cover object-center absolute"
      />
      <div className="container mx-auto px-4 absolute inset-0 z-10">
        <div className="w-full h-full flex flex-col ~gap-6/14 items-center justify-center">
          <div className="flex flex-wrap ~gap-4/14 items-center justify-center">
            {logosArray.map((Logo, index) => {
              return <div key={index}>{Logo}</div>;
            })}
          </div>
          <h1 className="text-gray-300 ~text-3xl/7xl text-center font-bold">
            A vision to make millions of
            <br />
            <span className="font-light italic">Nepali</span> developers.
          </h1>
          <AboutUsBtn />
        </div>
      </div>
    </div>
  );
}
