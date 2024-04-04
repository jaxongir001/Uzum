import { Link } from "react-router-dom";


import DevImg from "../assets/dev.555d14b.png";



const Tender = () => {
  return (
    <>
    
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto space-y-3">
          <h1 className="text-4xl font-bold text-center">Tender </h1>
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
                  Поставка программного обеспечения КИБ Сёрчинформ
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
                  Предоставление доступа к сервисам Cloudflare
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
                  Приобретение программно-аппаратного комплекса
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
                  Приобретение межсетевых экранов Palo Alto Networks
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
                  Поставка телекоммуникационного оборудования HPE Aruba
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
                  Поставка программного обеспечения Veeam Backup & Replication Enterprise Plus
                  </h1>
                  <Link className="text-[#7000ff]">More details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Tender