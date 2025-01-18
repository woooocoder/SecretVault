import { FaGithub, FaFigma, FaLinkedin } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
export default function Footer() {
    return (
        <footer className="mt-[15%] footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
            </nav>

            <nav> 
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/woooocoder/SecretVault/tree/main">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.figma.com/design/2hR3T26Tyb3irolKBJ5JzM/SecretVault?node-id=108-1324&t=3hHrQ3zMQRZPWjMk-0">
                        <FaFigma size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/reese-woodrow/">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://woodrow7reese@gmail.com">
                        <IoIosMail size={30} />
                    </a>
                </div>
            </nav>
            <aside>
                <p>By - Woodrow Reese</p>
            </aside>
        </footer>
    )
}