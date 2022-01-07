import React from 'react'
import Profile from '../images/profile_pic.png'

function Main() {
    return (
        <section className="bg-white mt-20 mb-20">
            <div className="max-w-2xl px-6 text-center mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">Hi, I’m Liam. Nice to meet you.</h2>
                <p className="text-gray-600 mt-4">I'm a 4th year Computer Science student at Dalhousie University seeking employment opportunities for the Fall of 2021.</p>

                <div className="flex items-end justify-center mt-16">
                    <img className="h-56 w-56" src={Profile} alt="profile_pic" />
                </div>
            </div>
        </section>
    )
}

export default Main
