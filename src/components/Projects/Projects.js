import React from 'react'
import { project1, project2, project3 } from './Data.js'
import Project from './Project.js'

function Projects() {
    return (
        <section id="projects" className="bg-fixed pattern py-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1447703693928-9cd89c8d3ac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)'}}>
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white">Projects</h2>

                <div className="flex items-center justify-center mt-10">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Project project={project1}/>
                        <Project project={project2}/>
                        <Project project={project3}/>    
                    </div>
                </div>

                <div className="flex items-center justify-center mt-12">
                    <a className="flex items-center text-white hover:underline hover:text-gray-200" href="https://github.com/Liam-So">
                        <span>View More On Github</span>

                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
