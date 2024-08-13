function APISection() {
  return (
    <div className="max-w-[1512px] m-auto">
      <div className="px-20 max-lg:px-10 max-xm:px-4 py-24 max-md:py-12 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="font-primary font-medium text-[40px] max-sm:text-[28px] leading-[48px] max-sm:leading-[34px] text-transparent bg-clip-text bg-[linear-gradient(180deg,#1D2939_0%,rgba(29,41,57,0.67)_100%)]">
            Getting started
          </h1>
          <h1 className="font-secondary text-grey-900">
            Sign-up and contact us to gain API access to Trustle’s apps.
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="min-w-[270px] max-sm:min-w-[calc(100vw-32px)] max-w-[314px] px-5 py-4 flex flex-col gap-2">
            <h1 className="font-primary font-medium text-lg text-grey-900">
              Setup
            </h1>
            <h1 className="font-secondary text-sm text-grey-700">
              Before you begin, sign up for a Trustle developer account to
              access our API and developer tools.
            </h1>
          </div>
          <div className="min-w-[270px] max-sm:min-w-[calc(100vw-32px)] max-w-[314px] px-5 py-4 flex flex-col gap-2">
            <h1 className="font-primary font-medium text-lg text-grey-900">
              API Documentation
            </h1>
            <h1 className="font-secondary text-sm text-grey-700">
              Dive into our detailed API docs, where you will find detailed info
              on endpoints, authentication, and more.
            </h1>
          </div>
          <div className="min-w-[270px] max-sm:min-w-[calc(100vw-32px)] max-w-[314px] px-5 py-4 flex flex-col gap-2">
            <h1 className="font-primary font-medium text-lg text-grey-900">
              API Keys
            </h1>
            <h1 className="font-secondary text-sm text-grey-700">
              Generate an API key to start making requests to Trustle's API
            </h1>
          </div>
          <div className="min-w-[270px] max-sm:min-w-[calc(100vw-32px)] max-w-[314px] px-5 py-4 flex flex-col gap-2">
            <h1 className="font-primary font-medium text-lg text-grey-900">
              SDKs and Libraries
            </h1>
            <h1 className="font-secondary text-sm text-grey-700">
              We offer SDKs and libraries in various programming languages to
              streamline your integration process.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default APISection;
