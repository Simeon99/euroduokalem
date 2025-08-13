'use client';

import React, { useMemo, useState, useEffect } from 'react';
import countries from 'country-calling-code';

const withPlus = (s: string) => (s.startsWith('+') ? s : `+${s}`);

const CountryCodeSelector = ({ onSelect }: { onSelect: (code: string) => void }) => {
    const list = useMemo(
        () =>
            countries
                .map(c => ({
                    name: c.country,
                    iso: c.isoCode2,
                    code: withPlus(c.countryCodes[0] || '')
                }))
                .sort((a, b) => a.name.localeCompare(b.name)),
        []
    );

    const defaultCountry = list.find(c => c.iso === 'RS') || list[0];
    const [selected, setSelected] = useState(defaultCountry);

    // Kada se komponenta mountuje, pošalji default code u Contact
    useEffect(() => {
        if (selected) {
            onSelect(selected.code);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const iso = e.target.value;
        const sel = list.find(c => c.iso === iso);
        if (!sel) return;
        setSelected(sel);
        onSelect(sel.code);
    };

    return (
        <div className="relative inline-block w-64 max-ssw:w-[70%]">
            <select
                value={selected?.iso}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 focus:border-[#0E3A27] bg-transparent text-gray-900 placeholder-transparent focus:outline-none transition"
            >
                {list.map(c => (
                    <option key={c.iso} value={c.iso}>
                        {c.name} ({c.code})
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountryCodeSelector;
