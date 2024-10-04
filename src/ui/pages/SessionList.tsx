import sessionsData from "@/constants/data/sessions.data";
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

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Past Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sessionsData.map((session) => (
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
        ))}
      </div>
    </div>
  );
}
