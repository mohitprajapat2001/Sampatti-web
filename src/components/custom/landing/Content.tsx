import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 w-full p-6 lg:p-12 border-x overflow-hidden">
        <div className="flex flex-col justify-start items-start lg:col-span-1">
          <Link
            to="/blog/introducing-dev-ai"
            className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre"
            aria-label="Introducing AI Agent SDK"
          >
            <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-left text-xs font-medium text-primary sm:text-sm">
              🛠️ New
            </div>
            <p className="text-xs font-medium text-primary sm:text-sm">
              Introducing AI Agent SDK
            </p>
            <svg
              width="12"
              height="12"
              className="ml-1"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
                fill="hsl(var(--primary))"
              ></path>
            </svg>
          </Link>
          <div className="flex w-full max-w-3xl flex-col overflow-hidden pt-8">
            <h1 className="text-left text-4xl font-semibold leading-tighter text-foreground sm:text-5xl md:text-6xl tracking-tighter">
              <span className="inline-block text-balance">AI Agent SDK</span>
            </h1>
            <p className="text-left max-w-xl leading-normal text-muted-foreground sm:text-lg sm:leading-normal text-balance">
              Create powerful AI agent workflows with just a few lines of code,
              enabling complex task automation and decision-making processes.
            </p>
          </div>
          <div className="relative mt-6">
            <div className="flex w-full max-w-2xl flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                to="/download"
                className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto text-background flex gap-2 rounded-lg"
                aria-label="Get Started"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" x2="20" y1="19" y2="19"></line>
                </svg>
                Get Started
              </Link>
            </div>
            <p className="mt-3 text-sm text-muted-foreground text-left">
              Available for all major programming languages
            </p>
          </div>
        </div>
        <div className="relative lg:h-full lg:col-span-1">
          <div>
            <div className="absolute inset-0 w-full h-full origin-top-left flex items-center justify-center">
              <canvas
                style={{ display: "block", width: "500px", height: "500px" }}
                width="400"
                height="400"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
