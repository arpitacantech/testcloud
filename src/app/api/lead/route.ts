import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, jobTitle, solution, useCase } = body;

    if (!name || !phone || !email || !jobTitle || !solution || !useCase) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const slackPayload = {
      text: "🚀 New AceCloud Consultation Request",
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "🚀 New Inquiry Received on Cantech Cloud" },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${name}` },
            { type: "mrkdwn", text: `*Phone:*\n${phone}` },
            { type: "mrkdwn", text: `*Email:*\n${email}` },
            { type: "mrkdwn", text: `*Job Title:*\n${jobTitle}` },
            { type: "mrkdwn", text: `*Solution:*\n${solution}` },
            { type: "mrkdwn", text: `*Use Case:*\n${useCase}` },
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted at: ${new Date().toLocaleString()}`,
            },
          ],
        },
      ],
    };

    const slackRes = await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackPayload),
    });

    if (!slackRes.ok) {
      throw new Error("Slack webhook failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}