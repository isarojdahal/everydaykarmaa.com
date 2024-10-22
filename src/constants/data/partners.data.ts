import { ImageConstants } from "../image.constants";

export default [
  {
    id: "softwareFreedomDay2024",
    src: ImageConstants.PARTNERS.SoftwareFreedomDay2024,
    alt: "Software Freedom Day 2024",
    date: "2024 September 21",
  },
  {
    id: "DRCFS",
    src: ImageConstants.PARTNERS.drcfs,
    alt: "DRCFS 2023 March 09",
    date: "2023 March 09",
  },
  {
    id: "gracathon2081",
    src: ImageConstants.PARTNERS.Gracathon2081,
    alt: "Gracathon 2081",
    date: "",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
