'use client'

import React, { useEffect, useState } from 'react'
import { Translation } from '../[lang]/dictionaries';
import Loading from './ui/Loading';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";

type Seedling = {
    id: number;
    name: string;
    description: string[];
    url: string;
    imageUrl: string;
};

const Seedlings = ({ lang, t }: { lang: string, t: Translation }) => {
    const [data, setData] = useState<Seedling[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch(`/api/seedlings?lang=${lang}`);
            const seedlings = await res.json();
            setData(seedlings);
        } catch (e) {
            console.error('Error fetching seedlings:', e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [lang]);

    const filteredSeedlings = data.filter(seedling =>
        seedling.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        seedling.description.some(desc =>
            desc.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className='mb-[160px]'>
            <h1 className='font-heading text-6xl text-primary py-8 max-lsw:text-5xl max-md:text-4xl font-bold line'>
                {t.seedlings.title}
            </h1>

            {/* Search input */}
            <div className="relative w-full max-w-md mb-8">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primray" size={20} />
                <input
                    type="text"
                    placeholder={ "Pretraži sadnice..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E3A27] text-lg"
                />
            </div>

            {loading ? (
                <div className='grid grid-cols-4 gap-8'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index}>
                            <Loading />
                        </div>
                    ))}
                </div>
            ) : (
                <div className='grid grid-cols-4 max-sw:grid-cols-3 max-lsw:grid-cols-2 max-ssw:grid-cols-1 gap-8'>
                    {filteredSeedlings.length === 0 ? (
                        <p className='text-gray-500 text-xl col-span-full text-center'>
                            {"Nema rezultata za uneti pojam."}
                        </p>
                    ) : (
                        filteredSeedlings.map(seedling => (
                            <div key={seedling.id} className='flex flex-col justify-between rounded-2xl bg-white h-[450px] shadow-md'>
                                <div className='flex flex-col'>
                                    <Image
                                        src={'/images/seedlings' + seedling.imageUrl[1]}
                                        alt={seedling.name}
                                        width={200}
                                        height={48}
                                        className="w-full h-[250px] rounded-t-2xl object-cover"
                                    />
                                    <div className="px-2 pb-2 rounded-b-2xl text-primary">
                                        <h2 className="text-xl font-semibold font-heading text-[30px]">{seedling.name}</h2>
                                        {seedling.description.map((desc, index) => (
                                            <span key={index} className='flex flex-row items-center gap-2'><GoDotFill />{desc}</span>
                                        ))}
                                    </div>
                                </div>
                                <button className='w-full h-[60px] bg-primary rounded-b-2xl text-secondary-light text-[20px] hover:cursor-pointer hover:bg-[#D7740A] transform duration-300'>
                                    Saznaj više
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Seedlings;
