import { ImageConstants } from "../image.constants";

export default [
  {
    title: "Roadmap for Data Science Journey",
    instructor: "Samriddha Pathak",
    date: "2nd October 2024",
    time: "7pm onwards",
    flyer: ImageConstants.SESSIONS.DataScienceRoadmap,
    videoURL: "",
  },
  {
    title: "Roadmap of AWS Certification",
    instructor: "Abiral Sangraula",
    date: "25th August 2024",
    flyer: ImageConstants.SESSIONS.AWSCertificationRoadmap,
  },
  {
    title: "Implementing TRPC in JavaScript",
    instructor: "Rupesh Budhathoki",
    date: "18th April 2024",
    videoURL: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
