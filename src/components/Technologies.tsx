import React from 'react';
import item1 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (1).svg'
import item2 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (2).svg'
import item3 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (3).svg'
import item4 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (4).svg'
import item5 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (5).svg'
import item6 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (6).svg'
import item7 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (7).svg'
import item8 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (8).svg'
import item9 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (9).svg'
import item10 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (10).svg'
import item11 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (11).svg'
import item12 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (12).svg'
import item13 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (13).svg'
import item14 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (14).svg'
import item15 from 'D:/REGAL/frontend/src/static/TechStack/Tech Stack Logos (15).svg'




const technologies = [
    { id: 1, icon: item1, name: "React" },
    { id: 2, icon: item2, name: "Node.js" },
    { id: 3, icon: item3, name: "Tailwind CSS" },
    { id: 4, icon: item4, name: "TypeScript" },
    { id: 5, icon: item5, name: "GraphQL" },
    { id: 6, icon: item6, name: "Docker" },
    { id: 7, icon: item7, name: "Kubernetes" },
    { id: 8, icon: item8, name: "AWS" },
    { id: 9, icon: item9, name: "Firebase" },
    { id: 10, icon: item10, name: "AWS" },
    { id: 11, icon: item11, name: "AWS" },
    { id: 12, icon: item12, name: "AWS" },
    { id: 13, icon: item13, name: "AWS" },
    { id: 14, icon: item14, name: "AWS" },
    { id: 15, icon: item1, name: "AWS" },
    
];

const Technologies: React.FC = () => {
    return (
        <section className="max-w-full mx-auto py-12 overflow-hidden bg-gray-50">
            <h2 className="text-3xl font-serif  text-center text-blue-500 mb-8">Technologies We Use</h2>
            <div className="relative flex overflow-x-hidden bg-gray-50 max-w-7xl m-auto">
                <div className="flex animate-infiniteScroll space-x-4 bg-gray-50">
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center w-24 h-fit my-6 mx-4 rounded-3xl px-4 ">
                            <img src={tech.icon} alt="" className='' />
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
