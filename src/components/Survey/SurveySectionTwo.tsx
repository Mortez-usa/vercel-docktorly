import Image from "next/image";

const SurveySectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <p className="mb-5 ml-80 mr-80 flex flex-col items-center text-lg font-medium text-body-color">
        <ul className="flex gap-10 ">
          <li>20 questions</li>
          <li>10-15 minutes</li>
          <li>Сonfidentiality ensured</li>
        </ul>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScf7JClNUHd2pw2Zy3Yn63p_8lLI3wPbvrAj_FyFJ0LPXB6XA/viewform">
          <button className="mt-24 rounded-3xl bg-blue-700 pb-4 pl-12 pr-12 pt-4 text-white">
            Survey
          </button>
        </a>
      </p>
    </section>
  );
};

export default SurveySectionTwo;
