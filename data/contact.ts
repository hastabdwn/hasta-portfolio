// data/contact.ts
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface ContactLink {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
  color: string;
  isExternal: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    label: "Email Me",
    href: "mailto:hastabudiawan9@gmail.com",
    icon: Mail,
    color: "bg-[#FFA552]",
    isExternal: false,
  },
  {
    label: "Github",
    href: "https://github.com/hastabdwn",
    icon: FaGithub,
    color: "bg-white", // Putih
    isExternal: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hastabudiawan/",
    icon: FaLinkedin,
    color: "bg-[#93c5fd]",
    isExternal: true,
  },
];
