import React from 'react'
import { FruitData, Subvariety } from './Seedling'
import LoadingSeedling from './ui/LoadingSeedling';
import { Translation } from '../[lang]/dictionaries';
import SeedlingPresentationTipe1 from './SeedlingPresentationTipe1';
import SeedlingPresentMenu from './SeedlingPresentMenu';

const SeedlingPresent = ({ selectedData, fruitData, selected, setSelected, loading, t }: { selectedData: Subvariety, fruitData: FruitData, selected: string, setSelected: (value: string) => void, loading: boolean, t: Translation }) => {
    return (
        <div className='flex flex-row max-lsw:flex-col gap-4 '>
            {/* Desktop side nav*/}
            <SeedlingPresentMenu selected={selected} setSelected={setSelected} fruitData={fruitData} />
            {fruitData.title}
            {loading ?
                <LoadingSeedling /> :
                <SeedlingPresentationTipe1 selectedData={selectedData} t={t}/>
            }
        </div>
    )
}

export default SeedlingPresent