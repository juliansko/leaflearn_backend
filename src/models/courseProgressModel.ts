import { Schema } from "mongoose";

export interface CourseProgressInterface {
    courseID: Schema.Types.ObjectId,
    userID: Schema.Types.ObjectId,
    completed: string[],
}

const courseProgressSchema = new Schema<CourseProgressInterface>({
    courseID: {type: Schema.Types.ObjectId, required: true},
    userID: {type: Schema.Types.ObjectId, required: true},
    completed: {type: [String], required: true},
});