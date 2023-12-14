import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;
export async function POST() {
	try {
		const data = await resend.emails.send({
			from: fromEmail,
			to: [toEmail],
			subject: "Hello world",
			react: (
				<>
					<p>Email Body</p>
				</>
			),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
