import VisaLogo from '../assets/visaLogo.svg'
import WuLogo from '../assets/wu.png'


const Transfers = () => {
  return (
    <>
      <div className="w-full bg-[#f5f6f8]">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold">International money transfers</h1>
          <br />

          <hr />
          <br />
          <p className="text-xl font-extralight">
            To send and receive, you only need a mobile phone and the Apelsin
            app. And there is no need to look for the nearest bank branch.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl text-center font-semibold">Our partners</h1>
        <div className="flex flex-wrap py-10 -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-lg overflow-hidden">
              <img
                className="bg-slate-100 p-5 lg:h-48 md:h-36 w-full object-contain object-center"
                src={VisaLogo}
                alt="blog"
              />
              <div className="p-6">
                <div className='flex justify-between items-center'>
                  <h1 className="title-font font-bold text-lg text-gray-900">
                    Visa Direct
                  </h1>
                  <p>Commission from 1%</p>
                </div><br />
                <div className="flex items-center flex-wrap ">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    More details
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-lg overflow-hidden">
              <img
                className="bg-slate-100 p-5 lg:h-48 md:h-36 w-full object-contain object-center"
                src={WuLogo}
                alt="blog"
              />
              <div className="p-6">
                <div className='flex justify-between items-center'>
                  <h1 className="title-font font-bold text-lg text-gray-900">
                    Western Union
                  </h1>
                  <p>Commission from $ 1.3</p>
                </div> <br />
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    More details
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-lg overflow-hidden">
              <img
                className="bg-slate-100 p-5 lg:h-48 md:h-36 w-full object-contain object-center"
                src="https://logohistory.net/wp-content/uploads/2023/05/Mastercard-Logo.png"
                alt="blog"
              />
              <div className="p-6">
                <div className='flex justify-between items-center'>
                  <h1 className="title-font font-bold text-lg text-gray-900">
                  MoneySend
                  </h1>
                  <p>1%, but not less than €2</p>
                </div><br />
                <div className="flex items-center flex-wrap ">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    More details
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfers;
