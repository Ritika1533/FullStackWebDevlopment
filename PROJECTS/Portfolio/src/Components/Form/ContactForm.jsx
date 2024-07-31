import React, { useState } from "react";
import "./contactform.css";
function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here (e.g., send data to a server)
		console.log("Form data submitted:", formData);
		// Reset form after submission
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<form onSubmit={handleSubmit} className="contact-form">
			<h2>Contact Me</h2>
			<div className="form-group">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
				/>
			</div>

			<button type="submit">Submit</button>
		</form>
	);
}

export default ContactForm;
