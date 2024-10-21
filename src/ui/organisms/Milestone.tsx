import { CalendarCheck } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/shadcn/card";
import { Button } from "@/ui/shadcn/button";
import SectionHeading from "../atoms/SectionHeading";
import PageSection from "../atoms/PageSection";

export default function Milestones() {
  const milestones = [
    {
      title: "Free React.js Course",
      date: "Jan 5, 2022 - Apr 19, 2022",
      duration: "3.5 Months",
      icon: <CalendarCheck className="h-6 w-6" />,
      youtubeLink:
        "https://www.youtube.com/watch?v=ILDIicJDZsI&list=PL4njvVBDLL21Y8t9j5zEcqYvqODz3sH6o&index=1",
    },
    {
      title: "Free Node.js Course",
      date: "May 8, 2022 - May 29, 2022",
      duration: "3 Weeks",
      icon: <CalendarCheck className="h-6 w-6" />,
      youtubeLink:
        "https://www.youtube.com/watch?v=KE9DatgZm9U&list=PL4njvVBDLL21S6bEXRC7agpBnVPiXNbj5&index=1",
    },
    {
      title: "Free JavaScript Course",
      date: "Sep 18, 2023 - Oct 15, 2023",
      duration: "4 Weeks",
      icon: <CalendarCheck className="h-6 w-6" />,
      youtubeLink:
        "https://www.youtube.com/watch?v=OAl6_9cSJ_E&list=PL4njvVBDLL23ldnM1oA0MJmRtbJJdkkah&index=1",
    },
  ];

  return (
    <PageSection>
      <SectionHeading emoji="🚀">Milestones Achieved</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {milestones.map((milestone, index) => (
          <Card
            key={index}
            className="bg-white lg:hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 p-4">
              <div className="p-2 bg-primary rounded-full text-primary-foreground">
                {milestone.icon}
              </div>
              <CardTitle className="text-lg">{milestone.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-2">
                {milestone.date}
              </p>
              <p className="font-semibold mb-4">
                Duration: {milestone.duration}
              </p>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                asChild
              >
                <a
                  href={milestone.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="h-4 w-4" />
                  Watch Course
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}
