import { NextResponse } from "next/server";

export async function POST(req, res, next) {
    const {fullname, email, message} = await req.json();

    console.log("POST", fullname, email, message);

    return NextResponse.json({msg: ["hi from contact route.js"] });
}