import React from 'react';


const Expertise: React.FC = () => {
    

    return (
        <section>
            <h2 className='text-center pt-5 font-serif text-4xl text-blue-500 bg-gray-50'>Our Expertise</h2>
        <div className=" w-full p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  bg-gray-50">

            {expertiseItems.map((item, index) => (
                <ExpertiseCard
                    key={index}
                    icon={item.icon}
                    expertiseName={item.expertiseName}
                    heading={item.heading}
                    description={item.description}

                />
            ))}
        </div>
        </section>
    );
};

export default Expertise;
