import { ImageConstants } from "../image.constants";

export default [
  {
    title: "Roadmap for Data Science Journey",
    instructor: "Samriddha Pathak",
    date: "2nd October 2024",
    time: "7pm onwards",
    flyer: ImageConstants.SESSIONS.DataScienceRoadmap,
    videoURL: "https://youtu.be/tcMPE5ljELk",
  },
  {
    title: "Roadmap of AWS Certification",
    instructor: "Abiral Sangraula",
    date: "25th August 2024",
    videoURL: "https://youtu.be/VLil1H4L6EE",
    flyer: ImageConstants.SESSIONS.AWSCertificationRoadmap,
  },
  {
    title: "Implementing TRPC in JavaScript",
    instructor: "Rupesh Budhathoki",
    date: "18th April 2024",
    videoURL: "https://youtu.be/y_0ulb9iK10Q",
    flyer: ImageConstants.SESSIONS.trpcSession,
  },
  {
    title: "Journey to Go Lang",
    instructor: "Mukesh Kumar Chaudhary",
    date: "28th April 2024",
    flyer: ImageConstants.SESSIONS.GoLang,
    videoURL: "https://youtu.be/DVvspkGdxFo",
  },

  {
    title: "Getting Started with Kubernetes",
    instructor: "Shital Nyaupane",
    date: "16th August 2024",
    flyer: ImageConstants.SESSIONS.KubernetesSession,
    videoURL: "https://youtu.be/Aqy2qGTmC-U",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
