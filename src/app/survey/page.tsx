import SurveySectionOne from "@/components/Survey/SurveySectionOne";
import SurveySectionTwo from "@/components/Survey/SurveySectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survey Page",
  description: "Survey Page",
  // other metadata
};

const SurveyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Your Voice"
        description="Share your insights to shape our next innovation in peer-to-peer consultations."
      />
      <SurveySectionOne />
      <SurveySectionTwo />
    </>
  );
};

export default SurveyPage;
