import {getRackets} from "@/src/services/racket-service";
import {RacketCardComponent} from "@/src/app/rackets/_components/racket-card.component";
import RacketFiltersComponent from "@/src/app/rackets/_components/racket-filters.component";
import {getBrands} from "@/src/services/brand-service";

export type RacketSearchParams = {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Page({searchParams}: RacketSearchParams) {
    const allRackets = await getRackets();
    const allBrands = await getBrands().then((x) => x.map(y => y.brandName));

    const {brand, sortBy, query} = await searchParams

    const rackets = allRackets
        .filter(x => x.brand.brandName.includes(brand ?? ""))
        .filter(x => x.modelName.toLowerCase().includes(query?.toLowerCase() ?? ""))
        .sort((a, b) => {
            switch (sortBy) {
                case "HL":
                    return b.headLightnessRank - a.headLightnessRank
                case "HH":
                    return b.headHeavinessRank - a.headHeavinessRank
                case "STIFF":
                    return b.stifnessRank - a.stifnessRank
                case "FLEX":
                    return b.flexibilityRank - a.flexibilityRank
                default:
                    return 0
            }
        })

    return (
        <>
            <div className="flex w-full justify-items-center p-4">
                <RacketFiltersComponent allBrands={allBrands}/>
            </div>
            <ul className="grid w-full justify-items-center grid-cols-1 p-4 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {rackets.map((racket, index) => (
                    <li key={index} className="flex justify-center">
                        <RacketCardComponent racket={racket}/>
                    </li>
                ))}
            </ul>
        </>
    );
}
