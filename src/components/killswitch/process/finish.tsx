function Finish() {
  return (
    <div className="flex justify-center pt-10 pb-20">
      <div className="flex flex-col items-center w-[560px] gap-6">
        <div className="bg-[url(../src/assets/landing/other_earth.png)] bg-contain h-36 w-36 rounded-full relative after:absolute after:bg-[radial-gradient(54.36%_54.15%_at_57.08%_53.05%,rgba(255,255,255,0.00)_23.21%,rgba(255,255,255,0.71)_87.89%)] after:top-0 after:right-0 after:bottom-0 after:left-0 after:rounded-full after:bg-no-repeat before:absolute before:top-[20px] before:right-[20px] before:bottom-[20px] before:left-[20px] before:bg-[url(../src/assets/mainLogo/killswitch.svg)] before:bg-contain before:bg-center before:bg-no-repeat cursor-pointer" />
        <h1 className="font-primary font-medium text-2xl leading-[30px] text-grey-900 text-center">
          Congratulations!
        </h1>
        <h1 className="font-secondary text-center text-grey-700">
          Your accounts have been successfully removed according to your
          preferences. How does it feel to be in control?
        </h1>
        <h1 className="font-secondary text-center text-grey-700">
          Remember, your privacy and online security matter to us. If you ever
          need to revisit or make further changes to your digital life,
          Killswitch is here to give the needed assistance.
        </h1>
        <h1 className="font-secondary text-center text-grey-700">
          Thank you for trusting us with your digital journey. Stay empowered
          and stay safe online! 💚
        </h1>
      </div>
    </div>
  );
}

export default Finish;
