import aplicationImg from "../assets/applications.59d741a.png";
import qrCode from "../assets/qr.50052b6.svg"
import appleBadge from '../assets/en_apple_badge.8a99f76.svg'
import googleBadge from '../assets/en_google_badge.c987ead.svg'

const Header = () => {
  return (
    <header className="w-full h-[470px] animate__animated animate__bounceInDown" >
      <div className="container mx-auto grid grid-cols-2">
        <div className="space-y-5 py-8" >
            <h1 className="text-5xl font-bold text-[#7000ff] tracking-[.07em]"> A reliable bank <br /> is always at hand</h1>
            <p className="text-xl font-light">Uzum Bank is a payment system and a reliable online <br /> bank in one mobile application.</p>
            <div className="flex items-end space-x-5 py-5">
                <img className="border-2 border-black rounded-lg" src={qrCode} alt="" />
                <img src={appleBadge} alt="" />
                <img src={googleBadge} alt="" />
            </div>
        </div>
        <div className="" >
          <img className="w-[585px]" src={aplicationImg} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
