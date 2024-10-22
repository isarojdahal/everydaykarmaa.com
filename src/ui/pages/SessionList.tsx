import sessionsData from "@/constants/data/sessions.data";
import SessionCard, { SessionType } from "../organisms/SessionCard";
import { Helmet } from "react-helmet-async";
import Layout from "./Layout";
import SectionHeading from "../atoms/SectionHeading";
import PageSection from "../atoms/PageSection";

export interface EventsListingPropsType {
  title: string;
  sessionsData: SessionType[];
  showUpcoming?: boolean;
}

export function EventsListing({
  title,
  sessionsData,
  showUpcoming,
}: EventsListingPropsType) {
  return (
    <PageSection>
      <SectionHeading>{title}</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sessionsData.map(
          (session) =>
            session.isUpcoming === showUpcoming && (
              <SessionCard key={session.title} session={session} />
            ),
        )}
      </div>
    </PageSection>
  );
}

export default function Events() {
  return (
    <Layout>
      <Helmet>
        <title>EverydayKarma - Sessions</title>
        <meta
          name="description"
          content="Welcome to the Sessions page of EverydayKarma, where you can explore about upcomming Events and pasts Events by EverydayKarma"
        />
        <meta
          name="keywords"
          content="sessions, roadmaps,TRPC,golang,AWS,Data science,kubernetes , EverydayKarma"
        />
      </Helmet>

      {/* Upcoming Events */}
      <EventsListing
        title="Our Upcoming Events"
        sessionsData={sessionsData}
        showUpcoming={true}
      />
      {/* Past Events */}
      <EventsListing
        title="Our Past Events"
        sessionsData={sessionsData}
        showUpcoming={false}
      />
    </Layout>
  );
}
