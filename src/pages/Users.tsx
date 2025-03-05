
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { User, UserPlus } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/api";
import type { User as UserType } from "@/types";

const Users = () => {
  const [selectedRole, setSelectedRole] = useState<'all' | 'teacher' | 'student'>('all');

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: userService.getUsers,
  });

  const filteredUsers = users.filter((user: UserType) => {
    if (selectedRole === 'all') return true;
    return user.role === selectedRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Manage users, roles and permissions
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      <div className="flex space-x-4 mb-6">
        <Button
          variant={selectedRole === 'all' ? "default" : "outline"}
          onClick={() => setSelectedRole('all')}
        >
          All Users
        </Button>
        <Button
          variant={selectedRole === 'teacher' ? "default" : "outline"}
          onClick={() => setSelectedRole('teacher')}
        >
          Teachers
        </Button>
        <Button
          variant={selectedRole === 'student' ? "default" : "outline"}
          onClick={() => setSelectedRole('student')}
        >
          Students
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user: UserType) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell className="capitalize">{user.role}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.department || '-'}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
