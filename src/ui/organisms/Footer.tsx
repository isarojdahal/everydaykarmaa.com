import { FaDiscord, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Logo from "../atoms/Logo";

const currentYear = new Date().getFullYear();
const linksData = [
  {
    title: "Youtube",
    icon: <FaYoutube className="~size-5/6" />,
    url: "https://www.youtube.com/@EverydayKarma",
  },
  {
    title: "Discord",
    icon: <FaDiscord className="~size-5/6" />,
    url: "https://discord.gg/t9xcztuRqK",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin className="~size-5/6" />,
    url: "https://www.linkedin.com/company/everydaykarma/",
  },
  {
    title: "Facebook",
    icon: <FaFacebook className="~size-5/6" />,
    url: "https://www.facebook.com/groups/167150781674830",
  },
];

export function Footer() {
  return (

    <footer className="relative z-[60] bg-everydaykarma text-gray-100 flex flex-col mt-16">

      <div className="container mx-auto ~py-6/4 pr-4 flex max-sm:flex-col max-sm:gap-4 items-center justify-between">
        <div className="footer-logo max-sm:hidden">
          <Logo />
        </div>
        <div className="flex gap-8">
          {linksData.map((data) => (
            <div
              key={data.title}
              className="border rounded-full ~p-2/3 sm:hover:bg-blue-800"
            >
              <a href={data.url}>{data.icon}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-800">
        <p className="container mx-auto text-center py-4 ~text-sm/lg">
          Copyright &copy; {currentYear} EverydayKarma | All rights reserved
        </p>
      </div>
    </footer>
  );
}
