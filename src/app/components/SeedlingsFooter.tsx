import React from 'react'
import { Translation } from '../[lang]/dictionaries';

const SeedlingsFooter = ({ t }: { t: Translation }) => {

    return (
        <div className='pb-36'>
            <h2 className='font-heading text-6xl text-primary  py-8 max-lsw:text-5xl max-md:text-4xl font-bold line'>{t.seedlings.footer.title}</h2>
            {t.seedlings.footer.texts.map((para, index) => (
                <p
                    key={index}
                    className="text-[24px] max-md:text-[20px] text-justify"
                    dangerouslySetInnerHTML={{ __html: para }}
                />
            ))}
        </div>
    );
}

export default SeedlingsFooter