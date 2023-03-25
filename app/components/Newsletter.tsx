import Image from "next/image"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import DogImg from "/public/img/newsletter/dog.png"

const Newsletter = () => {
  return (
    <section>
      <div className="h-[800px] flex flex-1 flex-col lg:h-[324px] lg:flex-row">
        <div className="bg-newsletterOrange bg-center bg-cover bg-no-repeat flex-1 flex flex-col justify-center items-center px-8 lg:px-0 h-full">
          <div>
            <h2 className="h2 mb-12">Subscribe & Get Pet <br /> Update News</h2>
            <div className="flex relative">
              <input className="bg-transparent border-b-2 placeholder:text-white text-white outline-none absolute w-full pr-12" type="text" placeholder="Email"/>
              <HiOutlineArrowNarrowRight className="absolute top-0 right-0 text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="bg-newsletterYellow bg-center bg-no-repeat bg-cover flex-1 justify-center items-end h-full -z-10">
          <Image src={DogImg} alt="Dog Image" />
        </div>
      </div>
    </section>
  )
}

export default Newsletter