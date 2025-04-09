import { NextApiRequest, NextApiResponse } from 'next';

type Lang = 'en' | 'sr' | 'ru';

const seedlings = [
    {
      id: 1,
      name: { en: 'Apple', sr: 'Jabuka', ru: 'Яблоня' },
      description: {
        en: ['A strong apple seedling', 'Grows well in all climates', 'Great for juice and pie'],
        sr: ['Jaka sadnica jabuke', 'Odlična za sve klime', 'Idealna za sok i pitu'],
        ru: ['Крепкий саженец яблони', 'Подходит для всех климатов', 'Отлично для сока и пирога']
      },
      imageUrl: ['/apple.png', '/apples-image.webp'],
      url: 'apple'
    },
    {
      id: 2,
      name: { en: 'Pear', sr: 'Kruška', ru: 'Груша' },
      description: {
        en: ['Beautiful Pear tree', 'Juicy and sweet', 'Long harvest period'],
        sr: ['Prelepa kruška', 'Sočna i slatka', 'Dugo vreme berbe'],
        ru: ['Красивая груша', 'Сочная и сладкая', 'Долгий период сбора']
      },
      imageUrl: ['/pear-home.png', '/pear.webp'],
      url: 'pear'
    },
    {
      id: 3,
      name: { en: 'Cherry', sr: 'Trešnja', ru: 'Вишня' },
      description: {
        en: ['Early blooming cherry', 'Perfect for jam', 'Rich in antioxidants'],
        sr: ['Rana trešnja', 'Idealna za džem', 'Bogata antioksidansima'],
        ru: ['Ранняя вишня', 'Идеальна для варенья', 'Богата антиоксидантами']
      },
      imageUrl: ['','/sweet-cherry.jpg'],
      url: 'cherry'
    },
    {
      id: 4,
      name: { en: 'Plum', sr: 'Šljiva', ru: 'Слива' },
      description: {
        en: ['Traditional Balkan plum', 'Great for rakija', 'Resistant to disease'],
        sr: ['Tradicionalna šljiva', 'Odlična za rakiju', 'Otporna na bolesti'],
        ru: ['Традиционная слива', 'Отлична для ракии', 'Устойчива к болезням']
      },
      imageUrl: ['','/plum.webp'],
      url: 'plum'
    },
    {
      id: 5,
      name: { en: 'Peach', sr: 'Breskva', ru: 'Персик' },
      description: {
        en: ['Soft and sweet peach', 'Easy to grow', 'High yield'],
        sr: ['Meka i slatka breskva', 'Laka za uzgoj', 'Visok prinos'],
        ru: ['Мягкий и сладкий персик', 'Легко выращивать', 'Высокий урожай']
      },
      imageUrl: ['','/peach.webp'],
      url: 'peach'
    },
    {
      id: 6,
      name: { en: 'Apricot', sr: 'Kajsija', ru: 'Абрикос' },
      description: {
        en: ['Fragrant apricot', 'Great for drying', 'Popular in jams'],
        sr: ['Mirisna kajsija', 'Odlična za sušenje', 'Popularna za džemove'],
        ru: ['Ароматный абрикос', 'Отлично подходит для сушки', 'Популярен в вареньях']
      },
      imageUrl: ['','/apricot.jpg'],
      url: 'apricot'
    },
    {
      id: 7,
      name: { en: 'Quince', sr: 'Dunja', ru: 'Айва' },
      description: {
        en: ['Aromatic quince', 'Used for liqueur', 'Very tough tree'],
        sr: ['Aromatična dunja', 'Za liker i džem', 'Veoma otporno drvo'],
        ru: ['Ароматная айва', 'Для ликера и варенья', 'Очень устойчивое дерево']
      },
      imageUrl: ['/quince.png'],
      url: 'quince'
    },
    {
      id: 8,
      name: { en: 'Nectarine', sr: 'Nektarina', ru: 'Нектарин' },
      description: {
        en: ['Juicy nectarine', 'Smooth skin', 'Loved by kids'],
        sr: ['Sočna nektarina', 'Glatka kora', 'Omiljena deci'],
        ru: ['Сочный нектарин', 'Гладкая кожа', 'Любим детьми']
      },
      imageUrl: ['/nectarine.png'],
      url: 'nectarine'
    },
    {
      id: 9,
      name: { en: 'Mulberry', sr: 'Dud', ru: 'Шелковица' },
      description: {
        en: ['Old variety mulberry', 'Black and white types', 'Good for birds'],
        sr: ['Stara sorta duda', 'Crni i beli dud', 'Privlači ptice'],
        ru: ['Старая разновидность шелковицы', 'Чёрная и белая', 'Привлекает птиц']
      },
      imageUrl: ['/mulberry.png'],
      url: 'mulberry'
    },
    {
      id: 10,
      name: { en: 'Fig', sr: 'Smokva', ru: 'Инжир' },
      description: {
        en: ['Mediterranean fig', 'Sweet and soft', 'Can be grown in pots'],
        sr: ['Mediteranska smokva', 'Slatka i mekana', 'Može u saksiji'],
        ru: ['Средиземноморский инжир', 'Сладкий и мягкий', 'Можно выращивать в горшке']
      },
      imageUrl: ['/fig.png'],
      url: 'fig'
    },
    {
      id: 11,
      name: { en: 'Pomegranate', sr: 'Nar', ru: 'Гранат' },
      description: {
        en: ['Exotic pomegranate', 'Rich in vitamin C', 'Hardy shrub'],
        sr: ['Egzotični nar', 'Bogat vitaminom C', 'Otporan žbun'],
        ru: ['Экзотический гранат', 'Богат витамином C', 'Устойчивый кустарник']
      },
      imageUrl: ['/pomegranate.png'],
      url: 'pomegranate'
    }
  ];
  

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