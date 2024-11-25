import HeroBg from "@/constants/data/hero.bg.data";
import techLogos from "@/constants/data/tech.logos.data";

export default function Hero() {
  return (
    <div className="w-full min-h-[800px] sm:min-h-screen relative after:content-[''] after:absolute after:inset-0 after:bg-black/65">
      <img
        src={HeroBg.src}
        alt={HeroBg.alt}
        className="w-full h-full object-cover object-center absolute"
      />
      <div className="container mx-auto px-4 absolute inset-0 z-10">
        <div className="w-full h-full flex flex-col ~gap-6/14 items-center justify-center">
          <div className="flex flex-wrap ~gap-4/14 items-center justify-center">
            {techLogos.map((techLogo) => (
              <img
                key={techLogo.alt}
                src={techLogo.src}
                alt={techLogo.alt}
                className="~size-12/28 hover:brightness-200 cursor-pointer transition duration-300"
              />
            ))}
          </div>
          <h1 className="text-gray-300 ~text-3xl/7xl text-center font-bold">
            A vision to make millions of
            <br />
            <span className="font-light italic">Nepali</span> developers.
          </h1>
        </div>
      </div>
    </div>
  );
}
