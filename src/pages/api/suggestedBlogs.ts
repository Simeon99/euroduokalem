import { NextApiRequest, NextApiResponse } from 'next';

import blogData from '@/data/blogPosts.json'

type Lang = 'en' | 'sr' | 'ru';

const blogs = blogData.blogPosts;

export type BlogPost = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    url: string;
};

function isValidLang(value: unknown): value is Lang {
    return typeof value === 'string' && ['en', 'sr', 'ru'].includes(value);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { lang, blogIds } = req.query;

    const selectedLang: Lang = isValidLang(lang) ? lang : 'en';
    let ids: number[] = [];
    if (typeof blogIds === 'string') {
        ids = blogIds.split(',').map(id => parseInt(id)).filter(id => !isNaN(id));
    }

    const localized:BlogPost[] = blogs.filter(item => ids.includes(item.id)).map(item => ({
        id: item.id,
        title: item.title[selectedLang],
        description: item.text[selectedLang],
        imageUrl: item.imageUrl,
        url: '/sr/blog/'+item.id
    }));

    res.status(200).json(localized);
}