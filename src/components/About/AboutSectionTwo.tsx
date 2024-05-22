import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/networkofdoctors.jpg"
                alt="about image"
                fill
                className="object-cover drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/networkofdoctors.jpg"
                alt="about image"
                fill
                className="hidden object-cover drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  From doctors for doctors
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We built this platform with busy professionals like you in
                  mind. Our goal is to help you improve communication efficiency
                  and collaborate with colleagues without the barriers and
                  friction that comes with traditional phone and fax
                  correspondence. We had doctors’ input at every stage of our
                  platform development so this tool feels tailor-made for you.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Your patient documents are safe with us
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Knowing that we will be dealing with sensitive personal
                  information, we fully intend on building a platform that is
                  secure and HIPPA compliant.
                </p>
              </div>
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Enhancing healthcare efficiency to achieve the Quadruple Aim
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Knowing that we will be dealing with sensitive personal
                  information, we fully intend on building a platform that is
                  secure and HIPPA compliant.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
