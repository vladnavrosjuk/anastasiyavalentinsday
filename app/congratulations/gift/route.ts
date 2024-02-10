import { readFile } from "fs/promises";
import path from "path";

export async function GET(request: Request) {
    const buffer = await readFile(path.join(process.cwd(), process.env.GIFT_PATH!));
    const headers = new Headers();
    headers.append('Content-Disposition', `attachment; filename="${process.env.GIFT_FILENAME}"`);
    headers.append('Content-Type', process.env.GIFT_CONTENT_TYPE!);

    return new Response(buffer, {
        headers,
    });
}
