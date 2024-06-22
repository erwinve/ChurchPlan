import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest) {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
        return NextResponse.json ({success: false, message: "No file provided"});
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join('public/chordsheets', file.name);
    await writeFile(path, buffer);
    console.log(`open ${path} to see uploaded file`)

    return NextResponse.json({success: true, message: "File uploaded successfully"});
}