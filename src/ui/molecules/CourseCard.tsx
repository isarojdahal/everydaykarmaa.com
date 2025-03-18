import { Card, CardContent, CardFooter, CardHeader } from "../shadcn/card";
import { Button } from "../shadcn/button";

interface CourseCardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  videoCount?: number;
  detailsUrl?: string;
}

export default function CourseCard({
  title,
  description,
  price,
  thumbnail,
  videoCount,
  detailsUrl,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className=" object-fill transition-transform hover:scale-105"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>

            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              {videoCount} videos
            </span>
          </div>
          <div className="font-bold text-lg">Nrs.{price.toFixed(2)}</div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <a href={detailsUrl}>View Details</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
