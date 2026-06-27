import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Task from "@//models/Task";

export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: tasks }, { status: 200 });
  } catch (error: any) {
    console.error("❌ GET /api/tasks error:", error.message); // ✅ Error detail
    return NextResponse.json(
      { success: false, message: error.message }, // ✅ Frontend pe bhi dikhega
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { title, description, status, priority } = body;

    if (!title || title.trim() === "") {
      return NextResponse.json(
        { success: false, message: "Title is required" },
        { status: 400 }
      );
    }

    const task = await Task.create({ title, description, status, priority });
    return NextResponse.json({ success: true, data: task }, { status: 201 });
  } catch (error: any) {
    console.error("❌ POST /api/tasks error:", error.message);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}