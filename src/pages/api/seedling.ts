import { NextApiRequest, NextApiResponse } from 'next';

import fruitData from '@/data/apple.json'

const fruits = fruitData;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lang = 'sr', fruit, subvariety } = req.query;

  const content = fruits[lang as keyof typeof fruits];

  if (!content) {
    return res.status(400).json({ error: 'Language not supported' });
  }

  if (fruit) {
    const selectedFruit = content[fruit as keyof typeof content];

    if (!selectedFruit) {
      return res.status(404).json({ error: 'Fruit not found' });
    }

    const { subvarietys } = selectedFruit;

    if (!Array.isArray(subvarietys)) {
      return res.status(500).json({ error: 'Data format error: subvarietys is not an array' });
    }

    if (subvariety) {
      const querySub = Array.isArray(subvariety) ? subvariety[0] : subvariety;
      const found = subvarietys.find(
        (item) => item.subvariety.toLowerCase() === querySub.toLowerCase()
      );

      if (!found) {
        return res.status(404).json({ error: 'Subvariety not found' });
      }

      return res.status(200).json(found);
    }

    // Return full fruit object (with title and subvarietys)
    return res.status(200).json(selectedFruit);
  }

  // Return all fruits for the language
  return res.status(200).json(content);
}