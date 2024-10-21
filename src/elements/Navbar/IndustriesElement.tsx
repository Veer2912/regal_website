import React from 'react'

const IndustriesElement = () => {
  return (
    <li className="relative flex justify-center w-[20%] hover:border-b-4 border-lime-400 h-full items-center py-2 lg:py-0 border-spacing-4 group">
            <a className="py-2 px-4 text-2xl lg:text-[17px] hover:text-lime-300 contrast-100" href="#">
                Industries

            </a>
            <div className="absolute top-[6.7vh] left-[-70em] w-[100em] h-[50vh] bg-[#ebf0f1] shadow-md py-4 hidden group-hover:block">
                <div className="grid grid-cols-3 gap-4 mt-4 mx-8 px-4">
                    <div className="text-center w-96">
                        <a href="#" className="font-bold text-blue-700 hover:text-lime-400">Automobile</a>
                        <p  className="text-sm font-medium text-gray-600 border-t-2 border-gray-300">Discover how we streamlines logistical operations with cutting-edge technology. From supply chain management to inventory optimization, delve into our comprehensive suite of logistics solutions designed to enhance efficiency, reduce costs, and streamline workflows. Explore innovative tools, intelligent tracking systems, and advanced analytics that empower businesses to optimize their logistical processes and stay ahead in today’s dynamic marketplace.</p>

                    </div>
                    <div className="text-center w-96">
                        <a href="#" className="font-semibold text-blue-700 hover:text-lime-400">Spices</a>
                        <p className="text-sm font-medium text-gray-600 border-t-2 border-gray-300">Step into our FinTech chapter to explore a world of financial innovation and digital transformation. Our cutting-edge FinTech solutions leverage the latest technologies to revolutionize the way businesses manage their finances. From secure payment processing to intelligent investment platforms, we offer a comprehensive suite of solutions tailored to the needs of financial institutions, startups, and enterprises alike. Discover how our expertise in financial technology can help you streamline operations, mitigate risks, and unlock new opportunities in today’s rapidly evolving landscape.</p>
                    </div>
                    <div className="text-center w-96">
                        <a href="#" className="font-semibold text-blue-700 hover:text-lime-400">Healthcare</a>
                        <p className="text-sm font-medium text-gray-600 border-t-2 border-gray-300">Delve into our AI chapter to explore the transformative capabilities of artificial intelligence. From machine learning algorithms to natural language processing, our AI solutions are designed to revolutionize industries and drive unprecedented growth. Discover how we harness the latest advancements in AI technology to automate tasks, gain actionable insights, and enhance decision-making processes. Explore our range of AI-powered products and services, tailored to meet the unique needs of businesses seeking to stay at the forefront of innovation.</p>
                    </div>

                </div>
            </div>
        </li>
  )
}

export default IndustriesElement

