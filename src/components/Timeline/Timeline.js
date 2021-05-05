import React from 'react'
import { job1, job2, job3 } from "./Data.js"
import TimelineItem from './TimelineItem.js'

function Timeline() {
    return (

        <section>
            <div className="bg-white text-white py-8">
                <div className="container mx-auto flex flex-col items-start my-12 md:my-24">

                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className=" title-font mb-2 text-3xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl text-gray-800">
                        {" "}
                        Work Experience
                        </h1>
                    </div>

                    
                    <div className="ml-0 md:ml-12">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">


                                <div className="border-2-2 border-yellow-555 absolute h-full border"
                                style={{right: '50%', border: '2px solid #FFC100', borderRadius: '1%'}}>
                                    </div>
                                <div className="border-2-2 border-yellow-555 absolute h-full border"
                                style={{left: '50%', border: '2px solid #FFC100', borderRadius: '1%'}}></div>

                                <TimelineItem job={job1}/>
                                <TimelineItem job={job2}/>
                                <TimelineItem job={job3}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Timeline
