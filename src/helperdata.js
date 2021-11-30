import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  AdjustmentsIcon,
  HandIcon,
  DocumentTextIcon,
  EyeOffIcon,
  EmojiHappyIcon,
  UsersIcon,
} from "@heroicons/react/solid";
export const helperdata = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Discipleship & Evangelism",
    path: "/discipleship",
  },
  {
    title: "Education Support",
    path: "/education",
  },
  {
    title: "Skills Developemet",
    path: "/skills",
  },
  {
    title: "Crisis care",
    path: "/crisis-care",
  },
  {
    title: "Participate",
    path: "/participate",
  },
];
export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon className="mr-2 h-8"/>,
  },
  {
    title: "Discipleship & Evangelism",
    path: "/discipleship",
    icon: <UserGroupIcon className="mr-2 h-5"/>,
  },
  {
    title: "Education Support",
    path: "/education",
    icon: <AcademicCapIcon className="h-5 mr-2"/>,
  },
  {
    title: "Skills Developemet",
    path: "/skills",
    icon: <AdjustmentsIcon className="h-5 mr-2"/>,
  },
  {
    title: "Crisis care",
    path: "/crisis-care",
    icon: <HandIcon className="h-5 mr-2"/>,
  },
  {
    title: "Participate",
    path: "/participate",
    icon: <UsersIcon className="h-5 mr-2"/>,
  },
  {
    title: "About",
    path: "/about",
    icon: <EmojiHappyIcon className="h-5 mr-2"/>,
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
    icon: <EyeOffIcon className="h-5 mr-2"/>,
  },
  {
    title: "Terms of Service",
    path: "/terms-of-service",
    icon: <DocumentTextIcon className="h-5 mr-2"/>,
  },
];
