
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MicSquare } from "lucide-react";

export default function RecordMeetingCard() {
  return (
    <Card className="bg-primary text-primary-foreground overflow-hidden relative">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Record a Meeting</CardTitle>
        <CardDescription className="text-primary-foreground/80">
          Start capturing your important discussions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mt-2">
          <Button 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/record">
              Start Recording
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="absolute right-4 bottom-4 opacity-20">
          <MicSquare className="h-24 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}
