import { z, ZodError } from "zod";
import { UsersRepository } from "@/repositories/UsersRepository";
import { CreateUsersDTO } from "@/dto/CreateUsersDTO";
import { IUsers } from "@/models/Users";

const createSchema = z.object({
    nickname: z
        .string()
        .min(3, { message: "Name must be at least 3 characters long" })
        .max(255, { message: "Name must be at most 255 characters long" }),
    email: z
        .string()
        .email({ message: "Invalid email" })
        .regex(
            /^(?=.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            { message: "Invalid email" }
        ),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(255, { message: "Password must be at most 255 characters long" }),
});

export const UsersService = {
    async create(user: CreateUsersDTO): Promise<IUsers> {
        try {
            createSchema.parse(user);
            const newUser = await UsersRepository.create(user);
            return newUser;
        } catch (error) {
            if (error instanceof ZodError) {
                console.error("Validation failed", error.errors);
                return Promise.reject(error.errors);
            }
            return Promise.reject(error);
        }
    },
};
