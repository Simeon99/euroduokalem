import { NextApiRequest, NextApiResponse } from "next";
import { IBlogPost } from "./blogPosts";
import blogPosts from '@/data/blogPosts.json'
type Lang = 'en' | 'sr' | 'ru';

const blogPostsData = blogPosts.blogPosts;


function isValidLang(value: unknown): value is Lang {
    return typeof value === 'string' && ['en', 'sr', 'ru'].includes(value);
}


export default function handler(req: NextApiRequest, res: NextApiResponse<IBlogPost | { error: string }>) {

    const { id, lang } = req.query;

    const selectedLang: Lang = isValidLang(lang) ? lang : 'en';
    const postId = Number(id);

    if (!postId || isNaN(postId)) {
        return res.status(400).json({ error: 'Invalid or missing post ID' });
    }

    const post = blogPostsData.find((p) => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const localizedPost: IBlogPost = {
        id: post.id,
        title: post.title[selectedLang] || post.title.sr,
        text: post.text[selectedLang] || post.text.sr,
        imageUrl: post.imageUrl,
        primary: post.primary,
        recomended: post.recomended,
    }
    res.status(200).json(localizedPost);
}