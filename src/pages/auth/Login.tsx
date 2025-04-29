import { RetroGrid } from "@/components/magicui/retro-grid";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUtilsContext } from "@/providers/utils-providers";
import { useAuthContext } from "@/providers/auth-providers";
import { Switch } from "@/components/ui/switch";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  first_name: string;
  last_name: string;
  email: RegExp;
  username: string;
  password: RegExp;
  confirm_password: RegExp;
};

const Login = () => {
  const { loginUser } = useAuthContext();
  const { toggle, setToggle } = useUtilsContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loginUser(data);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-xl">
        <NeonGradientCard className="">
          <div className="p-4 flex flex-col items-start justify-center gap-8">
            <div>
              <h1 className="text-2xl font-bold">Welcome to the Login Page,</h1>
              <p className="text-xs text-gray-500">
                Please enter your credentials to login.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              className="w-full flex flex-col gap-3"
            >
              <div
                className="flex flex-col gap-2 justify-start items-start"
                id="email-legend"
              >
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email", {
                    required: "Field is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  name="email"
                  placeholder="Enter Email Address"
                  type="email"
                  id="email"
                  autoComplete="false"
                />
                <p className="text-xs italic text-destructive">
                  {errors.email?.message}
                </p>
              </div>
              <div
                className="flex flex-col gap-2 justify-start items-start"
                id="password-legend"
              >
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password", {
                    required: "Field is required",
                  })}
                  type={!toggle ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  autoComplete="false"
                />
                <p className="text-xs italic text-destructive">
                  {errors.password?.message}
                </p>
              </div>
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
                    Not a member?{" "}
                    <Link to="/register" className="hover:underline">
                      Register now
                    </Link>
                  </span>
                  <ArrowRight className="ml-1 size-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
              <Button
                type="submit"
                className="cursor-pointer scale-100 hover:scale-98"
              >
                Login
              </Button>
            </form>
          </div>
        </NeonGradientCard>
      </div>
      <RetroGrid />
    </div>
  );
};

export default Login;
