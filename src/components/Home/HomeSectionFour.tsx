"use client";
import Image from "next/image";
 

const HomeSectionFour = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">

        <div className="-mx-4 flex flex-wrap items-center">
         <div className="mx-auto max-w-[800px] text-center">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Transform Your Sales Process Today
            </h1>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
            With TopSalesWeb, you’re not just managing contacts - you’re building relationships that last. Whether you&aposre a small business or a large enterprise, our CRM system scales with your needs, offering the flexibility and power to grow alongside your business.
            </p>


          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            
            >
              <Image
                src="/images/crm/crm1-pie.webp"
                alt="about image"
                fill
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none   rounded-full"
              />
              <Image
                src="/images/crm/crm1-pie.webp"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none  rounded-full"
              />
            </div>
      
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Get Started Now    </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Start today and dicover how TopSalesWeb can revolutionise the way you manage your client relationships and grow your business.       </p>
              </div>
              
             
            </div>
          </div>
        
         
        </div>
      </div>
    </section>
  );
};

export default HomeSectionFour;
