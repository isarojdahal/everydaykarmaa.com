import { CalendarCheck, Compass } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/shadcn/card";
import { Button } from "@/ui/shadcn/button";
import SectionHeading from "../atoms/SectionHeading";
import PageSection from "../atoms/PageSection";

export default function Milestones() {
  const milestones = [
    {
      title: "Free React.js Course",
      date: "Jan 5, 2022 - Jan 28, 2022",
      duration: "1 Months",
      icon: <CalendarCheck className="h-6 w-6" />,
      link: "https://learn.everydaykarmaa.com/notes/reactjs/understanding-package-managers-npm.-vs-yarn-intro-to-react-js",
    },
    {
      title: "Free Node.js Course",
      date: "May 8, 2022 - May 29, 2022",
      duration: "3 Weeks",
      icon: <CalendarCheck className="h-6 w-6" />,
      link: "https://learn.everydaykarmaa.com/notes/nodejs/Introduction/Introduction%20to%20Node.js",
    },
    {
      title: "Free JavaScript Course",
      date: "Sep 18, 2023 - Oct 15, 2023",
      duration: "4 Weeks",
      icon: <CalendarCheck className="h-6 w-6" />,
      link: "https://learn.everydaykarmaa.com/notes/javascript/introduction-to-javascript-history-js-engines-js-programming-paradigms",
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
                  href={milestone.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Compass className="size-5" />
                  Explore Course
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}
