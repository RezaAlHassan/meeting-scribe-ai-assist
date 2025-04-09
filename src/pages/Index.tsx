
import MainLayout from "@/components/layout/MainLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentMeetings from "@/components/dashboard/RecentMeetings";
import RecordMeetingCard from "@/components/dashboard/RecordMeetingCard";
import UpcomingMeetings from "@/components/dashboard/UpcomingMeetings";

const Index = () => {
  return (
    <MainLayout>
      <div className="py-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <StatsCards />
          </div>
          <div className="lg:col-span-1">
            <RecordMeetingCard />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <RecentMeetings />
          </div>
          <div className="lg:col-span-1">
            <UpcomingMeetings />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
