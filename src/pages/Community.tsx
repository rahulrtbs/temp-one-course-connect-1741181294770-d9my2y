
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, Shield, Users2 } from "lucide-react";

const Community = () => {
  const communities = [
    {
      title: "DevOps",
      description: "Learn about our DevOps practices and tools",
      icon: Code,
      members: 234
    },
    {
      title: "Legal",
      description: "Legal resources and compliance guidelines",
      icon: Briefcase,
      members: 156
    },
    {
      title: "Insurance",
      description: "Insurance policies and coverage details",
      icon: Shield,
      members: 189
    },
    {
      title: "Community",
      description: "Connect with other members",
      icon: Users2,
      members: 567
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Community</h2>
        <p className="text-muted-foreground">
          Connect with other professionals and join our communities
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {communities.map((community) => (
          <Card key={community.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <community.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{community.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{community.description}</p>
              <p className="text-sm font-medium">{community.members} Members</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Community;
