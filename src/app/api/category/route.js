import db from "@/backend/db";
import Category from "@/backend/Category";
import { NextResponse } from "next/server";


export async function POST(req) {
    await db()
    const data = await req.json()
    try {
        const cat = await Category.create({ title: data.title })
        return NextResponse.json({Category:cat,success:true},{status:201})
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}
export async function GET(req) {
    await db()

    try {
        const cat = await Category.find()
        return NextResponse.json({Category:cat,success:true},{status:201})
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}