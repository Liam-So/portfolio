import React from 'react'

function Project({ project }) {
    return (
        <div className="max-w-xs w-full">
            <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                <img className="object-cover h-44" src={project.img} alt={project.name}/>
            </div>

            <a href={project.link} className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div className="py-2 px-3 text-center text-sm">
                    <p className="text-gray-300">{project.description}</p>
                    <span className="block text-gray-500 mt-2">{project.web}</span>
                </div>
            </a>
        </div>
    )
}

export default Project
