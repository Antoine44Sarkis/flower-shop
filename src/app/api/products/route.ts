import { NextResponse, NextRequest } from "next/server";
import clientPromise from "../../lib/mongodb";
import path from "path";
import { writeFile } from "fs/promises";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("floremi");
    const products = await db.collection("products").find({}).toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("failed to fetch products", error);
    return NextResponse.json({ message: "failed to fetch" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const about = formData.get("about") as string;
    const file = formData.get("image") as File;

    if (!name || !about || !file)
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(process.cwd(), "public/uploads", file.name);
    await writeFile(filePath, buffer);
    const imageUrl = `/uploads/${file.name}`;
    const client = await clientPromise;
    const db = client.db("floremi");
    const result = await db
      .collection("products")
      .insertOne({ name, description: about, imageUrl });
    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Failed to save product", error);
    return NextResponse.json(
      { message: "Error saving product" },
      { status: 500 }
    );
  }
}
