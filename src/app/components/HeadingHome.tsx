import React from 'react'
import ImageCarousel from './ui/ImageCarousel'

const HeadingHome = () => {
    return (
        <div className='bg-secondary-light flex justify-center'>
            <div className='max-w-screen-sw  w-full'>
            <div className='flex flex-col gap-[32px] items-center pt-[140px] max-md:pt-[96px] px-[16px]'>
                <h1 className='font-heading text-6xl text-primary  py-8 max-lsw:text-5xl max-md:text-4xl font-bold text-center line'>Na temelju tradicije za <br /> uspešnu budućnost</h1>
                <p className='text-center text-[24px] max-md:text-[20px] max-w-[70%] max-md:max-w-full'>
                    Zemljoradnička zadruga “Euro duo kalem” nastala je na temeljima
                    višedecenijske tradicije uzgoja sadnog materijala. Primarna delatnost
                    je proizvodnja voćnih sadnica, loznih kalemova i sadnica ruža. Proizvodnju
                    bezvirusnih sadnica, ostvarujemo pomoću povoljnih klimatskih uslova, primenom
                    savremene tehnologije i konstantnom saradnjom sa vodećim institutima iz Srbije
                    i drugih zemalja. Savremeni dizajn i vrhunski kvalitet naših proizvoda prepoznatljiv
                    je i u mnogim zemljama Evrope i Azije. Pridružite nam se na našem putu ka plodnoj
                    budućnosti.
                </p>
            </div>
            <div className=' mt-[140px] pb-[70px]'>
                <ImageCarousel />
            </div>
            </div>
        </div>
    )
}

export default HeadingHome