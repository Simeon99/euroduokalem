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
    suggested?: number[];
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
    // const [selectedData, setSelectedData] = useState<Subvariety | null>(null);
    const [selectedDataRosesGrapevine, setSelectedDataRosesGrapevine] = useState<SubvarietyRoseGrapevine | null>(null);
    const [fruitDataRosesGrapevine, setFruitDataRosesGrapevine] = useState<FruitDataRoseGrapevine | null>(null);
    const [selected, setSelected] = useState<Subvariety | null>(null);
    const [loading, setLoading] = useState<boolean | null>();

    async function fetchSeedling() {
        setLoading(true);
        try {
            const res = await fetch(`/api/seedling?lang=${lang}&fruit=${fruit}`);
            const seedlings = await res.json();
            setFruitData(seedlings);
            setSelected(seedlings.subvarietys[0])
            
        } catch (e) {
            console.error('Error fetching seedlings:', e);
            
        } finally {
            setLoading(false);
        }
    }

    // async function fetchSelected() {
    //     setLoadingSelected(true);
    //     try {
    //         const res = await fetch(`/api/seedling?lang=${lang}&fruit=${fruit}&subvariety=${selected}`);
    //         const seedling = await res.json();
    //         setSelectedData(seedling);
    //         setLoadingSelected(false);
    //     } catch (e) {
    //         console.error('Error fetching seedlings:', e);
    //         setLoadingSelected(false);
    //     } finally {
    //         setLoadingSelected(false);
    //         setLoaded(loaded + 1);
    //     }
    // }

    async function fetchSeedlingRosesGrapevine() {
        setLoading(true);
        try {
            const res = await fetch(`/api/seedlingGrapevineRoses?lang=${lang}&fruit=${fruit}`);
            const seedlings = await res.json();

            setFruitDataRosesGrapevine(seedlings);
            setSelectedDataRosesGrapevine(seedlings.subvarietys[0])
            
        } catch (e) {
            console.error('Error fetching seedlings:', e);
            
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        if (fruit && lang) {
            if (fruit !== "grapevine" && fruit !== "roses") {
                fetchSeedling();
            }
            else {
                fetchSeedlingRosesGrapevine();
            }
        }
        window.scrollTo({ top: 0 });

    }, [fruit, lang]);

    // useEffect(() => {
    //     if (selected && fruit && lang) {
    //         if (fruit !== "grapevine" && fruit !== "roses") {
    //             // fetchSelected();
    //         }
    //     }
    // }, [selected, fruit, lang])

    // if (!fruit) return <div>Fruit not found</div>;

    // const subspecies = fruit.subspecies;
    // const active = subspecies[selected];


    return (
        <div className="flex flex-col  mt-4 h-full">
            {/* Sidebar */}
            {
                (loading) ?
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
                selected &&
                selected && fruitData && <SeedlingPresent selectedData={selected} fruitData={fruitData}  setSelected={setSelected} t={t} />
            }
            {
                selectedDataRosesGrapevine &&
                selectedDataRosesGrapevine && fruitDataRosesGrapevine && <SeedlingPresentGrapevineRoses selectedData={selectedDataRosesGrapevine} fruitData={fruitDataRosesGrapevine} setSelected={setSelectedDataRosesGrapevine}  t={t} />
            }
        </div >
    );
}

export default Seedling