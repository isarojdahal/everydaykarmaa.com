import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import PageSection from "../atoms/PageSection";
import SectionHeading from "../atoms/SectionHeading";
import Layout from "./Layout";
import { Globe } from "lucide-react";

export default function AboutUs() {
  return (
    <Layout>
      <PageSection border={false}>
        <SectionHeading>About </SectionHeading>
        <div className="min-h-[60vh] text-2xl leading-8 tracking-wide text-justify flex flex-col gap-4">
          <b className=" text-4xl">"</b>
          <p>
            EverydayKarma first came to life in 2018, sparked by a simple
            request from a friend who needed help with C programming. Instead of
            teaching just him, I thought, Why not share this knowledge with
            everyone? That's when I created my first video and uploaded it to
            YouTube.
          </p>

          <p>
            Since then, content has been consistently shared, evolving and
            growing over time.
          </p>

          <p>
            But truth be told, the journey hasn't been easy. The original
            channel no longer exists—this is actually the fourth version of
            EverydayKarma. Challenges like AdSense issues and copyright claims
            (from other channels) forced me to start over multiple times.
          </p>

          <p>
            Despite the hurdles, we've built a resilient and thriving community.
            Today, we're a growing family of 3.5K+ subscribers, and this is just
            the beginning.
          </p>

          <b className=" text-4xl">"</b>

          <i className="mt-5">~ Saroj Dahal (Founder)</i>

          <div className="flex ">
            <a
              href="https://www.linkedin.com/in/isarojdahal"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-blue-600 hover:underline"
            >
              <LinkedInLogoIcon className="size-[40px]" />
            </a>

            <a
              href="https://sarojdahal.com"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-red-600 hover:underline"
            >
              <Globe className="size-[40px] text-blue-600" />
            </a>
          </div>
        </div>
      </PageSection>
    </Layout>
  );
}
