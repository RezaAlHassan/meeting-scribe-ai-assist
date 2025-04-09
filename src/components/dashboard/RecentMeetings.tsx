
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid, List, Search } from "lucide-react";
import MeetingCard, { Meeting } from "./MeetingCard";

// Sample data
const dummyMeetings: Meeting[] = [
  {
    id: "1",
    title: "Weekly Product Sprint Planning",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
    duration: 45,
    participants: 8,
    summary: "Discussed Q2 roadmap, assigned sprint tasks, and reviewed design mockups for the new dashboard interface.",
    tags: ["Sprint", "Planning", "Product"],
    aiChats: 3,
  },
  {
    id: "2",
    title: "Engineering Team Standup",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    duration: 15,
    participants: 6,
    summary: "Quick updates on current tasks, blockers discussed include API rate limits and test coverage improvements.",
    tags: ["Daily", "Standup", "Engineering"],
  },
  {
    id: "3",
    title: "Marketing Campaign Review",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    duration: 60,
    participants: 5,
    summary: "Analyzed Q1 campaign performance, brainstormed ideas for summer promotion, allocated budget for social media ads.",
    tags: ["Marketing", "Review", "Budget"],
    aiChats: 2,
  },
  {
    id: "4",
    title: "Customer Feedback Session",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    duration: 50,
    participants: 12,
    summary: "Gathered feedback on recent UI changes, discovered pain points in the onboarding flow, prioritized issues for next sprint.",
    tags: ["Feedback", "Customers", "UX"],
    aiChats: 5,
  },
];

export default function RecentMeetings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const filteredMeetings = dummyMeetings.filter((meeting) => {
    const query = searchQuery.toLowerCase();
    return (
      meeting.title.toLowerCase().includes(query) ||
      meeting.summary.toLowerCase().includes(query) ||
      meeting.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h2 className="text-xl font-semibold">Recent Meetings</h2>
        
        <div className="flex items-center space-x-2">
          <div className="relative flex-grow sm:flex-grow-0 sm:w-60">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search meetings..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-r-none ${viewMode === 'grid' ? 'bg-muted' : ''}`}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-l-none ${viewMode === 'list' ? 'bg-muted' : ''}`}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMeetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredMeetings.map((meeting) => (
            <div key={meeting.id} className="border rounded-lg p-3 hover:shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{meeting.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{meeting.summary}</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href={`/transcripts/${meeting.id}`}>View</a>
                </Button>
              </div>
              <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {meeting.duration} min
                  </span>
                  <span className="flex items-center">
                    <Users className="mr-1 h-3 w-3" />
                    {meeting.participants}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {meeting.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
