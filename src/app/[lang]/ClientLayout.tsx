'use client'

import { LoadingBarContainer } from 'react-top-loading-bar'
import { Translation } from '@/app/[lang]/dictionaries'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NavbarProvider from '../context/NavbarContext'

export default function ClientLayout({
  children,
  t,
}: {
  children: React.ReactNode
  t: Translation
}) {
  return (
    <LoadingBarContainer>
      <NavbarProvider>
        <Navbar t={t} />
        {children}
        <Footer t={t} />
      </NavbarProvider>
    </LoadingBarContainer>
  )
}
 