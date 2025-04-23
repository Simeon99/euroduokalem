import { NextApiRequest, NextApiResponse } from 'next';

import seedlingsData from "@/data/seedlings.json"

type Lang = 'en' | 'sr' | 'ru';

const seedlings = seedlingsData.seedlings;
  

function isValidLang(value: unknown): value is Lang {
    return typeof value === 'string' && ['en', 'sr', 'ru'].includes(value);
  }
  
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { lang } = req.query;
  
    const selectedLang: Lang = isValidLang(lang) ? lang : 'en';
  
    const localized = seedlings.map(item => ({
      id: item.id,
      name: item.name[selectedLang],
      description: item.description[selectedLang],
      imageUrl: item.imageUrl,
      url: item.url
    }));
  
    res.status(200).json(localized);
  }