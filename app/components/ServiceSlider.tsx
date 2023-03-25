"use client";

import Image from "next/image";


import Service1Icon from "/public/img/services/service-icon1.svg";
import Service2Icon from "/public/img/services/service-icon2.svg";
import Service3Icon from "/public/img/services/service-icon3.svg";

const services = [
  {
    image: Service1Icon,
    name: "Pharmacy",
    description:
      "lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dicta, modi voluptate dolorum eaque quisquam quaerat ccumque? lLibero, accusamus corporis?",
    btnText: "Explore",
  },
  {
    image: Service2Icon,
    name: "Breed-specific Haircuts",
    description:
      "lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dicta, modi voluptate dolorum eaque quisquam quaerat ccumque? lLibero, accusamus corporis?",
    btnText: "Explore",
  },
  {
    image: Service3Icon,
    name: "Cloths",
    description:
      "lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dicta, modi voluptate dolorum eaque quisquam quaerat ccumque? lLibero, accusamus corporis?",
    btnText: "Explore",
  },
];

const ServiceSlider = () =>{
  return (
    <div className="grid grid-cols-3 gap-x-6"> 
    {services.map((service, index)=>{
      return (      
      <div className="border border-primary/20 bg-cream min-h-[560px]  rounded-[66px] py-16 px-8 " key={index}>
        <Image className="mb-9" src={service.image} alt="Service Image" />
        <div className="text-[26px] font-bold mb-4">{service.name}</div>
        <div className="text-[20px] mb-8">{service.description}</div>
        <button className="btn btn-primary ">{service.btnText}</button>
      </div>      
      );
    })}
  
  </div>
  );
}

export default ServiceSlider;
