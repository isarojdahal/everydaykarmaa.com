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
  date: string;
  time?: string;
  flyer: string;
  videoURL?: string;
}

export default function SessionCard({ session }: { session: SessionType }) {
  return (
    <Card key={session.title} className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={session.flyer}
            alt={session.title}
            className="rounded-t-lg object-cover w-full h-full"
          />
        </div>
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
            {session.date}
          </p>
          <p className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {session.time}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        {session.videoURL && (
          <Button asChild className="w-full">
            <Link to={session.videoURL}>
              <Video className="mr-2 h-4 w-4" />
              Watch recorded session
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
