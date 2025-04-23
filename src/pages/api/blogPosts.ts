import { NextApiRequest, NextApiResponse } from "next";

import blogPosts from '@/data/blogPosts.json'

export interface IBlogPost {
    id: number;
    title: string;
    text: string;
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
    const { lang } = req.query;

    const selectedLang: Lang = isValidLang(lang) ? lang : 'en';

    const localized = blogPostsData.blogPosts.map((i) => ({
        id: i.id,
        title: i.title[selectedLang] || i.title.sr,
        text: i.text[selectedLang] || i.text.sr,
        imageUrl: i.imageUrl,
        primary: i.primary,
        recomended: i.recomended,
    }))

    res.status(200).json(localized);

}