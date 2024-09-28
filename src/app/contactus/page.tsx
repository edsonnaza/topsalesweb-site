import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactUsPartOne from "@/components/ContactUs/ContactUsPartOne";
import ContactUsPartTwo from "@/components/ContactUs/ContactUsPartTwo";
import ContactUsSendUsMessage from "@/components/ContactUs/ContactUsSendUsMessage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us Page | Contact Us Page for TopSalesWeb",
  description: "This is Contact Us Page for CRM TopSalesWeb",
  // other metadata
};

const ContactUsPage = () => {
  return (
    <>
      

      <ContactUsPartOne />
      <ContactUsPartTwo />
      <ContactUsSendUsMessage />
    </>
  );
};

export default ContactUsPage;

 









// Send Us a Message

// Use the form below to send us a message directly. Whether it’s a question, feedback, or a request, we’ll get back to you promptly.

// Create a From with the below Fields:

// [Contact Form: Name, Email, Subject, Message, Submit Button]



// Button centered: Get a Free Demo ????