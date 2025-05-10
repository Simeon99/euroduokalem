'use state'

import { IBlogPost } from '@/pages/api/blogPosts';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import BlogSuggested from './BlogSuggested';

const BlogPost = ({ blogId }: { blogId: number }) => {

    const params = useParams();
    const lang = params?.lang as string;

    const [blogPost, setBlogPost] = useState<IBlogPost | null>();

    async function fetchBlogPost() {

        try {
            const res = await fetch(`/api/blogPost?id=${blogId}&lang=${lang}`);
            const blogPostRes = await res.json();
            setBlogPost(blogPostRes);
            console.log(blogPost)
        } catch (e) {
            console.log("Error: ", e)
        }
        finally {

        }


    }

    useEffect(() => {
        fetchBlogPost();
    }, [])

    const markdown = `
# 🌳 11 stvari koje bi trebalo da znate o sađenju voćnih sadnica

Sadnja voćnih sadnica je **prvi korak ka zdravom i plodonosnom voćnjaku**.  
Bilo da ste hobi baštovan ili ozbiljan proizvođač, **pravilna priprema i sadnja** čine ogromnu razliku.

---

### 1️⃣ **Izaberite pravu sortu za svoje područje**  
Nisu sve sadnice pogodne za svaku klimu. Informišite se koje sorte najbolje uspevaju u vašem regionu.

### 2️⃣ **Proverite kvalitet sadnice**  
Sadnica treba da ima zdrav koren, čvrsto stablo i da ne pokazuje znake bolesti.

### 3️⃣ **Pripremite zemljište**  
Zemljište mora biti rastresito i bogato hranljivim materijama. Po potrebi uradite analizu pH vrednosti.

### 4️⃣ **Poštujte razmak sadnje**  
Pravilni razmaci obezbeđuju zdrav razvoj korena i krošnje.

### 5️⃣ **Sadite u odgovarajuće vreme**  
Najbolje vreme za sadnju je jesen ili rano proleće.

### 6️⃣ **Potopite koren u glinenu kašu pre sadnje**  
Ova praksa poboljšava prijem korena u zemljištu.

### 7️⃣ **Iskopajte rupu dovoljne veličine**  
Rupa treba da bude veća od korenovog sistema kako se koren ne bi savijao.

### 8️⃣ **Ne zatrpavajte mesto kalemljenja**  
Kalem mesto mora ostati iznad površine tla.

### 9️⃣ **Obavezno zalivanje nakon sadnje**  
Voda pomaže da se zemlja slegne i obavije koren.

### 🔟 **Postavite potporni kolac**  
Kolac pruža stabilnost sadnici u vetrovitim danima.

### 🔁 **Redovna nega sadnice**  
Zalivanje, đubrenje i zaštita od štetočina su ključni za uspešan razvoj.

---

> 💡 **Ukoliko planirate da zasadite svoj voćnjak**, ove smernice će vam pomoći da izbegnete greške i postignete bogat rod.  
> Za **kvalitetne sadnice i stručne savete**, obratite nam se s poverenjem!


`;

    return (
        <div className='flex flex-col gap-16 py-36'>
            <div>
                <h1 className='font-heading text-6xl text-primary text-center  max-lsw:text-5xl max-md:text-4xl font-bold line'>
                    11 Stvari koje bi trebalo da znate o sadjenju vocnih sadnica
                </h1>
            </div>
            <div className='flex flex-col items-center gap-16'>
                {/* <div className='relative w-[80%] max-lsw:hidden h-[500px]'>
                    <Image
                        src={`/images/seedling/ajdared.jpg`}
                        alt={'apple'}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div> */}
                <div className='w-[80%] max-md:w-full'>
                    <Image
                        src={`/images/seedling/ajdared.jpg`}
                        alt={'apple'}
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover w-full h-auto"
                    />

                </div>
                <ReactMarkdown
                    components={{
                        p: ({  ...props }) => (
                            <p
                                className="text-[24px] max-md:text-[20px] max-md:max-w-full mb-4 leading-relaxed"
                                {...props}
                            />
                        ),
                        h1: ({  ...props }) => (
                            <h3
                                className="text-[28px] max-md:text-[22px] font-semibold mt-8 mb-4"
                                {...props}
                            />
                        ),
                        h3: ({  ...props }) => (
                            <h3
                                className="text-[28px] max-md:text-[22px] font-semibold mt-8 mb-4"
                                {...props}
                            />
                        ),
                        h2: ({  ...props }) => (
                            <h2
                                className="text-[32px] max-md:text-[24px] font-bold mt-10 mb-5"
                                {...props}
                            />
                        ),
                    }}
                >
                    {markdown}
                </ReactMarkdown>
                {/* <p className='text-justify text-[24px] max-md:text-[20px] max-md:max-w-full'>
                    Sadnja voćnih sadnica zahteva pažljivu pripremu i razumevanje osnovnih koraka kako bi se obezbedio zdrav i dugovečan zasad. Prvi i najvažniji korak je izbor sorte koja odgovara klimatskim uslovima vašeg regiona. Sorte koje nisu prilagođene lokalnim uslovima često ne daju očekivane prinose i zahtevaju dodatnu negu.
                    Pre sadnje, zemljište mora biti pripremljeno – to znači dobro usitnjeno, đubreno i po potrebi korigovano u pogledu kiselosti (pH vrednosti). Analiza zemljišta može vam uštedeti vreme i novac jer ćete tačno znati koje elemente treba dodati za optimalan rast biljaka.
                    Prilikom same sadnje, veoma je važno da mesto kalemljenja ostane iznad zemlje, jer njegovo zatrpavanje može dovesti do truljenja ili razvoja neželjenih izdanaka. Takođe, zalivanje odmah nakon sadnje pomaže da se zemlja slegne i da koren uspostavi dobar kontakt sa tlom.
                    Ne zaboravite na redovno orezivanje i zaštitu od bolesti, jer samo zdrava biljka može dati kvalitetan plod. Uz malo znanja i prave savete, vaš voćnjak može postati ne samo izvor ponosa, već i odličan izvor prinosa.
                </p> */}
                <div className='w-full'>

                <BlogSuggested />
                </div>
            </div>
        </div>
    )
}

export default BlogPost