"use client"
import React, {  useContext, createContext } from "react"

interface INavbarItem {
    scrollTo: (sectionId: string | '') => void;
}

const NavbarContext = createContext<INavbarItem | null>(null);

export default function NavbarProvider({ children }: { children: React.ReactNode }) {
    const scrollTo = (section: string) => {
            const s = document.getElementById(section);
            if (s) {
              s.scrollIntoView({ behavior: 'smooth' });
            }
      };
    return (
        <NavbarContext.Provider
            value={{
                scrollTo
            }}
        >
            {children}
        </NavbarContext.Provider>
    )
}

export const useNavbar = (): INavbarItem => {

    const context = useContext(NavbarContext);

    if (!context) {
        throw new Error("Calling useNavbar() must be within a NavbarProvider.");
    }
    return context;
}
