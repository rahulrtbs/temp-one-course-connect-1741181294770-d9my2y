
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, ChartPie, Users, Book, Globe } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const stats = [
    {
      title: "Total Users",
      value: "3,456",
      icon: Users,
      description: "Active users in platform"
    },
    {
      title: "Total Courses",
      value: "245",
      icon: Book,
      description: "Available courses"
    },
    {
      title: "Communities",
      value: "56",
      icon: Globe,
      description: "Active communities"
    }
  ];

  const locationData = [
    { name: 'New York', users: 856 },
    { name: 'California', users: 754 },
    { name: 'Texas', users: 623 },
    { name: 'Florida', users: 521 },
    { name: 'Illinois', users: 489 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
        <p className="text-muted-foreground">
          Platform statistics and analysis
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Users by Location</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={locationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
