import { ObjectId, Schema, model } from "mongoose";

export interface LessonInterface {
    title: string,
    type: string,
    filePath: string,
}

const lessonSchema = new Schema<LessonInterface>({
    title: {type: String, required: true},
    type: {type: String, enum:["book","video","quiz"], required: true},
    filePath: {type: String, required: true},
});

export const LessonModel = model('Lesson', lessonSchema);