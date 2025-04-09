
import { formatDistanceToNow } from "date-fns";
import { Clock, MessageSquare, Sparkles, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Meeting {
  id: string;
  title: string;
  date: Date;
  duration: number; // in minutes
  participants: number;
  summary: string;
  tags: string[];
  aiChats?: number;
}

interface MeetingCardProps {
  meeting: Meeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const { id, title, date, duration, participants, summary, tags, aiChats = 0 } = meeting;
  
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
        </div>
        <div className="flex text-sm text-muted-foreground items-center space-x-4">
          <span className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            {formatDistanceToNow(date, { addSuffix: true })}
          </span>
          <span className="flex items-center">
            <Users className="mr-1 h-3 w-3" />
            {participants}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t flex justify-between">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          <span>{duration} min</span>
          {aiChats > 0 && (
            <div className="flex items-center ml-3">
              <MessageSquare className="h-3 w-3 mr-1" />
              <span>{aiChats}</span>
            </div>
          )}
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/transcripts/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
