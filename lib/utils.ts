import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 1) {
    return `${years}y ago`;
  } else if (months > 1) {
    return `${months}mo ago`;
  } else if (days > 1) {
    return `${days}d ago`;
  } else if (hours > 1) {
    return `${hours}h ago`;
  } else if (minutes > 1) {
    return `${minutes}m ago`;
  } else {
    return "Just now";
  }
};

export const formatNumber = (val: number): string => {
  const absValue = Math.abs(val);

  if (absValue >= 1e9) {
    return (val / 1e9).toFixed(1) + "B";
  } else if (absValue >= 1e6) {
    return (val / 1e6).toFixed(1) + "M";
  } else if (absValue >= 1e3) {
    return (val / 1e3).toFixed(1) + "K";
  } else {
    return val.toString();
  }
};
