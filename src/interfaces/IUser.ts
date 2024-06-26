import { Document, Types } from "mongoose";

export interface IUser extends Document {
    _id: string;
    name?: string;
    username: string;
    avatar_url?: string;
    email: string;
    password: string;
    photos: Types.ObjectId[];
}