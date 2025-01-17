export default function LandingPage() {
    return (
        <>

        <div className="mt-[15%] flex">
            <div className="flex flex-col mx-[10%] lg:w-1/2">
                <h1 className="font-medium text-3xl mb-[4%]">
                    <p>
                        Store & Manage Your
                    </p> 
                    <p>
                        Application's Secrets
                    </p>
                </h1>

                <div className="text-primary text-lg font-medium mb-[2%]">
                    <p>
                        Keep your environment variables and application secrets 
                    </p>
                    <p>
                        safe, organized, and accessible.
                    </p>
                </div>
                <div className="text-primary text-lg font-medium mb-[4%]">
                    <p>
                        Whether you're working solo or collaborating with a team, our
                    </p>

                    <p>
                        platform ensures security, efficiency, and seamless 
                    </p>

                    <p>
                        integrations to power your projects with confidence.
                    </p>
                </div>

                <div className="flex font-semibold space-x-[2vw]">
                    <button className="bg-[#111B47] text-nowrap text-white px-[6vw] py-[1vh] rounded-md">
                        Log In
                    </button>

                    <button className="bg-white border-2 border-[#111B47] text-[#111B47] px-[6vw] py-[1vh] rounded-md text-nowrap">
                        Sign Up
                    </button>
                </div>
            </div>

            <div>
                <img src="/homepage-1.svg" className="w-[100%]"/>
            </div>
        </div>
        
        <div>

        </div>
        
        </>
    )
}