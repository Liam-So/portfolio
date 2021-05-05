import React from 'react'

function TimelineItem({ job }) {
    return (
        <div>
            {job.direction === "left" ? (
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline text-gray-800">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base font-semibold text-yellow-500 text-left">{job.year} {job.month}</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">{job.title}</h4>
                        <h4 className="mb-3 font-bold text-lg md:text-xl text-left">{job.company}</h4>

                        <ul className="list-disc text-sm md:text-base leading-snug text-gray-700 text-opacity-100 md:ml-4 text-left">
                                                <li>{job.description1}</li>
                                                <li>{job.description2}</li>
                                                <li>{job.description3}</li>
                                            </ul>
                    </div>
                </div>
                    ): (
                        <div className="mb-8 flex justify-between items-center w-full right-timeline text-gray-800">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1  w-5/12 px-1 py-4 text-justify">
                                        <p className="mb-3 text-base font-semibold text-yellow-500">{job.year} {job.month}</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl text-justify">{job.title}</h4>
                                        <h4 className="mb-3 font-bold text-lg md:text-xl text-justify">{job.company}</h4>
                                        <ul className="list-disc text-sm md:text-base leading-snug text-gray-700 text-opacity-100 md:ml-4 text-justify">
                                                <li>{job.description1}</li>
                                                <li>{job.description2}</li>
                                                <li>{job.description3}</li>
                                            </ul>
                                    </div>
                                </div>
                    )}
        </div>
    )
}

export default TimelineItem
