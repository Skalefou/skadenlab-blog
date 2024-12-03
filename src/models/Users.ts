import mongoose, {Document} from "mongoose";

export enum UserRole {
    USER_ROLE,
    ADMIN_ROLE,
}

export enum UserStatut {
    ACTIVE,
    INACTIVE,
    EMAIL_NOT_VERIFIED,
}

export interface IUsers extends Document {
    nickname: string;
    email: string;
    password: string;
    role: number;
    statut: number;
    registerAt: Date;
    lastConnection: Date;
};

const UsersSchema = new mongoose.Schema<IUsers>({
    nickname: {
        type: String,
        required: [true, "Nickname is required"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [
            /^(?=.{1,255}$)\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid",
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: Number,
        required: true,
        enum: UserRole,
        default: UserRole.USER_ROLE,
    },
    statut: {
        type: Number,
        required: true,
        enum: UserStatut,
        default: UserStatut.EMAIL_NOT_VERIFIED,
    },
    registerAt: {
        type: Date,
        required: true,
        default: Date.now,},
    lastConnection: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const Users = mongoose.model<IUsers>("Users", UsersSchema, "users");

export default Users;