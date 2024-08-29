import { NextResponse } from "next/server";
import { z } from "zod";
import { prismaCilent } from "../../lib/db"

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST(req) {
    try {
        const data = CreateStreamSchema.parse(await req.json());
        prismaCilent.stream.create({
            userId: data.creatorId,
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error parsing request",
        }, {
            status: 401
        })

    }
}