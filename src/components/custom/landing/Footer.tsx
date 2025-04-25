import { Github } from "lucide-react";
import { Landmark } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col gap-y-5 rounded-lg px-7 py-5 container">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-x-2">
            <Landmark />
            <h2 className="text-lg font-bold text-foreground">
              Sampatti Banking
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex gap-x-2">
            <a
              href="#"
              className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
            >
              <Github />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
