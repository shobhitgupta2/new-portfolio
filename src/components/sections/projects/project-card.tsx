import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  url: string;
  description: string;
  image: string;
  technologies: string[];
}

export const ProjectCard = ({
  title,
  url,
  description,
  image,
  technologies,
}: ProjectProps) => {
  return (
    <div className="w-xs md:w-md self-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl flex flex-row justify-between">
            {title}
            <Link
              href={url}
              target="_blank"
              className="hover:text-primary duration-200"
            >
              <ExternalLink />
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full h-48 md:h-64 p-2 relative">
          <Image fill src={image} alt="Notica App Screenshot" />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="w-full">{description}</div>
          <div className="w-full flex flex-row gap-2 flex-wrap">
            {technologies.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
