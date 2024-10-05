import sessionsData from "@/constants/data/sessions.data";
import SessionCard from "../organisms/SessionCard";

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8 pri">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Past Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sessionsData.map((session) => (
          <SessionCard key={session.title} session={session} />
        ))}
      </div>
    </div>
  );
}
