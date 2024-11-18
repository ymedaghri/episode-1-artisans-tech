import { getDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    const result = await getDb()
    return NextResponse.json(result.data.repositories);
}

export async function POST(req: Request) {
    const db = await getDb(); 
    const { name, description, cloneUrl } = await req.json();    
    const newRepository = { name, description, clone_url:cloneUrl };
    db.data.repositories.push(newRepository);
  
    await db.write();
  
    return NextResponse.json(newRepository, { status: 201 });
}