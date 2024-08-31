import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.OPENWEATHERMAP_KEY;
        const lat = 40.4165;
        const lon = -3.7026;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        console.log(url);

        const res = await axios.get(url);
        return NextResponse.json(res.data);
    } catch (error) {
        console.error("Error fetching forecast data:", error);
        return new Response("Error fetching forecast data", { status: 500 });
    }
}
