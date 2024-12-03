import {NextApiRequest} from "next";
import {UsersService} from "@/services/UsersService";
import {CreateUsersDTO} from "@/dto/CreateUsersDTO";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const userInput: CreateUsersDTO = await request.json();
        const newUser = await UsersService.create(userInput);
        return NextResponse.json(newUser, {status: 200});
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 400});
        }
        return NextResponse.json({message: "An error occurred"}, {status: 500});
    }
}