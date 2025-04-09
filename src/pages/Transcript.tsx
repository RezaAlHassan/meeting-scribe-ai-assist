
import { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  BookOpen, 
  Check, 
  CheckCheck, 
  Copy, 
  Download, 
  ListTodo, 
  MessageSquare, 
  Share2, 
  Sparkles, 
  Users 
} from "lucide-react";

// Sample meeting details
const meetingDetails = {
  id: "1",
  title: "Weekly Product Sprint Planning",
  date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  duration: 45,
  participants: [
    { id: "p1", name: "Alex Johnson", avatar: "", initials: "AJ" },
    { id: "p2", name: "Sam Wilson", avatar: "", initials: "SW" },
    { id: "p3", name: "Jordan Lee", avatar: "", initials: "JL" },
    { id: "p4", name: "Taylor Smith", avatar: "", initials: "TS" },
  ],
  tags: ["Sprint", "Planning", "Product"],
  transcriptText: `
Alex Johnson: Welcome everyone to our weekly sprint planning. Let's start by reviewing what we accomplished last week.

Sam Wilson: We completed the authentication flow redesign and fixed those critical bugs in the checkout process.

Jordan Lee: I've finished the API integration for the product catalog, but I'm still working on the error handling.

Taylor Smith: The design team has finalized the mockups for the dashboard, and we're ready to start implementation.

Alex Johnson: Great progress team! For this week, I think we should prioritize the dashboard implementation and the remaining API work.

Jordan Lee: I'll need some help with the error handling. There are some edge cases we need to account for.

Sam Wilson: I can help with that. I also want to start working on the performance optimizations we discussed.

Taylor Smith: I'll start implementing the dashboard components. Should we use the new component library?

Alex Johnson: Yes, let's use the new components. It will help us maintain consistency. Also, don't forget we have that customer demo on Friday.

Sam Wilson: Right, we should make sure everything is stable by Thursday then.

Alex Johnson: Exactly. Let's also set aside some time to prepare for the demo. Any other topics we need to discuss?

Jordan Lee: I've noticed some inconsistencies in how we're handling state management across different components. Maybe we should establish some guidelines?

Alex Johnson: Good point. Let's schedule a separate architecture discussion tomorrow to address that.

Taylor Smith: Sounds good. I've also been working on documenting our component usage. I'll share that with everyone after this meeting.

Alex Johnson: Perfect. Let's wrap up here then. Everyone knows what they're working on this week?

Sam Wilson: Clear on my end.

Jordan Lee: Yes, all set.

Taylor Smith: Ready to go.

Alex Johnson: Great! Let's have a productive week. Meeting adjourned.
  `,
  summary: "The team reviewed last week's accomplishments including authentication redesign and bug fixes. For the upcoming week, they will focus on dashboard implementation, API error handling, and performance optimizations. A customer demo is scheduled for Friday, requiring all features to be stable by Thursday. The team also plans to address state management inconsistencies in a separate architecture discussion.",
  keyTopics: [
    "Previous sprint review",
    "Dashboard implementation",
    "API integration and error handling",
    "Component library usage",
    "Customer demo preparation",
    "State management guidelines"
  ],
  decisions: [
    "Use the new component library for dashboard implementation",
    "Schedule architecture discussion for tomorrow",
    "Ensure all features are stable by Thursday for the customer demo"
  ],
  tasks: [
    { id: "t1", text: "Implement dashboard components using new library", assignee: "Taylor Smith", status: "todo" },
    { id: "t2", text: "Complete API error handling", assignee: "Jordan Lee", status: "todo" },
    { id: "t3", text: "Help with API error edge cases", assignee: "Sam Wilson", status: "todo" },
    { id: "t4", text: "Start performance optimizations", assignee: "Sam Wilson", status: "todo" },
    { id: "t5", text: "Prepare for customer demo", assignee: "All", status: "todo" },
    { id: "t6", text: "Document component usage", assignee: "Taylor Smith", status: "done" },
  ]
};

export default function TranscriptPage() {
  const { id } = useParams();
  const [aiQuestion, setAiQuestion] = useState("");
  
  // In a real app, we would fetch the meeting data based on the ID
  // For now, we'll just use our sample data
  const meeting = meetingDetails;
  
  return (
    <MainLayout>
      <div className="py-6">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{meeting.title}</h1>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>
                {meeting.date.toLocaleDateString()} ({meeting.duration} min)
              </span>
              <span className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                {meeting.participants.length} participants
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <Tabs defaultValue="transcript">
                <TabsList className="w-full">
                  <TabsTrigger value="transcript" className="flex-1">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Transcript
                  </TabsTrigger>
                  <TabsTrigger value="summary" className="flex-1">
                    <Sparkles className="mr-2 h-4 w-4" />
                    AI Summary
                  </TabsTrigger>
                  <TabsTrigger value="tasks" className="flex-1">
                    <ListTodo className="mr-2 h-4 w-4" />
                    Tasks
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="transcript" className="p-6 max-h-[600px] overflow-y-auto space-y-6">
                  {meeting.transcriptText.trim().split("\n\n").map((paragraph, idx) => {
                    if (!paragraph.trim()) return null;
                    
                    const [speaker, ...content] = paragraph.split(":");
                    const speakerText = content.join(":");
                    
                    return (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {speaker.trim().split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{speaker.trim()}</div>
                          </div>
                        </div>
                        <p className="ml-10 text-gray-700">{speakerText.trim()}</p>
                      </div>
                    );
                  })}
                </TabsContent>
                
                <TabsContent value="summary" className="p-6 max-h-[600px] overflow-y-auto space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center">
                        <Sparkles className="mr-2 h-5 w-5 text-primary" />
                        Meeting Summary
                      </h3>
                      <p className="mt-2">{meeting.summary}</p>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">Key Topics</h3>
                      <ul className="space-y-2">
                        {meeting.keyTopics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-primary"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">Decisions Made</h3>
                      <ul className="space-y-2">
                        {meeting.decisions.map((decision, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            {decision}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tasks" className="p-6 max-h-[600px] overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Action Items</h3>
                        <Button variant="outline" size="sm">
                          Export Tasks
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {meeting.tasks.filter(t => t.status !== 'done').map((task) => (
                          <div key={task.id} className="flex items-start gap-2 border rounded-md p-3">
                            <div className="mt-0.5">
                              <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{task.text}</p>
                              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                <span>Assigned to: {task.assignee}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {meeting.tasks.some(t => t.status === 'done') && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Completed</h3>
                        <div className="space-y-2">
                          {meeting.tasks.filter(t => t.status === 'done').map((task) => (
                            <div key={task.id} className="flex items-start gap-2 border rounded-md p-3 bg-muted/30">
                              <div className="mt-0.5">
                                <CheckCheck className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <p className="line-through text-muted-foreground">{task.text}</p>
                                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                  <span>Completed by: {task.assignee}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ask AI</CardTitle>
                <CardDescription>
                  Get more insights from your meeting transcript
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Textarea 
                      placeholder="Ask a question about this meeting..."
                      value={aiQuestion}
                      onChange={(e) => setAiQuestion(e.target.value)}
                      className="min-h-[80px]"
                    />
                    <Button className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Ask AI
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm mb-2">Suggested questions</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => setAiQuestion("What were the main decisions made in this meeting?")}>
                        What were the main decisions made?
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => setAiQuestion("Summarize the key discussion points about the dashboard implementation")}>
                        Summarize discussion about dashboard
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => setAiQuestion("What are the action items for Sam?")}>
                        What are Sam's action items?
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Meeting Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Participants</h3>
                    <div className="flex flex-wrap gap-2">
                      {meeting.participants.map((person) => (
                        <div key={person.id} className="flex items-center gap-2 bg-muted/50 rounded-full py-1 px-3">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="text-[10px]">{person.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{person.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {meeting.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Share</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Link
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
