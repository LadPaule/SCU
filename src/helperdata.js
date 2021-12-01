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

export const ChannelInfo = () => (
  <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.16602 6.49837H9.83269V4.83171H8.16602V6.49837ZM8.99936 15.665C5.32351 15.665 2.33268 12.6743 2.33268 8.99833C2.33268 5.32253 5.32351 2.33171 8.99936 2.33171C12.6752 2.33171 15.666 5.32253 15.666 8.99833C15.666 12.6743 12.6752 15.665 8.99936 15.665ZM8.99936 0.665039C4.39684 0.665039 0.666016 4.39587 0.666016 8.99833C0.666016 13.6009 4.39684 17.3317 8.99936 17.3317C13.6019 17.3317 17.3327 13.6009 17.3327 8.99833C17.3327 4.39587 13.6019 0.665039 8.99936 0.665039ZM8.16602 13.165H9.83269V8.165H8.16602V13.165Z'
      fill='blue'
      fillOpacity='0.33'
    />
  </svg>
);

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
