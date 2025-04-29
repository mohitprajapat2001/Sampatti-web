import NavLanding from "@/components/custom/landing/NavLanding";
import Content from "@/components/custom/landing/Content";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/custom/landing/VideoComponent";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
// import { HyperText } from "@/components/magicui/hyper-text";
// import Features from "@/components/custom/landing/Features";
import Statistics from "@/components/custom/landing/Statistics";
import Community from "@/components/custom/landing/Community";
import Footer from "@/components/custom/landing/Footer";
import { Particles } from "@/components/magicui/particles";

function Landing() {
  return (
    <>
      {/* div become background with h-screen and w-full */}
      <div className="relative">
        <div>
          <NavLanding />
          <div className="w-4xl mx-auto border-l border-r border-slate-100 bg-transparent">
            <Content />
            <HeroVideoDialogDemoTopInBottomOut />
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border-b py-5">
              <VelocityScroll numRows={1} defaultVelocity={1}>
                Secure your future with our investment solutions. Visit us.
              </VelocityScroll>
              <VelocityScroll numRows={1} defaultVelocity={1}>
                Exclusive offers for new customers - sign up now!
              </VelocityScroll>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
            {/* <div className="border-b">
              <HyperText className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 pt-10">
                Features
              </HyperText>
              <Features />
            </div> */}
            <div>
              <Statistics />
            </div>
            <div>
              <Community />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-[-10]">
          <Particles />
        </div>
      </div>
    </>
  );
}

export default Landing;
