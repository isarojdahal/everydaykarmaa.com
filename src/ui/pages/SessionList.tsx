import sessionsData from "@/constants/data/sessions.data";
import SessionCard, { SessionType } from "../organisms/SessionCard";
import { Helmet } from "react-helmet-async";

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
    <div>
      <p className="~text-4xl/7xl text-everydaykarma font-bold my-16 text-center">
        {title}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sessionsData.map(
          (session) =>
            session.isUpcoming === showUpcoming && (
              <SessionCard key={session.title} session={session} />
            )
        )}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <>
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
      <div className="container mx-auto px-4 py-8 space-y-32">
        {/* Upcoming Events */}
        <EventsListing
          title="Upcoming Events"
          sessionsData={sessionsData}
          showUpcoming={true}
        />
        {/* Past Events */}
        <EventsListing
          title="Past Events"
          sessionsData={sessionsData}
          showUpcoming={false}
        />
      </div>
    </>
  );
}
