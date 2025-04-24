import { NextApiRequest, NextApiResponse } from 'next';

import seedlingsData from "@/data/seedlings.json"

type Lang = 'en' | 'sr' | 'ru';

const seedlings = seedlingsData.seedlings;

export interface ISuggestedFruit {
    id: number;
    name: string;
    description: string[];
    url: string;
    imageUrl: string;
}

function isValidLang(value: unknown): value is Lang {
    return typeof value === 'string' && ['en', 'sr', 'ru'].includes(value);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { lang, fruitIds } = req.query;

    const selectedLang: Lang = isValidLang(lang) ? lang : 'en';
    let ids: number[] = [];
    if (typeof fruitIds === 'string') {
        ids = fruitIds.split(',').map(id => parseInt(id)).filter(id => !isNaN(id));
    }

    const localized:ISuggestedFruit[] = seedlings.filter(item => ids.includes(item.id)).map(item => ({
        id: item.id,
        name: item.name[selectedLang],
        description: item.description[selectedLang],
        imageUrl: item.imageUrl[1],
        url: item.url
    }));

    res.status(200).json(localized);
}