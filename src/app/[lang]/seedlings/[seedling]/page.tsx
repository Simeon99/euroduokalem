import React from 'react';
import Seedling from '@/app/components/Seedling';
import { getDictionary, Locale } from '../../dictionaries';

interface PageProps {
  params: Promise<{
    lang: Locale;
    seedling: string;
  }>;
}

const fruitImages: Record<SeedlingKey, string> = {
    apple: 'https://euroduokalem.com/images/seedlings/apple.jpg',
    pear: 'https://euroduokalem.com/images/seedlings/pear.jpg',
    plum: 'https://euroduokalem.com/images/seedlings/plum.jpg',
    'sweet-cherry': 'https://euroduokalem.com/images/seedlings/sweet-cherry.jpg',
    'sour-cherry': 'https://euroduokalem.com/images/seedlings/sour-cherry.jpg',
    apricot: 'https://euroduokalem.com/images/seedlings/apricot.jpg',
    peach: 'https://euroduokalem.com/images/seedlings/peach.webp',
    'columnar-apple': 'https://euroduokalem.com/images/seedlings/columnar-apple.jpg',
    quince: 'https://euroduokalem.com/images/seedlings/quince.jpg',
    medlar: 'https://euroduokalem.com/images/seedlings/medlar.jpg',
    nectarine: 'https://euroduokalem.com/images/seedlings/nectarine.jpg',
    hazelnut: 'https://euroduokalem.com/images/seedlings/hazelnut.jpg',
    walnut: 'https://euroduokalem.com/images/seedlings/walnut.jpg',
    grapevine: 'https://euroduokalem.com/images/seedlings/purple.jpg',
    gooseberry: 'https://euroduokalem.com/images/seedlings/gooseberry.jpg',
    currant: 'https://euroduokalem.com/images/seedlings/currant.jpg',
    blackberry: 'https://euroduokalem.com/images/seedlings/berry.jpg',
    raspberry: 'https://euroduokalem.com/images/seedlings/raspberry.jpg',
    roses: 'https://euroduokalem.com/images/seedlings/roses.jpg',
  };

type SeedlingKey =
  | 'apple'
  | 'pear'
  | 'plum'
  | 'sweet-cherry'
  | 'sour-cherry'
  | 'apricot'
  | 'peach'
  | 'columnar-apple'
  | 'quince'
  | 'medlar'
  | 'nectarine'
  | 'hazelnut'
  | 'walnut'
  | 'grapevine'
  | 'gooseberry'
  | 'currant'
  | 'blackberry'
  | 'raspberry'
  | 'roses';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale; seedling: string }> }) {
   const { lang, seedling } = await params;
  const t = await getDictionary(lang);
  const fruitName = seedling as SeedlingKey;
  const selectedImage = fruitImages[fruitName];

  return {
    title: t.seo.seedling[fruitName].title,
    description: t.seo.seedling[fruitName].description,
    keywords: t.seo.seedling[fruitName].keywords,
    openGraph: {
      title: t.seo.seedling[fruitName].openGraph.title,
      description: t.seo.seedling[fruitName].openGraph.description,
      images: [
        {
          url: selectedImage,
          width: 1200,
          height: 630,
          alt: t.seo.seedling[fruitName].title,
        },
      ],
    }
  };
}

export default async function FruitPage({ params }: PageProps) {
  const { lang, seedling } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="flex justify-center px-4">
      <div className="max-w-screen-sw w-full">
        <Seedling fruit={seedling} lang={lang} t={t} />
      </div>
    </div>
  );
}
