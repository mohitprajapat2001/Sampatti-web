import NavLanding from "@/components/custom/landing/NavLanding";
import Content from "@/components/custom/landing/Content";
function Landing() {
  return (
    <>
      <NavLanding />
      <div className="w-3xl mx-auto border-l border-r border-slate-100">
        <Content />
      </div>
    </>
  );
}

export default Landing;
