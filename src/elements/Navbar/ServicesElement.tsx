import React from 'react'

const Services = () => {
    return (
        <li className="relative flex justify-center w-[20%] hover:border-b-4 border-lime-400 h-full transition delay-150 ease-in-out  items-center py-2 lg:py-0 border-spacing-4 group">
            <a className="py-2 px-4  text-2xl  lg:text-[17px] hover:text-lime-300 contrast-100" href="#">
                Services
            </a>
            <div className="absolute top-[6.7vh] mx-4 left-[-60em] w-[100em] h-[50vh] px-6 bg-[#ebf0f1] shadow-md py-4  transition delay-150 ease-in-out hidden group-hover:block">
                <div className="border-b border-gray-300 pb-2">
                    <h3 className="text-lg font-bold text-gray-800">Our Services</h3>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4 mx-8 px-4">
                    <div className="text-center w-80">
                        <a href="#" className="font-bold text-blue-500 hover:text-lime-400 ">KPO</a>
                        <p className="text-sm font-medium text-gray-600 border-t-2 border-gray-300">Enhancing software delivery speed and reliability...</p>

                    </div>
                    <div className="text-center w-80">
                        <a href="#" className=" font-semibold text-blue-700 hover:text-lime-400">BPO</a>
                        <p className="text-sm font-medium text-gray-600 border-t-2 border-gray-300">Creating scalable operational or analytical databases...</p>
                    </div>
                    <div className="text-center w-80">
                        <a href="#" className="font-semibold  text-blue-700 hover:text-lime-400">RCM</a>
                        <p className="text-sm font-medium text-gray-600 border-t-2 border-gray-300">We will embody your product into a physical appearance...</p>
                    </div>
                    <div className="text-center w-80">
                        <a href="#" className="font-semibold  text-blue-700 hover:text-lime-400">Healthcare Solutions</a>
                        <p className="text-sm font-medium text-gray-600 border-t-2 border-gray-300">We will embody your product into a physical appearance...</p>
                    </div>


                </div>
            </div>
        </li>
    )
}

export default Services
