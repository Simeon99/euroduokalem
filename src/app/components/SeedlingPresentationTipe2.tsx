import React from 'react'
import { SubvarietyRoseGrapevine } from './Seedling'
import Image from 'next/image'
import { Translation } from '../[lang]/dictionaries'
import { renderWithBold } from './ui/RenderWithBold'
import SeedlingSuggested from './SeedlingSuggested'

const SeedlingPresentationTipe2 = ({ selectedData, frutiName, t }: { selectedData: SubvarietyRoseGrapevine, frutiName: string, t: Translation }) => {

  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='mb-16 flex flex-col gap-4'>
        <h3 className="text-4xl max-lsw:text-3xl text-primary font-bold font-heading">{t.seedling.about}</h3>
        <p className="text-lg text-gray-700 text-justify">{renderWithBold(selectedData.about)}</p>
      </div>
      <div className='grid grid-cols-4 gap-4 max-sw:grid-cols-3 max-[900px]:grid-cols-2 max-ssw:grid-cols-1 place-items-center'>

        {selectedData && selectedData.subvarietys.map((item, index) =>
          <div key={index} className='relative w-[280px] max-ssw:w-full h-[320px] rounded-2xl shadow-2xl'>


            <div className=" overflow-hidden rounded-2xl h-[320px] w-full">
              <Image
                src={'/images/seedling/' + item?.url}
                alt={item.name}
                width={200}
                height={48}
                className="w-full h-full object-cover transform transition-transform duration-[3000ms] ease-in-out hover:cursor-pointer hover:scale-105"
              />
            </div>
            <div className='absolute bottom-0 w-full z-50 h-[100px]  rounded-b-2xl
            flex items-end p-4
             bg-[linear-gradient(to_bottom,transparent_0%,var(--color-primary)_50%,var(--color-primary)_100%)]'>
              <span className='text-secondary-light absolute text-xl font-bold font-heading'>
                {item?.name}
              </span>
            </div>

          </div>
        )}
      </div>


      <div className='flex flex-col gap-8 my-16'>
        <h2 className='font-heading text-6xl text-primary   max-lsw:text-5xl max-md:text-4xl font-bold line'>
          {t.seedling.suggested}
        </h2>
        <SeedlingSuggested
          key={`${frutiName}-${selectedData.name}`}
          frutiName={frutiName}
        />
      </div>
    </div>
  )
}

export default SeedlingPresentationTipe2