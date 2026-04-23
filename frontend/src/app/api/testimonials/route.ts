import { NextResponse } from "next/server";

export async function GET() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "VP of HR at Reliance",
      content: "Accredian's customized learning paths perfectly aligned with our digital transformation goals. The impact on our team's performance has been outstanding.",
      avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0D8ABC&color=fff"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Director of Engineering at HCL",
      content: "The Data Science and AI modules provided by Accredian equipped our engineers with the cutting-edge skills needed to tackle complex enterprise challenges.",
      avatar: "https://ui-avatars.com/api/?name=Rahul+Verma&background=6c5ce7&color=fff"
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Learning & Development Head at ADP",
      content: "Flexible delivery and expert-led sessions made Accredian the obvious choice for upskilling our global workforce. Truly a next-gen learning partner.",
      avatar: "https://ui-avatars.com/api/?name=Anita+Desai&background=00b894&color=fff"
    }
  ];

  return NextResponse.json(testimonials);
}
