'use client'

import { ISuggestedFruit } from '@/pages/api/suggestedSeedlings';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { GoDotFill } from 'react-icons/go';
import seedlingsData from "@/data/seedlings.json"

const SeedlingSuggested = ({ frutiName }: { frutiName: string, }) => {

    const seedlingId = seedlingsData.seedlings.filter(s =>
        Object.values(s.name).some(value =>
            value.toLowerCase() === frutiName.toLowerCase()
        )
    )
        .map(s => s.id);

    const params = useParams();
    const lang = params?.lang as string;

    const [suggested, setSuggested] = useState<ISuggestedFruit[] | null>();

    async function fetchBlogPost() {
        const suggestRandom = generateRandom(1, 19, seedlingId[0]);

        try {
            const res = await fetch(`/api/suggestedSeedlings?lang=${lang}&fruitIds=${suggestRandom[0]},${suggestRandom[1]},${suggestRandom[2]}`);
            const suggestedRes = await res.json();
            setSuggested(suggestedRes);
            console.log(suggested)
        } catch (e) {
            console.log("Error: ", e)
        }
        finally {

        }


    }

    function generateRandom(from: number, to: number, exclude: number) {
        const numbers: number[] = []

        while (numbers.length < 4) {
            const rand = Math.floor(Math.random() * (to - from + 1)) + from;
            if (rand !== exclude && !numbers.includes(rand)) {
                numbers.push(rand);
            }
        }
        return numbers;
    }

    useEffect(() => {
        fetchBlogPost();
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {suggested && suggested?.map((i) =>
                <Link
                    key={i.id}
                    href={i.url}
                    className="hover:scale-101 transform   block rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-secondary-light"
                >
                    <Image
                        src={'/images/seedlings' + i.imageUrl}
                        alt={i.name}
                        width={200}
                        height={48}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-primary mb-2">{i.name}</h3>
                        {i.description.map((desc, index) => (
                            <div key={index} className='flex flex-row items-baseline gap-2'>
                                <GoDotFill className='' />
                                <span className='flex-1'>{desc}</span>
                            </div>
                        ))}
                        {/* <p className="text-gray-600 text-sm line-clamp-3">{i.description}</p> */}
                    </div>
                </Link>

            )}
        </div>
    )
}

export default SeedlingSuggested