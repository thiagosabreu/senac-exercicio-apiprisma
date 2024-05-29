import { prisma } from "../../config/prisma.js";

export const createPost = async (title, userId, subtitle, body) => {
    try {
        return await prisma.post.create({
            data: {
                title,
                userId,
                subtitle,
                body,
            },
        });
    } catch (error) {
        throw new Error(`Failed to create post: ${error.message}`);
    }
};

export const findPosts = async () => {
    try {
        return await prisma.post.findMany();
    }
    catch (error) {
        throw new Error(`Failed to get all posts: ${error.message}`);
    }
};

export const findPostById = async (id) => {
    return prisma.post.findFirst({
        where: {
            id,
        },
    });
};

export const updatePost = async (id, postData) => {
    return await prisma.post.update({
        where: {
            id: id
        },
        data: {
            title: postData.title,
            subtitle: postData.subtitle,
            body: postData.body,
        }
    });
};

export const deletePost = async (id) => {
    return await prisma.post.delete({
        where: {
            id: id,
        },
    });
};
