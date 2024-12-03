import {connectDB} from "@/lib/mongodb";
import Users, {IUsers} from "@/models/Users";
import {CreateUsersDTO} from "@/dto/CreateUsersDTO";

export const UsersRepository = {
    async create(user: CreateUsersDTO): Promise<IUsers> {
        await connectDB();
        const newUser = new Users({
            nickname: user.nickname,
            email: user.email,
            password: user.password,
        });
        await newUser.save();
        return newUser;
    }
}