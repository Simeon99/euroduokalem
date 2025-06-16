'use client'

import React, { useEffect, useState } from 'react'
import SeedlingPresent from './SeedlingPresent';
import LoadingSideBar from './ui/LoadingSideBar';
import { Translation } from '../[lang]/dictionaries';
import SeedlingPresentGrapevineRoses from './SeedlingPresentGrapevineRoses';


export interface FruitData {
    title: string;
    subvarietys: Subvariety[];
}
export interface FruitDataRoseGrapevine {
    title: string;
    subvarietys: SubvarietyRoseGrapevine[];
}

export interface Subvariety {
    subvariety: string;
    about: string;
    main?: string[];
    characteristics?: Characteristic[];
    url?: string;
    suggested?: number[];
}
export interface SubvarietyRoseGrapevine {
    name: string;
    about: string;
    subvarietys: SubSubvarietyRoseGrapevine[];
}
export interface SubSubvarietyRoseGrapevine {
    name: string;
    url: string;
}

export interface Characteristic {
    title: string;
    text: string;
}


const Seedling = ({ fruit, lang, t }: { fruit: string, lang: string, t: Translation }) => {

    // const { lang } = await params;
    // const fruit = fruitsData[params.seedling];
    const [fruitData, setFruitData] = useState<FruitData | null>(null);
    const [selectedData, setSelectedData] = useState<Subvariety | null>(null);
    const [selectedDataRosesGrapevine, setSelectedDataRosesGrapevine] = useState<SubvarietyRoseGrapevine | null>(null);
    const [fruitDataRosesGrapevine, setFruitDataRosesGrapevine] = useState<FruitDataRoseGrapevine | null>(null);
    const [selected, setSelected] = useState('');
    const [loadingSelected, setLoadingSelected] = useState(false);
    const [loading, setLoading] = useState<boolean | null>();
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
            setLoaded(loaded + 1);
        }
    }

    async function fetchSeedlingRosesGrapevine() {
        setLoading(true);
        try {
            const res = await fetch(`/api/seedlingGrapevineRoses?lang=${lang}&fruit=${fruit}`);
            const seedlings = await res.json();
        
            setFruitDataRosesGrapevine(seedlings);
            setSelectedDataRosesGrapevine(seedlings.subvarietys[0])
            setLoading(false);
        } catch (e) {
            console.error('Error fetching seedlings:', e);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        if (fruit && lang) {
            if (fruit !== "grapevine" && fruit !== "roses" ) {
                fetchSeedling();
            }
            else {
                fetchSeedlingRosesGrapevine();
            }
        }

    }, [fruit, lang]);

    useEffect(() => {
        if (selected && fruit && lang) {
            if (fruit !== "grapevine" && fruit !== "roses") {
                fetchSelected();
            }
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
                        <h2 className="text-6xl font-bold text-primary max-lsw:text-5xl max-md:text-4xl  font-heading px-4 max-md:px-0 py-4 line-clamp-non">{fruit === "grapevine" || fruit === "roses" ? fruitDataRosesGrapevine?.title : fruitData?.title}</h2>
                    </div>

            }
            {/* {fruitDataRosesGrapevine?.subvarietys.map(i =>
                <div key={i.name}>{i.name}</div>
            )}
            {fruit} */}
            {/* {/* Main Content */}
            {/* {fruit ==="grapevine" || fruit ==="roses" ? " " :} */}
            {
                selectedDataRosesGrapevine &&
                selectedDataRosesGrapevine && fruitDataRosesGrapevine && <SeedlingPresentGrapevineRoses selectedData={selectedDataRosesGrapevine} fruitData={fruitDataRosesGrapevine} setSelected={setSelectedDataRosesGrapevine} loading={loadingSelected} t={t} />
            }
            {
                selectedData &&
                selectedData && fruitData && <SeedlingPresent selectedData={selectedData} fruitData={fruitData} selected={selected} setSelected={setSelected} loading={loadingSelected} t={t} />
            }
        </div >
    );
}

export default Seedling