import { NextResponse } from "next/server";
import { z } from "zod";
import { prismaCilent } from "../../lib/db"
import { type } from "os";
const Youtube_Regex = new RegExp(
    "^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/watch\?v=[\w-]{11}$"
)

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST(req) {
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const isYoutube = Youtube_Regex.test(data.url);
        if(!isYoutube){
            return NextResponse.json({
                message: "Invalid Youtube URL",
            }, {
                status: 401
            })
        }

        const extractedId = data.url.split("?v=")[1];
        prismaCilent.stream.create({
            userId: data.creatorId,
            url: data.url,
            extractedId,
            type: "Youtube"
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error parsing request",
        }, {
            status: 401
        })

    }
}

export async function GET(req) {
    const creatorId = req.nextUrl.searchParams.get("creatorId");
    const streams = await prismaCilent.stream.findMany({
        where: {
            userId: creatorId
        }
    })

    return NextResponse.json({
        streams
    }, {
        status: 200
    })
}