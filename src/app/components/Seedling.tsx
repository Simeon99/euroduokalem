'use client'

import React, { useEffect, useState } from 'react'
import SeedlingPresent from './SeedlingPresent';
import LoadingSideBar from './ui/LoadingSideBar';


export interface FruitData {
    title: string;
    subvarietys: Subvariety[];
}

export interface Subvariety {
    subvariety: string;
    about: string;
    main?: string[];
    characteristics?: Characteristic[];
    url?: string;
}

export interface Characteristic {
    title: string;
    text: string;
}


const Seedling = ({ fruit, lang }: { fruit: string, lang: string }) => {

    // const { lang } = await params;
    // const fruit = fruitsData[params.seedling];
    const [fruitData, setFruitData] = useState<FruitData | null>(null);
    const [selectedData, setSelectedData] = useState<Subvariety | null>(null);
    const [selected, setSelected] = useState('');
    const [loadingSelected, setLoadingSelected] = useState(true);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(0)

    async function fetchSeedling() {
        setLoading(true);
        try {
            const res = await fetch(`/api/seedling?lang=${lang}&fruit=${fruit}`);
            const seedlings = await res.json();
            setFruitData(seedlings);
            setSelected(seedlings.subvarietys[0].subvariety)
            setLoading(false);
        } catch (e) {
            console.error('Error fetching seedlings:', e);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    async function fetchSelected() {
        setLoadingSelected(true);
        try {
            const res = await fetch(`/api/seedling?lang=${lang}&fruit=${fruit}&subvariety=${selected}`);
            const seedling = await res.json();
            setSelectedData(seedling);
            setLoadingSelected(false);
        } catch (e) {
            console.error('Error fetching seedlings:', e);
            setLoadingSelected(false);
        } finally {
            setLoadingSelected(false);
            setLoaded(loaded+1);
        }
    }

    useEffect(() => {
        if (fruit && lang) {
            fetchSeedling();
        }

    }, [fruit, lang]);

    useEffect(() => {
        if (selected && fruit && lang) {
            fetchSelected();
        }
    }, [selected, fruit, lang])
    // if (!fruit) return <div>Fruit not found</div>;

    // const subspecies = fruit.subspecies;
    // const active = subspecies[selected];


    return (
        <div className="flex flex-col  mt-4 h-full">
            {/* Sidebar */}
            {
                 (loading || loadingSelected) && loaded < 1 ?
                    <LoadingSideBar /> :

                    <div className='bg-none'>
                        <h2 className="text-6xl font-bold text-primary max-lsw:text-5xl max-md:text-4xl  font-heading px-4 max-md:px-0 py-4 line-clamp-non">{fruitData?.title}</h2>

                    </div>

            }


            {/* {selectedData?.subvariety} */}

            {/* {/* Main Content */}
            {
                selectedData && 
                    selectedData && fruitData && <SeedlingPresent selectedData={selectedData} fruitData={fruitData} selected={selected} setSelected={setSelected} loading={loadingSelected} />
                // <main className="flex-1 p-6">
                //     <div className='flex flex-col'>
                //         <div className='flex flex-row gap-8'>
                //             <div className='w-1/2'>
                //                 <Image
                //                     src={`/images/seedlings/${selectedData?.url}` || ''}
                //                     alt={selectedData?.subvariety || ''}
                //                     width={600}
                //                     height={400}
                //                     className="rounded-lg mb-4 object-cover w-full max-w-[600px]"
                //                 />

                //             </div>
                //             <div className='w-1/2'>
                //                 <h1 className="text-3xl font-bold mb-4">{selectedData?.subvariety} {selectedData?.url}</h1>
                //                 <p className="text-lg text-gray-700">{selectedData?.about}</p>
                //             </div>

                //         </div>

                //     </div>
                // </main>
            }

        </div >
    );
}

export default Seedling