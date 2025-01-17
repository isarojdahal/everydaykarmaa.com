import {
  Calendar,
  Clock,
  FileText,
  ImageIcon,
  SquarePlay,
  User,
  Video,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/ui/shadcn/card";
import { Button } from "@/ui/shadcn/button";
import { Link } from "@tanstack/react-router";
import Image from "../atoms/Image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";

export interface SessionType {
  title: string;
  instructor: string;
  date?: string;
  time?: string;
  flyer?: string;
  videoURL?: string;
  isUpcoming: boolean;
  slidesURL?: string;
  resourcesURL?: string;
  images?: string[];
}

export function Assets({ ...session }: SessionType) {
  return (
    <div className="flex flex-col max-lg:flex-col gap-2 items-start">
      <div className="bg-gray-100 border border-gray-300 rounded-lg h-fit p-4 w-full flex items-center ~gap-8/4">
        {session.slidesURL || session.resourcesURL ? (
          <>
            <p className="flex items-center">
              {session.slidesURL && (
                <a
                  href={session.slidesURL}
                  target="_blank"
                  className="flex items-center hover:underline"
                >
                  <SquarePlay className="mr-1 h-4 w-4" />
                  Slides
                </a>
              )}
            </p>
            <p className="flex items-center">
              {session.resourcesURL && (
                <a
                  href={session.resourcesURL}
                  target="_blank"
                  className="flex items-center hover:underline"
                >
                  <FileText className="mr-1 h-4 w-4" />
                  Resources
                </a>
              )}
            </p>
          </>
        ) : (
          "No Assets Available"
        )}
      </div>
    </div>
  );
}

export default function SessionCard({ session }: { session: SessionType }) {
  return (
    <Card
      key={session.title}
      className="flex flex-col h-full lg:hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader className="p-0">
        {session.flyer && (
          <div className="relative rounded-t-lg overflow-hidden max-sm:bg-everydaykarma max-sm:h-50 h-52 max-md:h-96 w-full">
            <Image
              src={session.flyer}
              alt={session.title}
              loading="lazy"
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

          <Dialog>
            <DialogTrigger asChild>
              <button
                className={`flex items-center ${session.images && "underline"}`}
                disabled={Boolean(!session.images)}
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                {session.images ? "Session Images" : "N/A"}
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] max-w-7xl overflow-auto">
              <DialogTitle>{session.title}</DialogTitle>
              <DialogDescription></DialogDescription>
              <div className="flex flex-wrap items-start justify-center gap-6 py-8">
                {session.images?.map((image, index) => (
                  <div key={index} className="flex flex-col items-center gap-4">
                    <div className="overflow-hidden rounded-md">
                      <img src={image} alt={session.title} />
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <Assets {...session} />
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
