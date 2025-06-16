import { NextApiRequest, NextApiResponse } from "next";

import blogPosts from '@/data/blogPosts.json'

export interface IBlogPost {
    id: number;
    title: string;
    text: string;
    markdown: string;
    imageUrl: string;
    primary: boolean;
    recomended: number[];
}

const blogPostsData = blogPosts;

type Lang = 'en' | 'sr' | 'ru';

function isValidLang(value: unknown): value is Lang {
    return typeof value === 'string' && ['en', 'sr', 'ru'].includes(value);
  }
  


export default function handler(req: NextApiRequest, res: NextApiResponse<IBlogPost[]>) {
    const { lang, offset, limit  } = req.query;

    const selectedLang: Lang = isValidLang(lang) ? lang : 'en';
    const offsetNum = parseInt(offset as string) || 0;
    const limitNum = parseInt(limit as string) || 5;

    const localized = blogPostsData.blogPosts.map((i) => ({
        id: i.id,
        title: i.title[selectedLang] || i.title.sr,
        text: i.text[selectedLang] || i.text.sr,
        markdown: i.markdown[selectedLang] || i.markdown.sr,
        imageUrl: i.imageUrl,
        primary: i.primary,
        recomended: i.recomended,
    }))

    const paginated = localized.slice(offsetNum, offsetNum + limitNum);

    res.status(200).json(paginated);

}