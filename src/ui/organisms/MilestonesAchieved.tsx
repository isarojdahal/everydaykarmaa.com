import { Card, CardContent, CardHeader, CardTitle } from "../shadcn/card";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";

const milestones = [
  {
    title: "1 Month long free React JS Course",
    date: "5th Jan 2022 to 19th April 2022",
    icon: <FaReact className='text-blue-500 text-4xl' />,
    description:
      "A comprehensive React course covering all the basics, hooks, and state management.",
    youtubeLink:
      "https://www.youtube.com/playlist?list=PL4njvVBDLL21Y8t9j5zEcqYvqODz3sH6o",
  },
  {
    title: "1 Month long free Node.js Course",
    date: "May 8 2022 to May 29 2022",
    icon: <FaNodeJs className='text-green-500 text-4xl' />,
    description:
      "Learn backend development with Node.js, including APIs, Express, and databases.",
    youtubeLink:
      "https://www.youtube.com/playlist?list=PL4njvVBDLL21S6bEXRC7agpBnVPiXNbj5", // node js youtube link
  },
  {
    title: "1 Month long free JavaScript Course",
    date: "Sept 18, 2023 to 15 Oct 2023",
    icon: <FaJsSquare className='text-yellow-500 text-4xl' />,
    description:
      "Master the fundamentals of JavaScript, including ES6 features and async programming.",
    youtubeLink:
      "https://www.youtube.com/playlist?list=PL4njvVBDLL23ldnM1oA0MJmRtbJJdkkah", // js youtube link
  },
];

const MilestoneAchieved = () => {
  return (
    <>
      <section className='py-16 bg-everydaykarma text-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-5xl font-bold text-center mb-4'>
            Milestone Achieved
          </h1>

          <p className='text-center text-lg mb-8 max-w-2xl mx-auto'>
            Here's what we’ve accomplished over time.
          </p>

          {/* Grid Layout for Milestones */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {milestones.map((milestone, index) => (
              <div key={index} className='flex justify-center'>
                <Card className='w-full max-w-sm bg-card shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <CardHeader className='flex items-center space-x-4'>
                    {/* Display Icon Next to Title */}
                    <div>{milestone.icon}</div>
                    <CardTitle className='text-xl font-semibold'>
                      {milestone.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      {milestone.date}
                    </p>

                    {/* Course Description */}
                    <p className='mt-2 text-large text-foreground'>
                      {milestone.description}
                    </p>

                    {/* YouTube Button */}
                    <div className='mt-4'>
                      <a
                        className='bg-primary sm:hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105' // Added hover effects
                        href={milestone.youtubeLink}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Watch Course on YouTube
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MilestoneAchieved;
