import axios from 'axios';

const API_URL = 'https://myapi.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock data
const mockUsers = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "teacher",
    courses: [101, 102],
    department: "Computer Science"
  },
  {
    id: 2,
    name: "Prof. James Miller",
    email: "james.miller@example.com",
    role: "teacher",
    courses: [103],
    department: "Mathematics"
  },
  {
    id: 3,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "student",
    courses: [101, 103],
    enrollmentDate: "2024-01-15"
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    role: "student",
    courses: [102],
    enrollmentDate: "2024-01-20"
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "student",
    courses: [101, 102, 103],
    enrollmentDate: "2024-01-10"
  }
];

const mockCourses = [
  {
    id: 101,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    instructor: "Dr. Sarah Wilson",
    students: [3, 5],
    department: "Computer Science",
    credits: 3,
    duration: "12 weeks"
  },
  {
    id: 102,
    title: "Advanced React Programming",
    description: "Master React.js concepts, state management, and modern web application development.",
    instructor: "Dr. Sarah Wilson",
    students: [4, 5],
    department: "Computer Science",
    credits: 4,
    duration: "14 weeks"
  },
  {
    id: 103,
    title: "Data Structures and Algorithms",
    description: "Understanding fundamental data structures and algorithm design principles.",
    instructor: "Prof. James Miller",
    students: [3, 5],
    department: "Mathematics",
    credits: 4,
    duration: "16 weeks"
  }
];

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await api.post('/user/login/', { email, password });
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  register: async (userData: any) => {
    try {
      const response = await api.post('/user/register/', userData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await api.post('/user/logout/');
      return response.data;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },
};

export const courseService = {
  getCourses: async () => {
    try {
      return mockCourses;
    } catch (error) {
      console.error('Get courses error:', error);
      throw error;
    }
  },
};

export const userService = {
  getUsers: async () => {
    try {
      return mockUsers;
    } catch (error) {
      console.error('Get users error:', error);
      throw error;
    }
  },
};

export default api;
