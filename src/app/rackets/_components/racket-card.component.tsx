import {Card, Progress} from "flowbite-react";
import {RatingStarComponent} from "@/src/components/rating-star.component";
import RatingDollarComponent from "@/src/components/rating-dollar.component";
import {Racket} from "@/src/types/racket.type";
import CardComponent from "@/src/components/card.component";
import {RacketCardStatsComponent} from "@/src/app/rackets/_components/racket-card-stats.component";

export type CardComponentProps = {
    racket: Racket
}

export function RacketCardComponent({racket}: CardComponentProps) {
    return (
        <CardComponent
            redirectUrl={`rackets/view?racketId=${racket.sys.id}`}
            imgAlt={racket.image?.fileName ?? ""}
            imgSrc={racket.image?.url ?? ""}
        >
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center justify-between">
                {racket.modelName}
                <img src={racket.brand?.brandImageSmall?.url ?? ""} className="w-8 ml-2" alt="Brand Logo"/>
            </h2>
            <p>{racket.productionYear}</p>

          <RacketCardStatsComponent racket={racket}></RacketCardStatsComponent>
        </CardComponent>
    )
}
