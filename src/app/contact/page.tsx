import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We value your feedback and suggestions. Feel free to share your thoughts with us so we can continue to improve our services to better serve you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
