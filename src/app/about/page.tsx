import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
  // metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Docktorly"
        description=""
      />
      <p className="mb-5 ml-80 mr-80 flex items-center text-lg font-medium text-body-color">
        At Docktorly, we are a passionate team of healthcare innovators on a
        mission to transform how doctors collaborate and consult with each other
        to take care of patients. As a startup founded by seasoned medical
        professional and technology experts, we recognized the pressing need to
        streamline the consultation process and improve patient outcomes. Too
        often, doctors face fragmented communication, lengthy wait times, and
        administrative hurdles when trying to coordinate care for their
        patients. This disconnect can lead to delayed diagnoses, duplicated
        testing, and suboptimal treatment plans. We knew there had to be a
        better way.That&#39;s why we created Docktorly. We are working on
        creating a secure, user-friendly platform that seamlessly connects
        doctors with peers who have specialty knowledge and can provide curbside
        consults. By centralizing case details, test results, and treatment
        recommendations, our technology will empower doctors to make more
        informed, efficient decisions together. Our goal is to foster stronger
        professional relationships in the medical community and enhance the
        overall quality of patient-centered care.
      </p>
      <p className="mb-5 ml-80 mr-80 flex items-center text-lg font-medium text-body-color">
        Through Docktorly, we aim to: reduce wait times and improve access to
        specialty consults, promote real-time collaboration and continuous
        learning, cultivate local networks of doctors and independent practices,
        improve both doctor and patient experiences in healthcare. We are driven
        to develop innovative solutions that solve real-world problems and
        elevate the practice of medicine.
      </p>
    </>
  );
};

export default AboutPage;
