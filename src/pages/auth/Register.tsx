import { RetroGrid } from "@/components/magicui/retro-grid";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUtilsContext } from "@/providers/utils-providers";
import { Switch } from "@/components/ui/switch";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Register = () => {
  const { toggle, setToggle } = useUtilsContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    console.log("Form submitted");
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-xl">
        <NeonGradientCard className="">
          <div className="p-4 flex flex-col items-start justify-center gap-8">
            <div>
              <h1 className="text-2xl font-bold">Register to Sampatti,</h1>
              <p className="text-xs text-gray-500">
                Please continue creating your profile.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="w-full flex flex-col gap-3 overflow-auto"
            >
              <div className="flex items-center justify-between w-full">
                <div
                  className="flex flex-col gap-2 justify-start items-start"
                  id="first_name-legend"
                >
                  <Label htmlFor="first_name">Firstname</Label>
                  <Input
                    name="first_name"
                    placeholder="Enter Firstname"
                    type="first_name"
                    id="first_name"
                    autoComplete="false"
                  />
                </div>
                <div
                  className="flex flex-col gap-2 justify-start items-start"
                  id="last_name-legend"
                >
                  <Label htmlFor="last_name">Lastname</Label>
                  <Input
                    name="last_name"
                    placeholder="Enter Lastname"
                    type="last_name"
                    id="last_name"
                    autoComplete="false"
                  />
                </div>
              </div>
              <div
                className="flex flex-col gap-2 justify-start items-start"
                id="email-legend"
              >
                <Label htmlFor="email">Email*</Label>
                <Input
                  name="email"
                  placeholder="Enter Email Address"
                  type="email"
                  id="email"
                  autoComplete="false"
                />
              </div>
              <div
                className="flex flex-col gap-2 justify-start items-start"
                id="username-legend"
              >
                <Label htmlFor="username">Username</Label>
                <Input
                  name="username"
                  placeholder="Choose Username"
                  type="username"
                  id="username"
                  autoComplete="false"
                />
                <p className="text-xs italic text-gray-500">
                  choose username else default username is generated.
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div
                  className="flex flex-col gap-2 justify-start items-start"
                  id="password-legend"
                >
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    placeholder="Choose Password"
                    type={toggle ? "password" : "text"}
                    id="password"
                    autoComplete="false"
                  />
                </div>
                <div
                  className="flex flex-col gap-2 justify-start items-start"
                  id="confirm_password-legend"
                >
                  <Label htmlFor="confirm_password">Confirm Password</Label>
                  <Input
                    name="confirm_password"
                    placeholder="Confirm Password"
                    type={toggle ? "password" : "text"}
                    id="confirm_password"
                    autoComplete="false"
                  />
                </div>
              </div>
              <p className="text-xs italic">
                Password must be at least 8 characters long and contain at least
                one uppercase letter, one lowercase letter, one number, and one
                special character.
              </p>
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center space-x-2 w-full">
                  <Switch
                    id="airplane-mode"
                    defaultChecked={!toggle}
                    onClick={() => setToggle(!toggle)}
                  />
                  <Label htmlFor="airplane-mode">View Password</Label>
                </div>
                <AnimatedShinyText className="flex items-center justify-end w-full px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 cursor-pointer">
                  <span className="text-xs">
                    Already a member?{" "}
                    <Link to="/login" className="hover:underline">
                      login now
                    </Link>
                  </span>
                  <ArrowRight className="ml-1 size-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
              <Button
                type="submit"
                className="cursor-pointer scale-100 hover:scale-98"
              >
                Register
              </Button>
            </form>
          </div>
        </NeonGradientCard>
      </div>
      <RetroGrid />
    </div>
  );
};

export default Register;
