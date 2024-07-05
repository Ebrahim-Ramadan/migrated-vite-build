import { Twitter, Youtube, Github, Linkedin } from "lucide-react";
import { Blog, Resume, Upwork } from "./Icons";
export const Socials = [
  {
    id: 3,
    icon: <Twitter className="text-3xl" />,
    URL: "https://x.com/scoopsahoykid",
  },
  {
    id: 1,
    icon: <Github />,
    URL: "https://github.com/ebrahim-Ramadan/ebrahim-Ramadan",
  },
  {
    id: 2,
    icon: <Linkedin />,
    URL: "https://www.linkedin.com/in/ebrahimramadan791/",
  },
  {
    id: 4,
    icon: <Upwork />,
    URL: "https://www.upwork.com/freelancers/~01ac4edad37fb8d60d",
  },
];

export const Redirects = [
  {
    id: 2,
    text: "Blog",
    icon: <Blog />,
    URL: "/blogs",
  },
  {
    id: 3,
    text: "Channel",
    icon: <Youtube />,
    URL: "https://www.youtube.com/@sharmojj",
  },
  {
    id: 1,
    text: "Resume",
    icon: <Resume />,
    URL: "https://drive.google.com/file/d/1PZT7XO83HSmS2X5BmTjWntBAc7lTf9M1/view",
  },
];
