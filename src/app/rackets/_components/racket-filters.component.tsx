"use client";

import {ChangeEvent, useEffect, useState} from "react";
import {Dropdown, DropdownItem} from "flowbite-react";
import {useRouter, useSearchParams} from "next/navigation";
import * as querystring from "querystring";

export default function RacketFiltersComponent({allBrands}: { allBrands: string[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") || "");
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");
    const [query, setQuery] = useState(searchParams.get("sortBy") || "");

    // Update state if search params change
    useEffect(() => {
        setSelectedBrand(searchParams.get("brand") || "");
        setSortBy(searchParams.get("sortBy") || "");
        setQuery(searchParams.get("query") || "");
    }, [searchParams]);

    const handleParamChange = (param: string, value: string) => {
        const updatedParams = new URLSearchParams(searchParams.toString());
        updatedParams.set(param, value);

        // Update the URL with the new search parameters
        router.push(`/rackets?${updatedParams.toString()}`);
    };

    const handleSearchParamChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleParamChange("query", e.target.value);
    };
    const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleParamChange("brand", e.target.value);
    };

    const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleParamChange("sortBy", e.target.value);
    };

    return (
        <form className="grid  grid-cols-3 gap-2 w-full">
            <input type="text" placeholder="Search" onChange={handleSearchParamChange}
                   className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   defaultValue={query}/>
            <select onChange={handleBrandChange}
                    className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={selectedBrand}>
                <option value="">Brand</option>
                {allBrands.map((brandName, index) => (
                    <option className="select-option" key={index} value={brandName}>
                        {brandName}
                    </option>
                ))}
            </select>

            <select onChange={handleSortByChange}
                    className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={sortBy}>

                <option value="">Sort by</option>
                <option value="HH">Head-heavy</option>
                <option value="HL">Head-light</option>
                <option value="FLEX">Flexibility</option>
                <option value="STIFF">Stiffness</option>
            </select>
        </form>
    );
}
