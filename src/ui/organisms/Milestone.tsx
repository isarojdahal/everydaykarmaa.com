import { CalendarCheck, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/shadcn/card";
import { Button } from "@/ui/shadcn/button";

export default function Milestones() {
  const milestones = [
    {
      title: "Free React.js Course",
      date: "Jan 5, 2022 - Apr 19, 2022",
      duration: "3.5 Months",
      icon: <CalendarCheck className="h-6 w-6" />,
      youtubeLink: "https://youtu.be/ILDIicJDZsI?si=3RcO0X9o4TWoFjv6",
    },
    {
      title: "Free Node.js Course",
      date: "May 8, 2022 - May 29, 2022",
      duration: "3 Weeks",
      icon: <CalendarCheck className="h-6 w-6" />,

      youtubeLink: "https://youtu.be/KE9DatgZm9U?si=AhXIwEUWBisw2-9U",
    },
    {
      title: "Free JavaScript Course",
      date: "Sep 18, 2023 - Oct 15, 2023",
      duration: "4 Weeks",
      icon: <CalendarCheck className="h-6 w-6" />,
      youtubeLink: "https://youtu.be/OAl6_9cSJ_E?si=vHilowo6rXCLcza-",
    },
  ];

  return (
    <section className="w-full mt-14 md:mt-20 px-6 md:px-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <p className="~text-4xl/7xl text-everydaykarma text-center font-bold mb-16">
          Milestones Achieved
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
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
                    <Youtube className="h-4 w-4" />
                    Watch Course
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
