import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
 
  return (
    <section className=" bg-dark-300 text-white py-20 flex">
      <div className="container mx-auto px-6 flex flex-col space-y-5 text-start justify-items-center remove-scrollbar h-[100vh]">
      <h1 className="text-7xl  font-bold mb-8 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
        Welcome to CarePulse
      </h1>
        <p className="text-md mb-[100px] ">Your health, our priority. Book appointments with ease.</p>
        <Link href="/patient-form" className='mt-8'>
          <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Make an Appointment</span>
        </Link>
      </div>
      <div className="container mx-auto px-6 flex flex-col text-start justify-items-center remove-scrollbar h-[100vh]">
      <div className="w-[150px] h-[150px] ml-[30px] mb-[-50px] bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100 flex items-center justify-center text-4xl">
        Quick
      </div>

      <Image
          src="https://media.istockphoto.com/id/1682074275/photo/doctor-woman-and-tablet-for-hospital-healthcare-advice-and-support-for-results-exam-and-test.jpg?s=1024x1024&w=is&k=20&c=r88v4byMAY67lgYS680CerJgj-zGZVu9yuNfiekQYfc="
          alt="hero"
          width={400}
          height={900}
          className="mx-auto mb-8"
      />
      <div className="w-[150px] h-[150px] ml-[70%] mt-[-90px] bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100 flex flex-col-reverse items-center justify-center text-2xl">
        Quick
      </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const services = [
    { title: "General Consultation", description: "Get professional medical advice from our experts." },
    { title: "Specialist Appointment", description: "Book an appointment with a specialist." },
    { title: "Emergency Services", description: "24/7 emergency care available." },
  ];

  return (
    <section className="bg-dark-300 text-white py-12">
      <div className="container mx-auto px-6">
      <h1 className="text-3xl  font-bold mb-8 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
        Our Services
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg glowing-gradient">              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



const Page = () => {
  return (
    <div className="bg-dark-300 min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesSection />
    </div>
  )
}

export default Page
