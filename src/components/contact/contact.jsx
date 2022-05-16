import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
	return (
		<div id="contact" className="container contact-container">
			<h1>Contact Me</h1>
			<div className="contact-links">
				<a
					href="https://www.youtube.com/channel/UCzoBz4EKrLOvm3L4DDNc_pg"
					className="contact youtube"
					target={"blank"}
				>
					<AiOutlineYoutube className="icon" />
					<h2>
						YouTube <span>Lorem ipsum</span>
					</h2>
				</a>

				<a
					href="https://wa.link/wsw28c"
					className="contact whatsapp"
					target={"blank"}
				>
					<AiOutlineWhatsApp className="icon" />
					<h2>
						WhatsApp BRO? <span>+999702505365</span>
					</h2>
				</a>

				<a href="https://www.instagram.com/jan_elmirov/" className="contact instagram">
					<AiOutlineInstagram className="icon" />
					<h2>
						instagram <span>jan_elmirov</span>
					</h2>
				</a>
			</div>
		</div>
	);
}

export default Contact;