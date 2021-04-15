import React from 'react'

function About() {
    return (
        <section className="bg-gray-800 pattern py-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1547499417-61a435d27cb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'}}>
            <div className="max-w-5xl px-6 mx-auto text-center">
                <h2 className="text-2xl font-semibold text-white">About Me</h2>
                <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper nulla nunc quis molestie volutpat elementum at. Ultrices ipsum, enim cursus lorem ac. Orci maecenas praesent arcu eget orci est orci nullam. Leo purus est pellentesque massa at tortor, est. Aliquet pulvinar a mattis sagittis. Suspendisse porta id elementum, massa.</p>
            </div>
        </section>
    )
}

export default About
