import { Blog } from "@/types/blog";
 
const blogData: Blog[] = [
  {
    id: 1,
    title: "Dashboards",
    paragraph:
      "Access ready-made robust and dynamic dashboards that provide a visual overview of your most important metrics and KPIs.",
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
    title: "Sales Forecasting",
    paragraph:
      "Predict future sales trends with our powerful forecasting tools, helping you make informed decisions and set realistic goals.",
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
    title: "Lead Scoring.",
    paragraph:
      "Prioritise leads based on their interactions and engagement, ensuring your sales team focuses on the most promising opportunities, all within the TopSalesWeb platform.",
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
