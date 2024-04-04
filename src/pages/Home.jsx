  import Header from "../components/Header";
  import LogoTransparent from "../assets/Logo-transperent-04 1.ada0533.png";
  import Calculator from "../components/Calculator";
  import Save1 from "../assets/save1.svg";
  import Save2 from "../assets/save2.svg";
  import TerminalImg from "../assets/terminal.png";
  import HumoImg from "../assets/humo.svg";
  import VisaImg from "../assets/visa.svg";

  import WOW from 'wowjs';


  import { useEffect } from "react";

  const Home = () => {

    useEffect(() => {
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();
    }, []);
    


    return (
      <>
        <Header />
        <div className="w-full border-t-4 border-b-2 pt-10 border">
          <h1 className="animate__animated animate__fadeInDown text-[#7000ff] text-3xl font-bold text-center">
            What is Uzum?
          </h1>
          <div className="container mx-auto grid grid-cols-2 items-center gap-5">
            <img className="animate__animated animate__backInLeft" src={LogoTransparent} alt="" />
            <p className="animate__animated animate__backInRight text-xl font-extralight">
              Uzum is a group of companies developing a digital ecosystem that
              includes financial services and a marketplace with a wide range of
              products and fast delivery. Uzum Bank became the third service under{" "}
              <br />
              <br />
              the Uzum brand. Also, the ecosystem already includes a marketplace
              with a wide range and fast delivery Uzum Market, installment service
              <br />
              <br />
              Uzum Nasiya, express delivery service from restaurants and shops
              Uzum Tezkor
            </p>
          </div>
        </div>
        <Calculator />
        <div className="w-full border-t-2 border-b-2 pt-10 border">
          <div className="container mx-auto py-5">
            <h1 className="pb-10 text-[#7000ff] text-3xl font-semibold">
              Save on transfers and earn on payments
            </h1>
            <div className="grid lg:grid-cols-2 gap-4">
              <div
                className="rounded-lg relative h-[520px] border p-10 text-white"
                style={{ backgroundColor: "rgb(137, 103, 241)" }}
              >
                <h1 className="text-5xl font-semibold">
                  Transfers between cards from 0,6%
                </h1>{" "}
                <br />
                <p className="text-xl font-extralight">
                  Uzum Bank always has a low <br /> commission for transfers
                  between cards:
                </p>
                <br />
                <p className="font-extralight text-xl">0,6% from HUMO to HUMO</p>
                <p className="font-extralight text-xl">
                  0,7% between UzCard and HUMO
                </p>
                <img className=" absolute right-0 bottom-0" src={Save1} alt="" />
              </div>

              <div
                className="rounded-lg relative border text-white p-10 "
                style={{ backgroundColor: "rgb(165, 136, 255)" }}
              >
                <h1 className="text-5xl font-semibold">
                  Cashback up to 20% for payments
                </h1>
                <br />
                <p className="text-xl font-extralight">
                  Make payments for the <br /> usual services and get <br /> your
                  money back
                </p>
                <br />

                <img className=" absolute right-0 bottom-0" src={Save2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-b-2 border">
          <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
            <div data-wow-duration="2s" data-wow-delay="5s" className="wow slideInLeft lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1  className=" title-font sm:text-5xl text-3xl mb-4 font-bold text-[#7000ff]">
                You only need a phone to pay
              </h1>
              <br />
              <p className="tracking-[.04em] mb-8 text-xl font-extralight leading-relaxed">
                It is more convenient and safer than physical bank cards and cash,
                and also allows you to protect your personal data when paying in
                stores.
              </p>

              <div className="flex space-x-5 lg:flex-row md:flex-col">
                <img src={HumoImg} alt="" />
                <img src={VisaImg} alt="" />
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={TerminalImg}
              />
            </div>
          </div>
        </div>

        <section className="w-full border-t-2 border-b-2 text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3 animate__animated animate__fadeInTopLeft">
                <div className="flex rounded-lg h-full bg-[#e1e5ff] p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className=" rounded-md text-gray-900 bg-white px-2 py-1 text-md title-font font-medium">
                      News
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                    Dear Clients! <br />
                    We notify you that from 02/02/2024 from 10:00 to 10:00 on 02/03/2024, maintenance work is planned, during which the Uzum Bank mobile application may not be available. <br />
                    Thank you for being with us 💜
                    </p>
                    {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Tariffs
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 animate__animated  animate__fadeInDown">
                <div className="flex rounded-lg h-full bg-[#e1e5ff] p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className=" rounded-md text-gray-900 bg-white px-2 py-1 text-md title-font font-medium">
                      News
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                    «Uzum Bank» JSC informs about changes in the tariff line from 16 January 2024
                    </p>
                    <a className="mt-3 text-[#7000ff] inline-flex items-center">
                    Tariffs
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3  animate__animated animate__fadeInTopRight">
                <div className="flex rounded-lg h-full bg-[#e1e5ff] p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className=" rounded-md text-gray-900 bg-white px-2 py-1 text-md title-font font-medium">
                      News
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                    «Uzum Bank» JSC informs about changes in the tariff line from 24 December 2023
                    </p>
                    <a className="mt-3 text-[#7000ff] inline-flex items-center">
                      Tariffs
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default Home;
