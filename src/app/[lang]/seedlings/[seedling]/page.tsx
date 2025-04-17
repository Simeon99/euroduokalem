import React from 'react'
import Seedling from '@/app/components/Seedling';
import { Locale } from '../../dictionaries';

interface PageProps {
  params: Promise<{
    lang: Locale;
    seedling: string;
  }>;
}



export default async function FruitPage ({ params }: PageProps) {
  const { lang } = await params;
  const { seedling } = await params;
  
  // const t = await getDictionary(lang);

  return (
    <div className="flex justify-center px-4">
      <div className="max-w-screen-sw w-full">
        <Seedling fruit={seedling} lang={lang} />
      </div>
    </div>
  );
}