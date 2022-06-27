function Banner() {
  return (
    <div className="flex flex-col pl-4 space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-16">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen"></div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {`I'm Paul Santos`}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {`Software engineer`}
        <br />
        Passionate with Web and Mobile development
        <br />
        Bringing Creative Ideas To Life
      </p>

      <div className="flex space-x-3">
        {/* <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button> */}
      </div>
    </div>
  );
}

export default Banner;
