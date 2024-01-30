import { Schema, model } from "mongoose";

export interface CourseInterface {
    name: string;
    description: string;
    image: string;
    category: string;
    structure: Object;
} 

const courseSchema = new Schema<CourseInterface>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    structure: {type: Object, required: true},
});

export const CourseModel = model('Course', courseSchema);