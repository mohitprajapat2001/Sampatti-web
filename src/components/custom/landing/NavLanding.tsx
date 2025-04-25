import { Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";
const NavLanding = () => {
  return (
    <>
      <header className="sticky inset-0 z-10 border-b border-slate-100  backdrop-blur-lg w-full">
        <nav className="p-2 w-3xl mx-auto text-gray-950 dark:text-gray-50 flex items-center justify-between">
          <h1 className="flex items-center justify-start gap-2 font-bold capitalize text-base">
            <Landmark className="w-4 h-4" />
            Sampatti
          </h1>
          <div className="flex items-center justify-end">
            <ModeToggle />
            <a href="">
              <Button className="scale-80 hover:scale-75 focus:scale-73">
                Get Started
              </Button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavLanding;
