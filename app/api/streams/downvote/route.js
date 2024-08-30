import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { prismaCilent } from "../../../lib/db";

const UpvoteSchema = z.object({
    streamId: z.string()
})

export async function POST(req) {
    const session = await getServerSession();

    // find the user
    const user = await prismaCilent.user.findOne({
        where: {
            email: session.user.email
        }
    })

    if (!user) {
        return NextResponse.json({
            message: "Unauthorized",
        }, {
            status: 401
        })
    }

    try {
        const data = UpvoteSchema.parse(await req.json());
        await prismaCilent.upvote.delete({
            data: {
                userId_StreamId: {
                    userId: user.id,
                    streamId: data.streamId
                }
            }
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error while downvoting",
        }, {
            status: 401
        })
    }
}