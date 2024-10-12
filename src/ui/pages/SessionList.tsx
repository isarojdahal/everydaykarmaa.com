import sessionsData from "@/constants/data/sessions.data";
import SessionCard, { SessionType } from "../organisms/SessionCard";

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
  );
}
