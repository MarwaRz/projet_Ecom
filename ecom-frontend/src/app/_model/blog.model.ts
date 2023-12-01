import { FileHandelBlog } from "./file-handelBlog.model";

export interface Blog {
    blogId: number,
    blogName: String,
    blogDescription: String,
    date: String,
    type: String,
    description:String,
    blogImages: FileHandelBlog[]
}