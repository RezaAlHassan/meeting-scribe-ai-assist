
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DiscordLogo, GoogleMeetLogo, MsTeamsLogo } from "@/components/icons/IntegrationIcons";
import { AlertCircle, CheckCircle2, Copy, Link, Mic, MicOff, UploadCloud } from "lucide-react";

export default function RecordingPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingUrl, setMeetingUrl] = useState("");

  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording logic would go here
      setIsRecording(false);
      setRecordingTime(0);
      // In a real implementation, this would save the recording
    } else {
      // Start recording logic would go here
      setIsRecording(true);
      // In a real implementation, this would start the recording
    }
  };

  return (
    <MainLayout>
      <div className="py-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Record Meeting</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Meeting Details</CardTitle>
                <CardDescription>
                  Enter meeting information to help organize your recordings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="meeting-title" className="text-sm font-medium">
                    Meeting Title
                  </label>
                  <Input 
                    id="meeting-title" 
                    placeholder="Enter a descriptive title" 
                    value={meetingTitle}
                    onChange={(e) => setMeetingTitle(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="meeting-url" className="text-sm font-medium flex items-center">
                    Meeting URL
                    <span className="text-xs text-muted-foreground ml-2">
                      (optional)
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <Input 
                      id="meeting-url" 
                      placeholder="Paste meeting link" 
                      value={meetingUrl}
                      onChange={(e) => setMeetingUrl(e.target.value)}
                    />
                    <Button variant="outline" size="icon">
                      <Link className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recording Controls</CardTitle>
                <CardDescription>
                  {isRecording 
                    ? "Recording in progress. Click stop when you're finished."
                    : "Click start to begin recording your meeting"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <Button 
                    onClick={toggleRecording}
                    className={`rounded-full px-8 py-6 ${isRecording ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    size="lg"
                  >
                    {isRecording ? (
                      <div className="flex items-center">
                        <div className="recording-indicator mr-2" />
                        Stop Recording
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Mic className="mr-2 h-5 w-5" />
                        Start Recording
                      </div>
                    )}
                  </Button>
                </div>
                
                {isRecording && (
                  <div className="text-center text-lg font-semibold">
                    00:00:{String(recordingTime).padStart(2, '0')}
                  </div>
                )}
                
                <div className="border rounded-lg p-4 bg-muted/30">
                  <h3 className="font-medium mb-2">Tips for better recordings</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Use headphones to avoid audio feedback
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Find a quiet environment with minimal background noise
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Ask participants to speak clearly and one at a time
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                      Check your microphone settings before starting
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recording Options</CardTitle>
                <CardDescription>
                  Choose how to record your meeting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="integration">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="integration" className="flex-1">Integrations</TabsTrigger>
                    <TabsTrigger value="upload" className="flex-1">Upload</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="integration" className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect to your meeting platform to record and transcribe in real-time
                    </p>
                    
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <GoogleMeetLogo className="h-5 w-5 mr-2" />
                        Connect to Google Meet
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <MsTeamsLogo className="h-5 w-5 mr-2" />
                        Connect to Microsoft Teams
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <DiscordLogo className="h-5 w-5 mr-2" />
                        Connect to Discord
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upload" className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload an existing recording to transcribe and analyze
                    </p>
                    
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <UploadCloud className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <h3 className="font-medium mb-1">Drag and drop file</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        or click to browse files
                      </p>
                      <Button variant="secondary" size="sm">
                        Select File
                      </Button>
                      <p className="text-xs text-muted-foreground mt-4">
                        Supports MP3, WAV, MP4 (max 2GB)
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Invite Participants</CardTitle>
                <CardDescription>
                  Share link to invite others
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Input 
                    value="https://meeting-scribe.ai/join/abc123" 
                    readOnly
                  />
                  <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Anyone with this link can join this recording session
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
