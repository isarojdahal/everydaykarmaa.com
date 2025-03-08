import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "../atoms/Logo";

const currentYear = new Date().getFullYear();
const linksData = [
  {
    title: "Youtube",
    icon: <FaYoutube className="~size-5/6" />,
    url: "https://www.youtube.com/@EverydayKarma",
  },
  {
    title: "Tiktok",
    icon: <FaTiktok className="~size-5/6" />,
    url: "https://www.tiktok.com/@everyday.karma",
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
      <div className="container mx-auto ~py-4/2 pr-4 flex max-sm:flex-col max-sm:gap-4 items-center justify-between">
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
      <div className="bg-blue-800 items-center flex justify-between py-4 pt-0 md:py-0 flex-col md:flex-row relative">
        <p className="container mx-auto text-center py-4 ~text-sm/lg">
          Copyright &copy; {currentYear} EverydayKarma | All rights reserved
        </p>
        <a href="https://github.com/isarojdahal/everydaykarmaa.com">
          <p className="flex gap-2 mr-3 md:mr-10 md:absolute right-4 top-1/3 hover:underline underline-offset-2">
            <FaGithub className="~size-5/6" />
            <span>contribute</span>
          </p>
        </a>
      </div>
    </footer>
  );
}
