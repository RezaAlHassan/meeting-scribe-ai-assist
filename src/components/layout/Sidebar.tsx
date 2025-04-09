
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Clock, 
  FileText, 
  Home, 
  ListTodo, 
  Menu, 
  MessageSquare, 
  MicSquare, 
  Plus, 
  Settings, 
  X 
} from "lucide-react";

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Recordings", href: "/recordings", icon: MicSquare },
  { name: "Transcripts", href: "/transcripts", icon: FileText },
  { name: "Tasks", href: "/tasks", icon: ListTodo },
  { name: "Conversations", href: "/chats", icon: MessageSquare },
  { name: "Analytics", href: "/analytics", icon: BarChart },
];

const secondaryNavigation: NavigationItem[] = [
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open sidebar</span>
      </Button>
      
      {/* Sidebar for mobile (off-canvas) */}
      <div 
        className={cn(
          "fixed inset-0 z-30 md:hidden transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-gray-900/50" onClick={() => setIsOpen(false)} />
        
        <div 
          className={cn(
            "fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold">MeetingScribe</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col h-full px-2 pt-2 pb-4">
            <div className="space-y-1 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm rounded-md",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex-1"></div>
            <div className="space-y-1 pt-10 border-t">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm rounded-md",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      
      {/* Sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:flex-col md:w-64">
        <div className="flex min-h-0 flex-1 flex-col bg-sidebar border-r border-sidebar-border">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <Clock className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold">MeetingScribe</span>
            </div>
            <div className="px-4 mt-6">
              <Button className="w-full justify-start" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Recording
              </Button>
            </div>
            <nav className="mt-6 flex-1 space-y-1 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-sidebar-border p-4">
            <nav className="w-full space-y-1">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
