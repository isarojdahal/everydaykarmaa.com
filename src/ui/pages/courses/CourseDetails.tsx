import { useEffect, useState } from "react";
import { Play, Clock, Search, LucideArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

const CourseDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [courseData, setCourseData] = useState<any>([]);

  useEffect(() => {
    switch (window.location.pathname.split("/").pop()) {
      case "intermediate-nodejs":
        import("@/constants/data/courses/NodejsIntermediate.json").then(
          (res) => {
            setCourseData(res.default);
          },
        );

        break;

      case "beginner-javascript":
        import("@/constants/data/courses/JavaScript1MonthCourse.json").then(
          (res) => {
            setCourseData(res.default);
          },
        );
        break;

      case "docker":
        import("@/constants/data/courses/Docker.json").then((res) => {
          setCourseData(res.default);
        });
        break;

      case "typeorm":
        import("@/constants/data/courses/TypeORMCourse.json").then((res) => {
          setCourseData(res.default);
        });
    }
  }, [courseData]);

  if (courseData.length <= 0) return <>Unable to load course</>;
  console.log("courseData", courseData);
  // Filter videos based on search query
  const filteredVideos = searchQuery
    ? courseData.data.filter((video: any) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : courseData.data;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link className="flex items-center gap-2" to="/courses">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
              <span className="text-lg font-bold text-white">
                <LucideArrowLeft />
              </span>
            </div>
            <span className="text-lg font-semibold">Back to Page</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex  flex-col gap-4  justify-end md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* buy  */}
          {courseData.meta.buyCourseLink && (
            <a href={courseData.meta.buyCourseLink}>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm">
                <span>Buy Course</span>
              </button>
            </a>
          )}
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Course Content
            </h2>
            <div className="text-sm text-gray-500">
              {courseData.data.length} videos •
            </div>
          </div>

          <div className="divide-y">
            {filteredVideos.map((video: any, videoIndex: number) => {
              return (
                <div className="flex flex-row justify-between items-center">
                  <Link
                    key={videoIndex}
                    className="flex items-start gap-3 p-4 hover:bg-gray-50"
                    to={video.videoURL}
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <Play className="h-4 w-4 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500">
                          Video {videoIndex + 1}
                        </span>
                      </div>
                      <h4 className="mt-1 font-medium text-gray-900">
                        {video.title}
                      </h4>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {video.isFree ||
                    (!courseData.meta.buyCourseLink && (
                      <a href={video.videoURL}>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm">
                          <span>
                            {courseData.meta.buyCourseLink
                              ? "Watch Demo"
                              : "Watch"}
                          </span>
                        </button>
                      </a>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
