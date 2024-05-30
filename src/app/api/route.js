import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const generateEmail = (data) => {
	const stringData = Object.entries(data).reduce((str, [key, val]) => (str += `${key} : \n${val} \n \n`), "");

	const htmlData = Object.entries(data).reduce(
		(str, [key, val]) =>
			(str += `<h1 class="form-heading" align="left">${key.charAt(0).toUpperCase() + key.slice(1)}:</h1><p class="form-answer"> ${val}</p>`),
		""
	);

	return {
		text: stringData,
		html: `<!DOCTYPE html> <html> <head> <title></title> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <style type="text/css"> body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table { border-collapse: collapse !important; } body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; } @media screen and (max-width: 525px) { .wrapper { width: 100% !important; max-width: 100% !important; } .responsive-table { width: 100% !important; } .padding { padding: 10px 5% 15px 5% !important; } .section-padding { padding: 0 15px 50px 15px !important; } } .form-container { margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc; } .form-heading { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0; } .form-answer { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0; } div[style*="margin: 16px 0;"] { margin: 0 !important; } </style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>You Just Received a New Lead!</h2> <div class="form-container">${htmlData}</div> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </body> </html>`,
	};
};

const sendAutoReply = async (recipientEmail, isForm, name) => {
	// Create a Nodemailer transporter
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASS,
		},
	});

	// Auto-reply email content
	const autoReplyMessage = `
	  ${
			isForm === "contact"
				? `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Document</title> <style> body { font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; } .para_body p { margin-bottom: 30px; color: #2a2a2a; } .conclusion { line-height: 12px; color: #2a2a2a; } .name { font-weight: 600; } .designation { color: #9a9a9a; } </style> </head> <body> <div class=""> <div class="para_body"> <p>Dear ${
						name.split(" ")[0].charAt(0).toUpperCase() + name.split(" ")[0].slice(1)
				  },</p> <p> Thank you for contacting me through my personal site, hamiduzjaman.com. I appreciate you taking the time to get in touch. Your message is important to me, and I will get back to you as soon as possible. </p> <p> As the founder and chief digital marketer of dgency.com, I am dedicated to providing top-notch digital marketing services. Whether you have questions, need assistance, or are interested in our services, I'm here to help. </p> <p> Looking forward to connecting with you soon. </p>  </div> <div class="conclusion"> <p>Best regards,</p> <p class="name">H M Hamiduzjaman</p> <p class="designation">Founder & Chief Digital Marketer</p><p class="designation">dgency.com</p> </div> </div> </body> </html>`
				: ""
		}
	`;

	// Define the email options
	const mailOptions = {
		from: `"Hamid Shawon" <${process.env.EMAIL}>`,
		to: recipientEmail,
		subject: `
		${isForm === "contact" ? "Thank You for Reaching Out!" : ""}
	  `,
		html: autoReplyMessage,
	};

	try {
		// Send the auto-reply email
		await transporter.sendMail(mailOptions);
		console.log("Auto-reply sent successfully");
	} catch (error) {
		console.error("Error sending auto-reply:", error);
	}
};

export async function POST(req, res) {
	try {
		const response = await req.json();
		const data = response.data;
		const subject = response.subject;
		const isForm = response.form;

		console.log(data);

		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASS,
			},
		});

		let mailOptions = {
			from: data.email, // sender address
			to: process.env.EMAIL, // list of receivers
			replyTo: data.email,
			subject: subject, // Subject line
			...generateEmail(data),
			// bcc: ["hamid@dgency.com", "dgency.com@gmail.com"],
		};

		try {
			await transporter.sendMail(mailOptions);
			console.log("Email sent successfully");
		} catch (err) {
			console.error("Error sending email:", err);
			throw new Error("Failed to send email");
		}

		await sendAutoReply(data.email, isForm, data.name);

		// res.status(200).json({ message: 'Message sent successfully' });
	} catch (error) {
		console.error("Error processing contact form:", error);
		res.status(500).json({ error: "Failed to send message" });
	}

	return NextResponse.json({ message: "Post message done" });
}
