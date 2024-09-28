import Image from "next/image";

const AboutUsPartTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap  items-center">
      
          <div className="w-full px-24 lg:w-1/2">
      
            <div
              className="relative  mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/crm/aboutus2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-full"
              />
              <Image
                src="/images/crm/aboutus2.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-full"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
         


            <div className="max-w-[470px] ml-10 px-12">
              <div className="mb-9 mt-2">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Our Journey
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                TopSalesWeb was born out of a desire to simplify client relationship management for businesses everywhere. As experienced professionals in the tech and sales industries, we saw firsthand the challenges companies faced with cumbersome CRM systems that were difficult to implement and use. We set out to create a solution that was different - one that combined advanced functionality with a user-friendly interface, designed to help businesses thrive.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 Our Vision
 
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                
                  We envision a world where businesses of all sizes can effortlessly manage their client relationships, driving growth and success through meaningful interactions. At TopSalesWeb, we’re committed to making this vision a reality by continuously innovating and improving our platform to meet the evolving needs of our clients.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPartTwo;
