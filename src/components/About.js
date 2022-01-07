import React from 'react'

function About() {
  return (

    <div id="about">
      <section className=" text-gray-200 bg-gray-900">
        <div className="max-w-6xl mx-auto px-5 py-24 ">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className=" title-font mb-2 text-3xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl text-gray-200">
              {" "}
              About Me
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-base text-xl text-gray-400">
              {/* {props.project?.description} */}
              Sexton Scholar Computer Science student at Dalhousie University with a keen interest in software development and mathematics. I am a motivated student who loves new challenges and is excited to tackle new problems with a creative and critical mindset.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* STARTS HERE */}
            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4 min-h-full"  >
                  <div className="flex justify-center">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    </div>
                  </div>

                  <div className="flex-grow ">
                    <h2 className=" text-xl title-font font-medium mb-3 text-center">Frontend Development</h2>
                    <p className="leading-relaxed text-sm text-center">Developed a multitude of different web applications using ReactJS, NodeJs, Typescript, HTML, CSS, and JavaScript for frontend development.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4"  >
                  <div className="flex justify-center">
                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                  </div>

                  <div className="flex-grow ">
                    <h2 className=" text-xl title-font font-medium mb-3 text-center">Professional Experience</h2>
                    <p className="leading-relaxed text-sm text-center tracking-tight">Professional programming experience using Java, Python, PHP, JavaScript. Worked with industry standard tools such as Jenkins, Docker, and Jira, among many others. </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-gray-800 p-4"  >
                  <div className="flex justify-center">
                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                    </div>
                  </div>

                  <div className="flex-grow ">
                    <h2 className=" text-xl title-font font-medium mb-3 text-center">Backend Development</h2>
                    <p className="leading-relaxed text-sm text-center">Worked with backend tools and technologies which include Flask, Kafka Streams, Express, Firebase, MongoDB, SQL, Docker, and Jenkins.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About
