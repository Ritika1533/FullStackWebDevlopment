import "./contactform.css";
import { FaTwitter } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
function ContactForm() {
	return (
		<>
			<div className="contact">
				<div className="head-contact">
					<h6 className="touch">Get in Touch</h6>
					<h1 className="header-content">Contact Me</h1>
				</div>
				<div className="social-contact">
					<button
						style={{ border: "none", color: "#777" }}
						className="social-icon"
					>
						<MdAttachEmail size={40} style={{ color: "#777" }} />
						<a href="mailto:ritikakes33@gmail.com" style={{ color: "#777" }}>
							ritikakes33@gmail.com
						</a>
					</button>
					<button
						style={{ border: "none", color: "#777" }}
						className="social-icon"
					>
						<FaTwitter size={40} style={{ color: "#777" }} />
						<a href="https://x.com/KeshriRitika10" style={{ color: "#777" }}>
							Twitter
						</a>
					</button>
					<button
						style={{ border: "none", color: "#777" }}
						className="social-icon"
					>
						<FaGithub size={40} style={{ color: "#777" }} />
						<a href="https://github.com/Ritika1533" style={{ color: "#777" }}>
							Github
						</a>
					</button>
					<button
						style={{ border: "none", color: "#777" }}
						className="social-icon"
					>
						<FaLinkedin size={40} style={{ color: "#777" }} />
						<a
							href="https://www.linkedin.com/in/ritika-keshri-310323279/"
							style={{ color: "#777" }}
						>
							Linkedin
						</a>
					</button>
				</div>
			</div>
			<div className="footer">
				<div className="footer-content">
					<h4>"The best way to predict the future is to invent it."</h4>
					<p>Copyright © 2024 Ritika Keshri. All Rights Reserved.</p>
					<hr />
				</div>
			</div>
			<div className="end">
				<div className="end-portfolio"></div>
			</div>
		</>
	);
}

export default ContactForm;
