
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap, TrendingUp } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, trend }: any) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">
        {trend} from last month
      </p>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back to your dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Courses"
          value="246"
          icon={BookOpen}
          trend="+20.1%"
        />
        <StatCard
          title="Active Students"
          value="2350"
          icon={Users}
          trend="+15.1%"
        />
        <StatCard
          title="Teachers"
          value="32"
          icon={GraduationCap}
          trend="+10.1%"
        />
        <StatCard
          title="Revenue"
          value="$45,231.89"
          icon={TrendingUp}
          trend="+35.1%"
        />
      </div>
    </div>
  );
};

export default Index;
