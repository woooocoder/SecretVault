
import { useNavigate } from 'react-router-dom'
import { SiDotenv } from "react-icons/si";
import { FaCloud } from "react-icons/fa";
export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className="space-y-[30%] mt-[15%]">
      <div className="flex justify-between overflow-x-hidden w-full">
        <div className="flex flex-col w-[50%]">
          <h1 className="font-bold text-4xl mb-[8%]">
            <p>Store & Manage Your Application's Secrets</p>
          </h1>

          <div className="text-xl font-medium mb-[4%] text-wrap">
            <p>
              Keep your environment variables and application secrets safe,
              organized, and accessible.
            </p>
          </div>
          <div className="text-xl font-medium mb-[8%]">
            <p>
              Whether you're working solo or collaborating with a team, our
              platform ensures security, efficiency, and seamless integrations
              to power your projects with confidence.
            </p>
          </div>

          <div className="flex font-semibold space-x-[2vw]">
            <button className="bg-[#111B47] text-nowrap text-white px-[6vw] py-[1vh] rounded-md shadow-xl hover:text-inherit transition"
            onClick={() => navigate('/login')}>
              Log In
            </button>

            <button className="bg-white border-2 border-[#111B47] text-[#111B47] px-[6vw] py-[1vh] rounded-md text-nowrap shadow-xl hover:text-opacity-30 transition"
            onClick={() => navigate('/signup')}>
              Sign Up
            </button>
          </div>
        </div>

        <img src="/homepage-1.svg" className="w-[35%]" />
      </div>

      <div className="flex justify-between w-full">
        <div className="flex flex-col w-[50%]">
          <h2 className="font-semibold text-3xl mb-[8%]">
            Safe, Secure & Powerful
          </h2>

          <p className="mb-[8%] text-lg">
            Protect your application's secrets with enterprise-grade security
            and an intuitive platform. Store, manage, and share environment
            variables with ease, ensuring your projects stay efficient and
            secure at every stage.
          </p>

          <div className="flex">
            <div className="flex flex-col space-y-[4%] mr-[4%]">
              <SiDotenv size={40} />
              <h3 className='text-xl'>
                <strong>Environment Variables</strong>
              </h3>

              <p className='text-lg'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore architecto, nihil nesciunt.
              </p>
            </div>

            <div className="flex flex-col space-y-[4%]">
              <FaCloud size={40} />
              <h3 className='text-xl'>
                <strong>Cloud Storage</strong>
              </h3>

              <p className='text-lg'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore architecto, nihil nesciunt, error voluptates sint.
              </p>
            </div>
          </div>
        </div>
        <img src="/homepage-2.svg" className="w-[35%]" />
      </div>

      <div className="grid grid-cols-2 place-content-between gap-y-[35vh]">
        <div>
          <img src="/homepage-3.svg" className="w-[75%]" />
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-3xl mb-[8%]">Access Management</h2>
          <p className="mb-[8%] text-lg">
            Whether you’re collaborating with a small team or managing a large
            organization, RBAC ensures that each user has the right permissions,
            nothing more and nothing less.
          </p>

          <ul className="space-y-[2%] text-lg">
            <li>
              <strong>Admin:</strong> Full control over the environment,
              including adding/removing users, managing roles, and accessing all
              variables.
            </li>

            <li>
              <strong>Contributor:</strong> Can create, edit, and delete
              environment variables but cannot manage user permissions or roles.
            </li>

            <li>
              <strong>Read-Only:</strong> Can view environment variables but
              cannot modify or delete them.
            </li>
          </ul>
        </div>
        
        <div>
            <img src="/homepage-4.svg" className="w-[75%]" />
        </div>

        <div className="flex justify-between w-full">
          <div className="w-0"></div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-3xl mb-[8%]">
              Version Control & Backups
            </h2>
            <ul className="space-y-[2%] text-lg">
              <li>
                <strong>Audit Logs:</strong> Stay informed with detailed logs
                that track every action taken on your environment
                variables—whether it’s an update, deletion, or access. Gain
                transparency into who made changes and when, ensuring
                accountability and compliance.
              </li>

              <li>
                <strong>Admin:</strong> Full control over the environment,
                including adding/removing users, managing roles, and accessing
                all variables.
              </li>

              <li>
                <strong>Variable History:</strong> View past values, compare
                changes, and gain insights into how your configuration has
                evolved over time.
              </li>

              <li>
                <strong>Rollback Capability:</strong> Instantly roll back to any
                previous version of a variable with just a few clicks,
                minimizing downtime and errors in your applications.
              </li>
            </ul>
          </div>
        </div>

        <div>
            <img src="/homepage-5.svg" className="w-[75%]" />
        </div>

        <div className="flex">
          <div className="flex flex-col">
            <h2 className="font-semibold text-3xl mb-[8%]">
              API & Cloud Integration
            </h2>

            <ul className="space-y-[2%] text-lg">
              <li>
                <strong>Fetch, update and manage</strong> your environment
                variables programmatically with our robust API.
              </li>

              <li>
                <strong>Integrate</strong> with CI/CD pipelines like Jenkins,
                GitHub Actions or GitLab CI.
              </li>

              <li>
                <strong>Multi-Cloud Ready</strong> Extend support to other cloud
                platforms like Azure and Google Cloud to centralize secret
                management across environments.
              </li>
            </ul>

            <button className="place-self-start mt-[8%] bg-[#111B47] text-nowrap text-white px-[6vw] py-[1vh] rounded-md shadow-xl w-min font-medium hover:text-inherit transition"
            onClick={() => navigate('/signup')}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
