import PageSection from "../atoms/PageSection";
import SectionHeading from "../atoms/SectionHeading";
import Layout from "./Layout";

export default function AboutUs() {
  return (
    <Layout>
      <PageSection border={false}>
        <SectionHeading>About Us</SectionHeading>
        <div className="min-h-[60vh] text-2xl leading-8 tracking-wide text-justify flex flex-col gap-4">
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
        </div>
      </PageSection>
    </Layout>
  );
}
