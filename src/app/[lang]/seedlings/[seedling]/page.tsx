import React from 'react'
import Seedling from '@/app/components/Seedling';

export default async function FruitPage({
  params,
}: {
  params: { seedling: string; lang: string };
}) {
  const { seedling, lang } = params;

  return (
    <div className='flex justify-center px-4'>
      <div className='max-w-screen-sw  w-full '>
        <Seedling fruit={seedling} lang={lang} />
      </div>
    </div>
  );
}
