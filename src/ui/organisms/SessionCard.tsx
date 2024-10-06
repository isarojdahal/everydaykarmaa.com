import { Calendar, Clock, User, Video } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/ui/shadcn/card";
import { Button } from "@/ui/shadcn/button";
import { Link } from "@tanstack/react-router";

export interface SessionType {
  title: string;
  instructor: string;
  date?: string;
  time?: string;
  flyer?: string;
  videoURL?: string;
  isUpcoming: boolean;
}

export default function SessionCard({ session }: { session: SessionType }) {
  return (
    <Card key={session.title} className="flex flex-col h-full">
      <CardHeader className="p-0">
        {session.flyer && (
          <div className="relative rounded-t-lg overflow-hidden max-sm:bg-everydaykarma max-sm:h-50 h-52 max-md:h-96 w-full">
            <img
              src={session.flyer}
              alt={session.title}
              className="object-cover object-top max-sm:object-contain max-sm:object-center w-full h-full"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl mb-2">{session.title}</CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            {session.instructor}
          </p>
          <p className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {session.date || "TBD"}
          </p>
          <p className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {session.time || "N/A"}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        {session.videoURL && (
          <Button
            asChild
            size={"lg"}
            className="w-full"
            variant={session.isUpcoming ? "ghost" : "default"}
          >
            <Link to={session.videoURL}>
              <Video className="mr-2 h-4 w-4" />
              {!session.isUpcoming ? "Watch recorded session" : "Coming soon"}
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
