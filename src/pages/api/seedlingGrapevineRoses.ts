import { NextApiRequest, NextApiResponse } from "next";
import fruitData from '@/data/grapevineAndRoses.json'

const fruits = fruitData;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lang = 'sr', fruit } = req.query;
  const content = fruits[lang as keyof typeof fruits];


  if (!content) {
    return res.status(400).json({ error: 'Language not supported' });
  }

  if (fruit) {
    const selectedFruit = content[fruit as keyof typeof content];

    if (!selectedFruit) {
      return res.status(404).json({ error: 'Fruit not found' });
    }


    return res.status(200).json(selectedFruit);
  }

  // Return all fruits for the language
  return res.status(200).json(content);
}