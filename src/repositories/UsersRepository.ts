import {connectDB} from "@/lib/mongodb";
import Users, {IUsers} from "@/models/Users";

export const UsersRepository = {
    async create(user: IUsers) {
        await connectDB();
        const newUser = new Users({
            nickname: user.nickname,
            email: user.email,
            password: user.password, // Assure-toi de hasher le mot de passe avant de l'enregistrer
        });
        await newUser.save();
        return newUser;
    }
}