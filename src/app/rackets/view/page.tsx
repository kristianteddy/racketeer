import {getRacket, getRackets} from "@/src/services/racket-service";
import {RacketCardComponent} from "@/src/app/rackets/_components/racket-card.component";
import RacketFiltersComponent from "@/src/app/rackets/_components/racket-filters.component";
import {getBrands} from "@/src/services/brand-service";
import {useSearchParams} from "next/navigation";
import RichTextRenderer from "@/src/components/contentful-richtext-renderer.component";
import {RacketCardStatsComponent} from "@/src/app/rackets/_components/racket-card-stats.component";
import BoxComponent from "@/src/components/box.component";

export type RacketSearchParams = {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Page({searchParams}: RacketSearchParams) {
    const {racketId, sortBy} = await searchParams
    const racket = await getRacket(racketId ?? "")
    return (
        <>
            <div className="mb-4 grid grid-cols-12 gap-2">
                <div className="flex items-center">
                    <a href="/rackets"
                        className="hover-gray-300 flex items-center rounded bg-gray-200 px-4 py-2 font-bold text-gray-800 shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             className="mr-2 size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 19l-7-7 7-7"/>
                        </svg>
                        Back
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-2">

                <BoxComponent className="col-span-6">
                    <h2 className="mb-2 flex items-center justify-between text-2xl font-bold">

                        {racket.modelName}
                        <img src={racket.brand.brandImageFull?.url ?? ""} className="mr-2 w-20"/>
                    </h2>
                    <div className="mb-4">
                        <div className="flex">
                            <div className="flex-1 p-2 pl-0"><strong>Manufacturer</strong></div>
                            <div className="flex-1 p-2 pl-0">
                                {
                                    `${racket.brand.brandFullName} (${racket.racketDetails.manufacturingCountry})`
                                }
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-1 p-2 pl-0"><strong>Available grip sizes</strong></div>
                            <div className="flex-1 p-2 pl-0">
                                <ul>
                                    {
                                        racket.racketDetails.gripSizes.map((value, index) => (

                                            <li key={index}>{value}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-1 p-2 pl-0"><strong>Maximum string tensions</strong></div>
                            <div className="flex-1 p-2 pl-0">
                                <ul>
                                    {
                                        racket.racketDetails.maximumStringTensions.map((value, index) => (

                                            <li key={index}>{value}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-1 p-2 pl-0"><strong>Frame material</strong></div>
                            <div className="flex-1 p-2 pl-0">
                                {
                                    racket.racketDetails.frameMaterial
                                }
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-1 p-2 pl-0"><strong>Shaft material</strong></div>
                            <div className="flex-1 p-2 pl-0">
                                {
                                    racket.racketDetails.shaftMaterial
                                }
                            </div>
                        </div>
                    </div>
                    <RacketCardStatsComponent racket={racket}></RacketCardStatsComponent>
                </BoxComponent>
                <BoxComponent
                    className="col-span-6 flex flex-col rounded-md border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <img src={racket.image?.url ?? ""} className="w-full m-auto"/>

                </BoxComponent>
                <BoxComponent className="col-span-12">
                    <RichTextRenderer richTextDocument={racket.racketDetails.description}></RichTextRenderer>
                    <small className="mt-4 text-gray-500">(Source: <a href={racket.racketDetails.informationSource}>{racket.racketDetails.informationSource})</a></small>
                </BoxComponent>
            </div>
        </>
    );
}
