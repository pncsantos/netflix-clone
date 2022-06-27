import Image from "next/image";

function AboutMe() {
  return (
    <div className="flex p-8 space-x-8 md:space-x-12 bg-[#2b2b2b]">
      <div>
        <Image
          src="/me.png"
          alt=""
          className="rounded-full object-cover"
          width={120}
          height={120}
        />
      </div>
      <div>
        <h1 className="text-l font-bold lg:text-4xl">About Me</h1>
        <br />
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-lg lg:text-lg opacity-60">
          I am a Software Engineer and have a solid experience in areas of
          Software Development for Mobile, Web and Desktop applications.
          <br /> <br />I have worked with individuals, start-ups and established
          companies as freelancer and consultant.
        </p>
        <br /> <br />
        <h1 className="text-l font-bold lg:text-4xl">Contact Details</h1>
        <br />
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-lg lg:text-lg opacity-60">
          santospaulnoel@gmail.com
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
