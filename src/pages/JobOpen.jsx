import GetImg from "../assets/gettyimages.f912473.png";
import DevImg from "../assets/dev.555d14b.png";

import { Link } from "react-router-dom";

const JobOpen = () => {
  return (
    <>
      <div className="w-full">
        <div className="container mx-auto">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                  People are
                </h1>
                <p className="mb-8 leading-relaxed font-extralight text-lg">
                  The success of the company is thousands of personal and
                  professional successes of everyone. When employees develop,
                  Uzum Bank develops. Working with us is an opportunity to grow
                  together with an independent cool bank in a community of smart
                  and free people. Solve ambitious tasks, achieve significant
                  results, become the best, and earn money.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={GetImg}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto space-y-3">
          <h1 className="text-4xl font-bold text-center">Job openings </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-contain bg-slate-100 object-center"
                  src={DevImg}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <Link className="text-[#7000ff]">More details</Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-contain bg-slate-100 object-center"
                  src={DevImg}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <Link className="text-[#7000ff]">More details</Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-contain bg-slate-100 object-center"
                  src={DevImg}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <Link className="text-[#7000ff]">More details</Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-contain bg-slate-100 object-center"
                  src={DevImg}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <Link className="text-[#7000ff]">More details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobOpen;
