import React from 'react'

function TimelineItem({ job }) {
    return (
        <div>
            {job.direction === "left" ? (
                        <div className="flex flex-row w-full">
                                <div className="w-2/5 px-2 py-10">
                                    <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                        <div className="text-gray-600 mb-2 flex justify-between">
                                            <div className="font-bold">
                                                {job.title}
                                            </div>
                                            <div className="flex flex-row">
                                                <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200"><i className="far fa-edit"></i></button>
                                                <button className="text-red-500 hover:text-red-300 transition duration-200"><i className="far fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-2">{job.company}</p>
                                        <div className="text-gray-600">
                                            {job.description}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/5  flex justify-center">
                                    <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                            <div>{job.year}</div>
                                            <div>{job.month}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-2/5 px-2 py-10 "></div>
                                </div>
                    ): (
                        <div className="flex flex-row w-full">
                                <div className="w-2/5 px-2 py-10"></div>
                                <div className="w-1/5  flex justify-center">
                                    <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                                            <div>{job.year}</div>
                                            <div>{job.month}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/5 px-2 py-10 ">
                                    <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                                        <div className="text-gray-600 mb-2 flex justify-between">
                                            <div className="font-bold">
                                                {job.title}
                                            </div>
                                            <p className="text-gray-600">{job.company}</p>
                                        </div>
                                        <div className="text-gray-600">
                                            {job.description}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                    )}
        </div>
    )
}

export default TimelineItem
