"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Sampatti",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Loan Approved",
    description: "Congratulations",
    time: "10m ago",
    icon: "📝",
    color: "#FFB800",
  },
  {
    name: "Money Transferred",
    description: "Bank",
    time: "5m ago",
    icon: "🤝",
    color: "#FF3D71",
  },
  {
    name: "Credit Card",
    description: "Your card is ready",
    time: "2m ago",
    icon: "💳",
    color: "#1E86FF",
  },
  {
    name: "Bill Paid",
    description: "Electricity Bill",
    time: "20m ago",
    icon: "💡",
    color: "#FFA500",
  },
  {
    name: "Subscription Renewed",
    description: "Netflix",
    time: "1h ago",
    icon: "🎥",
    color: "#E50914",
  },
  {
    name: "New Offer",
    description: "20% Cashback on Groceries",
    time: "30m ago",
    icon: "🛒",
    color: "#4CAF50",
  },
  {
    name: "Account Updated",
    description: "Profile changes saved",
    time: "45m ago",
    icon: "🔄",
    color: "#007BFF",
  },
  {
    name: "Security Alert",
    description: "New login detected",
    time: "2h ago",
    icon: "🔒",
    color: "#FF5722",
  },
  {
    name: "Reward Earned",
    description: "You earned 500 points",
    time: "3h ago",
    icon: "🎉",
    color: "#FFD700",
  },
  {
    name: "Investment Update",
    description: "Your portfolio grew by 5%",
    time: "6h ago",
    icon: "📈",
    color: "#28A745",
  },
  {
    name: "New Message",
    description: "You have a message from support",
    time: "8h ago",
    icon: "📩",
    color: "#6C63FF",
  },
  {
    name: "Travel Booking",
    description: "Your flight is confirmed",
    time: "1d ago",
    icon: "✈️",
    color: "#00BCD4",
  },
  {
    name: "Gift Received",
    description: "You received a gift card",
    time: "2d ago",
    icon: "🎁",
    color: "#FF69B4",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function List({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
