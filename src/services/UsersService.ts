import Users, {IUsers} from "@/models/Users";
import {CreateUserDTO} from "@/dto/CreateUserDTO";
import {z} from "zod";
import {UsersRepository} from "@/repositories/UsersRepository";

const createSchema = z.object({
    nickname: z
        .string()
        .min(3, { message: "Name must be at least 3 characters long" })
        .max(255, { message: "Name must be at most 255 characters long" }),
    email: z
        .string()
        .email({ message: "Invalid email" })
        .regex(/^(?=.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Invalid email" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(255, { message: "Password must be at most 255 characters long" }),
});

const UsersService = {
    async create(user: CreateUserDTO) {
        const { nickname, email, password } = createSchema.parse(user);
        const newUser = new Users({
            nickname,
            email,
            password,
        });
        await UsersRepository.create(newUser);
    }
};

export default UsersService;