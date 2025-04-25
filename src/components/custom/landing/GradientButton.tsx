import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const GradientButton = ({
  children,
  className,
  icon,
  link = "",
}: {
  children?: string;
  className?: string;
  icon?: string;
  link?: string;
}) => {
  return (
    <Link
      to={link}
      className={cn(
        "group relative inline-flex items-center justify-start rounded-full px-6 py-2 mx-auto shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      {icon && <span className="mr-2">{icon}</span>}{" "}
      {/* Render icon if provided */}
      <AnimatedGradientText className="text-sm font-medium">
        {children || "Default Text"}
      </AnimatedGradientText>
      <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </Link>
  );
};

export default GradientButton;
