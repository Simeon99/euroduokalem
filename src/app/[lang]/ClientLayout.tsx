'use client'

import { LoadingBarContainer } from 'react-top-loading-bar'
import { Translation } from '@/app/[lang]/dictionaries'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ClientLayout({
  children,
  t,
}: {
  children: React.ReactNode
  t: Translation
}) {
  return (
    <LoadingBarContainer>
      <Navbar t={t} />
      {children}
      <Footer t={t} />
    </LoadingBarContainer>
  )
}
