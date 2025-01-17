import { FaGithub, FaFigma, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
            </nav>

            <nav>
                {/* Github figma linkedin */}
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaGithub size={30} />
                    </a>
                    <a>
                        <FaFigma size={30} />
                    </a>
                    <a>
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </nav>
            <aside>
                <p>By - Woodrow Reese</p>
            </aside>
        </footer>
    )
}