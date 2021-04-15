import React from 'react'
import { job1, job2, job3 } from "./Data.js"
import TimelineItem from './TimelineItem.js'

function Timeline() {
    return (
    <div className="min-h-screen bg-gray-100">
            
        <div className="min-h-screen flex justify-center">
            <div className="w-2/3 mx-auto">
                <TimelineItem job={job1}/>
                <TimelineItem job={job2}/>
                <TimelineItem job={job3}/>
            </div>
        </div>
    </div>
    )
}

export default Timeline
