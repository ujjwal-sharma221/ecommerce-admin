import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismaDb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { sizeId: string } }
) {
  try {
    if (!params.sizeId)
      return new NextResponse("Billboard ID is required", { status: 400 });

    const sizes = await prismaDb.size.findUnique({
      where: {
        id: params.sizeId,
      },
    });

    return NextResponse.json(sizes);
  } catch (error) {
    console.log("[sizes_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { sizeId: string; storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();
    const { name, value } = body;

    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    if (!name) return new NextResponse("Name is required", { status: 400 });

    if (!value)
      return new NextResponse("Value URL is required", { status: 400 });

    if (!params.sizeId)
      return new NextResponse("Size ID is required", { status: 400 });

    const storeByUserId = await prismaDb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Swiper, NO SWIPING!", { status: 403 });
    }

    const size = await prismaDb.size.updateMany({
      where: {
        id: params.sizeId,
      },
      data: { name, value },
    });

    return NextResponse.json(size);
  } catch (error) {
    console.log("[size_Patch]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string; sizeId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    if (!params.sizeId)
      return new NextResponse("Size ID is required", { status: 400 });

    const storeByUserId = await prismaDb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Swiper, NO SWIPING!", { status: 403 });
    }

    const size = await prismaDb.size.deleteMany({
      where: {
        id: params.sizeId,
      },
    });

    return NextResponse.json(size);
  } catch (error) {
    console.log("[size_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
