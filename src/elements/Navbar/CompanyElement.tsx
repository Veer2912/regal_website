import React from 'react'

const Company: React.FC = () => {
    return (
        <li className="relative flex justify-center w-[20%] hover:border-b-4 border-lime-400 h-full items-center py-2 lg:py-0 border-spacing-4 group">
            <a className="py-2 px-4 text-2xl lg:text-[17px] hover:text-lime-300 contrast-100" href="#">
                Company

            </a>
            <div className="absolute top-[6.7vh] left-[-77em] w-[100em] h-[50vh] bg-[#ebf0f1] shadow-md  py-4 hidden group-hover:block">
                <div className="grid grid-cols-3 gap-4 mt-4 mx-8 px-4">
                    <div className="text-center w-96">
                        <a href="#" className="font-bold text-blue-700 ">Achievements</a>
                        <div className="grid grid-cols-3 gap-1 mt-2 mx-2 px-2">
                            <div className="  h-16 w-16"><img src='' alt='tech-icon' className="contrast-75 shadow-indigo-300 shadow-lg rounded-full" /></div>
                            <div className="  h-16 w-16"><img src='' alt='tech-icon' className="contrast-75 shadow-indigo-300 shadow-lg rounded-full" /></div>
                            <div className="  h-16 w-16"><img src='' alt='tech-icon' className="contrast-75 shadow-indigo-300 shadow-lg rounded-full" /></div>
                        </div>
                    </div>
                    <div className="text-center w-96">
                        <a href="#" className="font-semibold text-blue-700 hover:text-lime-400">About Us</a>
                        <p className="text-sm font-medium text-gray-600">Regal is an IN-based software development company that can become your trusted technology partner. We provide business consulting and make custom solutions tailored to your operations.</p>
                    </div>
                    <div className="text-center w-96">
                        <a href="#" className="font-semibold text-blue-700 hover:text-lime-400">Career</a>
                        <p className="text-sm font-medium text-gray-600">We’re hiring! Join the Regal team to tap into the realm of IT technologies, pursue personal growth and function in a healthy work environment. See what positions we are currently looking to fill.</p>
                    </div>

                </div>
            </div>
        </li>
    )
}

export default Company
