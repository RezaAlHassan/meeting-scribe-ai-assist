
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CalendarDays } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface UpcomingMeeting {
  id: string;
  title: string;
  time: Date;
  participants: string[];
}

// Sample data
const upcomingMeetings: UpcomingMeeting[] = [
  {
    id: "1",
    title: "Weekly Team Standup",
    time: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    participants: ["Alex", "Jordan", "Sam", "+5 others"],
  },
  {
    id: "2",
    title: "Product Review",
    time: new Date(Date.now() + 24 * 60 * 60 * 1000), // tomorrow
    participants: ["Taylor", "Morgan", "+2 others"],
  },
  {
    id: "3",
    title: "Quarterly Planning",
    time: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    participants: ["Casey", "Riley", "Avery", "+8 others"],
  },
];

export default function UpcomingMeetings() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <CalendarDays className="mr-2 h-5 w-5" />
          Upcoming Meetings
        </CardTitle>
      </CardHeader>
      <CardContent>
        {upcomingMeetings.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4 text-center">
            No upcoming meetings scheduled
          </p>
        ) : (
          <div className="space-y-4">
            {upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="flex items-start space-x-4">
                <div className="bg-muted/50 rounded-md p-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-medium leading-none">{meeting.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(meeting.time, { addSuffix: true })}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                  {meeting.participants.map((person, idx) => (
                    <span key={idx} className="whitespace-nowrap">
                      {person}
                      {idx < meeting.participants.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
