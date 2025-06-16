import React from 'react'
import { FruitDataRoseGrapevine, SubvarietyRoseGrapevine } from './Seedling'
import LoadingSeedling from './ui/LoadingSeedling';
import { Translation } from '../[lang]/dictionaries';
import SeedlingPresentationTipe2 from './SeedlingPresentationTipe2';
import SeedlingPresentMenuRoseGrapevine from './SeedlingPresentMenuRoseGrapevine';

const SeedlingPresentGrapevineRoses = ({ selectedData, fruitData, setSelected, loading, t }: { selectedData: SubvarietyRoseGrapevine, fruitData: FruitDataRoseGrapevine, setSelected: (value: SubvarietyRoseGrapevine) => void, loading: boolean, t: Translation }) => {
    return (
        <div className='flex flex-row max-lsw:flex-col gap-4 '>
            {/* Desktop side nav*/}
            <SeedlingPresentMenuRoseGrapevine selected={selectedData} setSelected={setSelected} fruitData={fruitData} />

            <div className='flex flex-col gap-8 w-full'>
                <div className='flex justify-end'>
                    <h1 className="text-4xl max-lsw:text-3xl text-primary font-bold font-heading">{selectedData?.name}</h1>

                </div>
                {loading ?
                    <LoadingSeedling /> :
                    <SeedlingPresentationTipe2 selectedData={selectedData} t={t}/>
                }
            </div>

        </div>
    )
}

export default SeedlingPresentGrapevineRoses