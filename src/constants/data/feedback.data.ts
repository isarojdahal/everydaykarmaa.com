import { shuffleArray } from "@/utils/array.util";
import { ImageConstants } from "../image.constants";

const feedbacks = [
  {
    src: ImageConstants.FEEDBACKS[1],
    alt: "feed-back image-1",
  },
  {
    src: ImageConstants.FEEDBACKS[2],
    alt: "feed-back image-2",
  },
  {
    src: ImageConstants.FEEDBACKS[3],
    alt: "feed-back image-3",
  },
  {
    src: ImageConstants.FEEDBACKS[4],
    alt: "feed-back image-4",
  },
  {
    src: ImageConstants.FEEDBACKS[5],
    alt: "feed-back image-5",
  },
  {
    src: ImageConstants.FEEDBACKS[6],
    alt: "feed-back image-6",
  },
  {
    src: ImageConstants.FEEDBACKS[7],
    alt: "feed-back image-7",
  },
  {
    src: ImageConstants.FEEDBACKS[8],
    alt: "feed-back image-8",
  },
  {
    src: ImageConstants.FEEDBACKS[9],
    alt: "feed-back image-9",
  },
  {
    src: ImageConstants.FEEDBACKS[10],
    alt: "feed-back image-10",
  },
  {
    src: ImageConstants.FEEDBACKS[11],
    alt: "feed-back image-11",
  },
  {
    src: ImageConstants.FEEDBACKS[13],
    alt: "feed-back image-13",
  },
  {
    src: ImageConstants.FEEDBACKS[14],
    alt: "feed-back image-14",
  },
  {
    src: ImageConstants.FEEDBACKS[15],
    alt: "feed-back image-15",
  },
  {
    src: ImageConstants.FEEDBACKS[16],
    alt: "feed-back image-16",
  },
  {
    src: ImageConstants.FEEDBACKS[17],
    alt: "feed-back image-17",
  },
  {
    src: ImageConstants.FEEDBACKS[18],
    alt: "feed-back image-18",
  },
  {
    src: ImageConstants.FEEDBACKS[19],
    alt: "feed-back image-19",
  },
  {
    src: ImageConstants.FEEDBACKS[20],
    alt: "feed-back image-20",
  },
];

export default shuffleArray([...feedbacks]); // Use spread to avoid mutating the original array
