import { NextResponse } from "next/server";
import { z } from "zod";
import { prismaCilent } from "../../lib/db"
import { StreamType } from "@prisma/client";
import youtubesearchapi from "youtube-search-api";

const Youtube_Regex = new RegExp(
    "^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$"
)

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST(req) {
    try {
        const data = CreateStreamSchema.parse(await req.json());
    
        // Check if the URL matches the YouTube regex
        const isYoutube = Youtube_Regex.test(data.url);
        if (!isYoutube) {
            return NextResponse.json(
                { message: "Invalid YouTube URL" },
                { status: 401 }
            );
        }
    
        // Extract the YouTube video ID from the URL
        const urlParams = new URLSearchParams(data.url.split("?")[1]);
        const extractedId = urlParams.get("v");
    
        if (!extractedId) {
            return NextResponse.json(
                { message: "Invalid YouTube video ID" },
                { status: 401 }
            );
        }

        const videoDetails = await youtubesearchapi.GetVideoDetails(extractedId)
        console.log(videoDetails.title)
        console.log(videoDetails.thumbnail.thumbnails[0].url)
        console.log(videoDetails.thumbnail.thumbnails[thumbnails.size].url)
    
        // Create the stream in the database
        const stream = await prismaCilent.stream.create({
            data: {
                userId: data.creatorId,
                url: data.url,
                extractedId,
                type: StreamType.Youtube
            }
        });
    
        return NextResponse.json(
            { message: "Stream created", id: stream.id },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { message: "Error processing request" },
            { status: 401 }
        );
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