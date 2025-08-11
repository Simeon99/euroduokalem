import React from 'react'
import { FruitData, Subvariety } from './Seedling'
import { Translation } from '../[lang]/dictionaries';
import SeedlingPresentationTipe1 from './SeedlingPresentationTipe1';
import SeedlingPresentMenu from './SeedlingPresentMenu';

const SeedlingPresent = ({ selectedData, fruitData, setSelected, t }: { selectedData: Subvariety, fruitData: FruitData, setSelected: (value: Subvariety) => void, t: Translation }) => {

    return (
        <div className='flex flex-row max-lsw:flex-col gap-4 '>
            {/* {fruitData.title} */}
            {/* Desktop side nav*/}
            <SeedlingPresentMenu selected={selectedData} setSelected={setSelected} fruitData={fruitData} />
            <SeedlingPresentationTipe1 selectedData={selectedData} frutiName={fruitData.title} t={t} />
        </div>
    )
}

export default SeedlingPresent