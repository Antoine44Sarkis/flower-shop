import { NextResponse, NextRequest } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("floremi");
    const products = await db.collection("products").find({}).toArray();

    return NextResponse.json(products || []);
  } catch (error) {
    console.error("failed to fetch products", error);
    return NextResponse.json([]);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, about, imageUrl } = body;

    if (!name || !about || !imageUrl)
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db("floremi");
    const result = await db.collection("products").insertOne({
      name,
      description: about,
      imageUrl,
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Failed to save product", error);
    return NextResponse.json(
      { message: "Error saving product" },
      { status: 500 }
    );
  }
}
