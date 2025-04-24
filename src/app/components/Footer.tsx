
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Translation } from '../[lang]/dictionaries'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useNavbar } from '../context/NavbarContext'

const Footer = ({ t }: { t: Translation }) => {

  const params = useParams();
  const lang = params?.lang as string;

  const { scrollTo } = useNavbar();
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (section: string) => {
    if (pathname === `/${lang}`) {
      scrollTo(section);
    } else {
      router.push(`/?scrollTo=${section}`);
    }
  };

  return (
    <div className='bg-primary flex justify-center h-full pt-8'>
      <div className='max-w-screen-sw h-[650px] max-md:h-[900px]  w-full relative'>
        <div className='px-4'>

          <Image
            src={'/images/home/logo-footer.svg'}
            alt={"Logo"}
            width={110}
            height={70}
          // className="w-[250px] h-[100px] object-cover"
          />
          <div
            className={`h-[2px] my-4 w-full bg-secondary`}
          />
          <div className='grid grid-cols-7 max-[1200px]:grid-cols-4 max-[1321px]:grid-cols-6 gap-4 max-md:grid-cols-2'>
            <div className='flex flex-col col-span-2 max-md:col-span-1 max-md:gap-y-4 z-50 max-md:pt-4'>
              <span className='font-light opacity-60 text-secondary-light text-[24px] max-md:text-[18px]  md:mb-4'>{t.footer.nav}</span>
              <Link href={`/${lang}/seedlings`} className='text-secondary-light hover:opacity-60'>
                <span className='font-heading font-bold  text-[24px] max-md:text-[18px] '>
                  {t.footer.seedlings}
                </span>
              </Link>
              <Link href={`/${lang}/about-us`} className='text-secondary-light hover:opacity-60'>
                <span className='font-heading font-bold text-secondary-light text-[24px] max-md:text-[18px] '>{t.footer.aboutUs}</span>
              </Link>
              <Link href={`/${lang}/blog`} className='text-secondary-light hover:opacity-60'>
                <span className='font-heading font-bold text-secondary-light text-[24px] max-md:text-[18px] '>{t.footer.blog}</span>
              </Link>
              <div
                onClick={() => {
                  handleScroll("contact")
                }} className='text-secondary-light hover:opacity-60'>
                <span className='font-heading font-bold text-secondary-light text-[24px] max-md:text-[18px] '>{t.footer.contactUs}</span>
              </div>
            </div>
            <div className='flex flex-col col-span-2 max-md:col-span-2  z-50 max-md:pt-4'>
              <div className='flex flex-col  max-md:gap-4'>
                <span className='font-light opacity-60 text-secondary-light text-[24px] max-md:text-[18px] md:mb-4'>{t.footer.contact}</span>
                {/* <Link href={' '} className='text-secondary-light hover:opacity-60'> */}
                <div className='flex flex-row items-center gap-4'>
                  <Image
                    src={'/images/home/mail-icon.svg'}
                    alt={"Instagram"}
                    width={30}
                    height={30}
                  />
                  <span className='font-heading font-bold text-secondary-light text-[24px] max-md:text-[18px] '>euroduokalem@yahoo.com</span>
                </div>
                {/* </Link> */}
                {/* <Link href={' '} className=''> */}
                <div className='flex flex-row items-center gap-4 text-secondary-light hover:opacity-60'>
                  <Image
                    src={'/images/home/phone-icon.svg'}
                    alt={"Phone"}
                    width={30}
                    height={30}
                  />
                  <a href="tel:+1234567890" className='font-heading font-bold text-secondary-light text-[24px] max-md:text-[18px] '>+381 63 684 953</a>
                </div>
                {/* </Link> */}

              </div>

            </div>
            <div className='flex flex-col col-span-2  max-md:gap-4 max-md:col-span-2 max-md:col-start-1 z-50 max-md:pt-4'>
              <span className='font-light opacity-60 text-secondary-light text-[24px] max-md:text-[18px] md:mb-4'>{t.footer.address}</span>

              <div className='flex flex-row items-center gap-4 text-secondary-light hover:opacity-60'>
                <Image
                  src={'/images/home/adress-icon.svg'}
                  alt={"Instagram"}
                  width={30}
                  height={30}
                />
                <a
                  href="https://www.google.com/maps/place/Euro+Duo+Kalem+Rasadnik/data=!4m2!3m1!1s0x0:0xb2577c11a9e5618d?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer" className='font-heading font-bold text-secondary-light text-[24px] max-md:text-[18px] '>{t.footer.addressOf}</a>
              </div>
            </div>
            <div className='flex flex-col items-baseline   max-md:pt-4 max-md:gap-4'>
              <span className='font-light opacity-60 text-secondary-light text-[24px] max-md:text-[18px] md:mb-4'>{t.footer.social}</span>
              <div className='flex flex-row items-baseline gap-4 z-50'>
                <a href={'https://www.instagram.com/euroduokalem/'} target="_blank" className='hover:opacity-60'>
                  <Image
                    src={'/images/home/instagram-icon.svg'}
                    alt={"Instagram"}

                    width={30}
                    height={30}
                  // className="w-full h-full object-cover"
                  />
                </a>
                <a href={'https://www.facebook.com/profile.php?id=61566524104473'} target="_blank" className=' hover:opacity-60'>
                  <Image
                    src={'/images/home/facebook-icon.svg'}
                    alt={"Facebook"}
                    width={30}
                    height={30}
                  // className="w-full h-full object-cover"
                  />
                </a>

              </div>
            </div>
          </div>
        </div>
        <div className='absolute md:top-0 max-md:bottom-0'>
          <Image
            src={'/images/home/logo-footer-loght.svg'}
            alt={"Logo"}
            width={200}
            height={200}
            className="w-full h-full object-cover "
          />
        </div>

      </div>
    </div>
  )
}

export default Footer