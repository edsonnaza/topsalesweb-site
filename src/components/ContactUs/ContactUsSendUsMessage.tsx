//import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";
import Link from "next/link";

// Send Us a Message

// Use the form below to send us a message directly. Whether it’s a question, feedback, or a request, we’ll get back to you promptly.

// Create a From with the below Fields:

// [Contact Form: Name, Email, Subject, Message, Submit Button]



// Button centered: Get a Free Demo ????

const ContactUsSendUsMessage = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-6/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
               Send Us a Message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Use the form below to send us a message directly. Whether it’s a question, feedback, or a request, we’ll get back to you promptly.


              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-24 pb-5 py-6 lg:mt-12">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            
            >
              <Image
                src="/images/crm/contactus3.jpg"
                alt="about image"
                fill
                
                className="drop-shadow-three dark:hidden dark:drop-shadow-none   rounded-full"
              />
              <Image
                src="/images/crm/contactus3.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none  rounded-full"
              />
            </div>
      
        </div>
         
           
        </div>
      </div>
          <div className="flex flex-col items-center mt-24  justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/"
                className="inline-block rounded-md bg-black/90 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-indigo-600 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
              >
                Get a Free Demo ???
              </Link>
            </div>
    </section>
  );
};

export default ContactUsSendUsMessage;
