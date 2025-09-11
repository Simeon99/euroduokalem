'use client'

import React from 'react'

import { LuSearchCheck } from 'react-icons/lu';
import { PiPackageDuotone, PiPlantDuotone } from 'react-icons/pi';
import { motion, useReducedMotion } from "framer-motion";
import { TbTruck } from 'react-icons/tb';
import { Translation } from '../[lang]/dictionaries';

const SeedlingsPath = ({ t }: { t: Translation }) => {


    const prefersReducedMotion = useReducedMotion();

    const steps = [
        {
            title: t.aboutUs.seedlingsPath.cards[0].title,
            icon: <PiPlantDuotone className="w-8 h-8 text-green-600" aria-hidden />,
            desc:
                t.aboutUs.seedlingsPath.cards[0].text,
        },
        {
            title: t.aboutUs.seedlingsPath.cards[1].title,
            icon: <LuSearchCheck className="w-8 h-8 text-blue-600" aria-hidden />,
            desc:
                t.aboutUs.seedlingsPath.cards[1].text,
        },
        {
            title: t.aboutUs.seedlingsPath.cards[2].title,
            icon: <PiPackageDuotone className="w-8 h-8 text-orange-600" aria-hidden />,
            desc:
                t.aboutUs.seedlingsPath.cards[2].text,
        },
        {
            title: t.aboutUs.seedlingsPath.cards[3].title,
            icon: <TbTruck className="w-8 h-8 text-red-600" aria-hidden />,
            desc:
                t.aboutUs.seedlingsPath.cards[3].text,
        },
    ];
    return (
        <section
            className="py-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-br "
            aria-labelledby="how-we-work"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    id="how-we-work"
                    className="text-3xl sm:text-4xl font-bold text-primary  mb-10"
                >
                    {t.aboutUs.seedlingsPath.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: i * 0.15 }}
                            className="flex flex-col items-center text-center bg-white 
                         rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300
                         border border-gray-100 "
                            role="group"
                            aria-label={step.title}
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 ">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-600  mt-2">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SeedlingsPath