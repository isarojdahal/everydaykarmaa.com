import { useState, useEffect } from "react";
import { CalendarDays, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/ui/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/shadcn/card";

export default function Component() {
  const [showAllFeedback, setShowAllFeedback] = useState(false);

  //   const milestones = [
  //     {
  //       title: "Free React.js Course",
  //       duration: "5th Jan 2022 to 19th April 2022",
  //       length: "1 Month long",
  //     },
  //     {
  //       title: "Free Node.js Course",
  //       duration: "May 8 2022 to May 29 2022",
  //       length: "1 Month long",
  //     },
  //     {
  //       title: "Free JavaScript Course",
  //       duration: "Sept 18, 2023 to 15 Oct 2023",
  //       length: "1 Month long",
  //     },
  //   ];

  const feedbacks = [
    {
      name: "Bardan Nepali",
      comment:
        "Maile hjurko React.js ko playlist herera react sike ani ahile intern gardai xu",
    },
    {
      name: "Ankit Bhusal",
      comment:
        "Mile MERN stack sikeko nai Everyday karmaa ko YouTube channel bata ho ✅",
    },
    {
      name: "Shankar poudel",
      comment:
        "Saroj dai vata nai ma IT maa attract vako ho. Baglung aako bela dai ley malai yeti majjlea QBASIC bujhaidenu vako theyo zindagi maa ma kailai bersena sakdeenna. QBASIC dekhi Node JS sekeako mailea dai vata nai ho.❤️",
    },
    {
      name: "Kanchan Basnet",
      comment:
        "I am learning JS from your channel and the way you teach is so good. keep up the good work.❤️",
    },
    {
      name: "Sabin Poudel",
      comment:
        "Hello Daju, I recently discovered your YouTube channel. the content you are delivering is very in-depth, and i am following your javascript and Node.js playlist. It's very helpful.",
    },
  ];

  const displayedFeedbacks = showAllFeedback
    ? feedbacks
    : feedbacks.slice(0, 3);

  return (
    <section className="w-full  py-20 p-12 ">
      <div className="container mx-auto px-4 md:px-6">
        <p className="~text-4xl/7xl text-everydaykarma text-center font-bold mb-16">
          What our student's have to say?
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {displayedFeedbacks.map((feedback, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <MessageCircle className="w-8 h-8 text-primary" />
                <CardTitle>{feedback.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{feedback.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button onClick={() => setShowAllFeedback(!showAllFeedback)}>
            {showAllFeedback ? "Show Less" : "View All Feedback"}
          </Button>
        </div>
      </div>
    </section>
  );
}
