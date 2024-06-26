import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const SurveySectionOne = () => {
  const List = ({ text }) => (
    <>
      <p className="mb-5 flex items-center text-lg font-medium text-body-color">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
        {text}
      </p>
      
    </>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <p className="mb-5 ml-80 mr-80 flex items-center text-lg font-medium text-body-color">
        At Docktorly, we understand the challenges that 
        doctors face when they need to communicate with their outside colleagues to coordinate patient care.
        That&#39;s why we have developed a revolutionary platform that
        streamlines the communication process to improve day-to-day work experience.
      </p>
      <p className="mb-5 ml-80 mr-80 flex items-center text-lg font-medium text-body-color">
        We&#39;re inviting our community of health providers to share their
        valuable insights and ideas through this survey.
      </p>
      <hr className="ml-96 mr-96"/>
    </section>
  );
};

export default SurveySectionOne;
