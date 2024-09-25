import { Blog } from "@/types/blog";
 
const blogData: Blog[] = [
  {
    id: 1,
    title: "Contact Management",
    paragraph:
      "Keep all your client information organised in one place, with detailed profiles, interaction history, and easy access to key data.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Sales Pipeline",
    paragraph:
      "Visualise and manage your sales pipeline from start to finish, with predefined stages and real-time updates.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Task Management.",
    paragraph:
      " Stay on top of your to-dos with task assignments, reminders, and notifications that keep your team aligned and productive.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Email Integration.",
    paragraph:
      "Seamlessly connect your email accounts to TopSalesWeb, ensuring that all communications are logged and accessible.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
