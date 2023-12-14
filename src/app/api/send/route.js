import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;
export async function POST(req, res) {
	const { email, subject, message } = await req.json();

	try {
		const data = await resend.emails.send({
			from: fromEmail,
			to: [email, fromEmail],
			subject: "New message",
			react: (
				<>
					<h1>Subject: {subject}</h1>
					<h3>
						Thank you for email! I will get back with you as soon as I can.
					</h3>
					<h4>All the best, Wojtek 😊</h4>
					{"--------------------------------------------------"}
					<p>New message from: {email} </p>
					<p>{message}</p>
				</>
			),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
