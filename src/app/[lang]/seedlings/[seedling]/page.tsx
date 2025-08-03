import React from 'react';
import Seedling from '@/app/components/Seedling';
import { getDictionary, Locale } from '../../dictionaries';

interface PageProps {
  params: Promise<{
    lang: Locale;
    seedling: string;
  }>;
}


type SeedlingKey =
  | 'apple'
  | 'pear'
  | 'plum'
  | 'cherry'
  | 'sourCherry'
  | 'peach'
  | 'columnarApple'
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

  return {
    title: t.seo.seedling[fruitName].title,
    description: t.seo.seedling[fruitName].description,
    keywords: t.seo.seedling[fruitName].keywords,
    openGraph: {
      title: t.seo.seedling[fruitName].openGraph.title,
      description: t.seo.seedling[fruitName].openGraph.description
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
