
import React from "react";

interface IconProps {
  className?: string;
}

export const GoogleMeetLogo: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
    <path d="m8 10 4 4 4-4" />
  </svg>
);

export const MsTeamsLogo: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 10v4" />
    <path d="M12 8v8" />
    <path d="M16 14v-4" />
    <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
  </svg>
);

export const DiscordLogo: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 4.5V7" />
    <path d="M15 4.5V7" />
    <path d="M5.5 14c6.667 0 12.5 1.5 12.5 1.5V6c0-1.667-1.5-3-3-3H9C7.5 3 6 4.333 6 6v9.5c0 .3 0 .97-.5 1.5" />
    <path d="M12 8.5v4" />
    <path d="M9 10.5h6" />
    <path d="M20 5c0 2-1.456 3-2 3" />
    <path d="M4 5c0 2 1.456 3 2 3" />
  </svg>
);
