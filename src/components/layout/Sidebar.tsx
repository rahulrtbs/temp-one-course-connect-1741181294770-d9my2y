
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Users2, PieChart, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="text-xl font-semibold text-gray-800">One Course</Link>
      </div>
      
      <nav className="flex-1 p-4">
        <p className="text-xs font-semibold text-gray-400 uppercase mb-4">MENU</p>
        <div className="space-y-2">
          <Link 
            to="/"
            className="flex items-center space-x-3 text-gray-600 hover:text-primary hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Overview</span>
          </Link>
          
          <Link 
            to="/users"
            className="flex items-center space-x-3 text-gray-600 hover:text-primary hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Users</span>
          </Link>
          
          <Link 
            to="/courses"
            className="flex items-center space-x-3 text-gray-600 hover:text-primary hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            <span>Courses</span>
          </Link>
          
          <Link 
            to="/community"
            className="flex items-center space-x-3 text-gray-600 hover:text-primary hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <Users2 className="w-5 h-5" />
            <span>Community</span>
          </Link>
          
          <Link 
            to="/reports"
            className="flex items-center space-x-3 text-gray-600 hover:text-primary hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <PieChart className="w-5 h-5" />
            <span>Reports & Analytics</span>
          </Link>
          
          <Link 
            to="/support"
            className="flex items-center space-x-3 text-gray-600 hover:text-primary hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Support</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
