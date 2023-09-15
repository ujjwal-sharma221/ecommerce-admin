import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismaDb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { billboardId: string } }
) {
  try {
    if (!params.billboardId)
      return new NextResponse("Billboard ID is required", { status: 400 });

    const billboard = await prismaDb.billboard.findUnique({
      where: {
        id: params.billboardId,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[Billboard_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { billboardId: string; storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();
    const { label, imageURL } = body;

    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    if (!label) return new NextResponse("Label is required", { status: 400 });

    if (!imageURL)
      return new NextResponse("Image URL is required", { status: 400 });

    if (!params.billboardId)
      return new NextResponse("Billboard ID is required", { status: 400 });

    const storeByUserId = await prismaDb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Swiper, NO SWIPING!", { status: 403 });
    }

    const billboard = await prismaDb.billboard.updateMany({
      where: {
        id: params.billboardId,
      },
      data: { label, imageURL },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[Billboard_Patch]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string; billboardId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    if (!params.billboardId)
      return new NextResponse("Billboard ID is required", { status: 400 });

    const storeByUserId = await prismaDb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Swiper, NO SWIPING!", { status: 403 });
    }

    const billboard = await prismaDb.billboard.deleteMany({
      where: {
        id: params.billboardId,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[Billboard_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
