export default function LandingPage() {
    return (
        <div className="space-y-[10%]">
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
                    <img src="/homepage-1.svg" className="w-[100%]" />
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <h2>
                        Safe, Secure & Powerful
                    </h2>

                    <p>
                        Protect your application's secrets with enterprise-grade security and an 
                        intuitive platform. Store, manage, and share environment variables with 
                        ease, ensuring your projects stay efficient and secure at every stage.
                    </p>

                    <div className="flex">
                        <div className="flex flex-col">
                            <p>IMAGE</p>
                            <h3>Title Goes Here</h3>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Inventore architecto, nihil nesciunt, error voluptates sint
                                eligendi modi mollitia.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <p>IMAGE</p>
                            <h3>Title Goes Here</h3>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Inventore architecto, nihil nesciunt, error voluptates sint
                                eligendi modi mollitia.
                            </p>
                        </div>
                    </div>
                </div>
              
                <img src="/homepage-2.svg" className="w-[100%]" />
            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <h2>Access Management</h2>
                    <p>
                        Whether you’re collaborating with a small team or managing a large
                        organization, RBAC ensures that each user has the right permissions,
                        nothing more and nothing less.
                    </p>

                    <p>
                        <strong>Admin:</strong> Full control over the environment, including adding/removing 
                        users, managing roles, and accessing all variables.
                    </p>

                    <p>
                        <strong>Contributor:</strong> Can create, edit, and delete environment variables but cannot manage user 
                        permissions or roles.
                    </p>

                    <p>
                        <strong>Read-Only:</strong> Can view environment variables but cannot modify or delete them.
                    </p>
                </div>
                <img src="/homepage-3.svg" className="w-[100%]" />
            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <h2>Version Control & Backups</h2>
                    <p>
                        <strong>Audit Logs:</strong> Stay informed with detailed logs that track every 
                        action taken on your environment variables—whether it’s an 
                        update, deletion, or access. Gain transparency into who made
                         changes and when, ensuring accountability and compliance.
                    </p>

                    <p>
                        <strong>Admin:</strong> Full control over the environment, including adding/removing 
                        users, managing roles, and accessing all variables.
                    </p>

                    <p>
                        <strong>Variable History:</strong> View past values, compare changes, and gain insights
                        into how your configuration has evolved over time.
                    </p>

                    <p>
                        <strong>Rollback Capability:</strong> Instantly roll back to any previous version of a variable with
                         just a few clicks, minimizing downtime and errors in your applications.
                    </p>
                </div>
                <img src="/homepage-4.svg" className="w-[100%]" />
            </div>

            <div className="flex">
                <img src="/homepage-4.svg" className="w-[100%]" />
                <div className="flex flex-col">
                    <h2>API & Cloud Integration</h2>
                    
                    <p>
                        <strong>Fetch, update and manage</strong> your environment variables programmatically with
                        our robust API.
                    </p>

                    <p>
                        <strong>Integrate</strong> with CI/CD pipelines like Jenkins, GitHub Actions or GitLab CI.
                    </p>

                    <p>
                        <strong>Multi-Cloud Ready</strong> Extend support to other cloud platforms
                        like Azure and Google Cloud to centralize secret management 
                        across environments.
                    </p>

                    <button>Get Started</button>
                </div>
            </div>

        </div>
    )
}