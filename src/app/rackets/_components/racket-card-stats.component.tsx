import { Progress} from "flowbite-react";
import {RatingStarComponent} from "@/src/components/rating-star.component";
import RatingDollarComponent from "@/src/components/rating-dollar.component";
import {Racket} from "@/src/types/racket.type";

export type RacketCardStatsComponentProps = {
    racket: Racket
    className?: string
}

export function RacketCardStatsComponent({racket, className}: RacketCardStatsComponentProps) {
    const isHeadHeavy = racket.headHeavinessRank > racket.headLightnessRank
    const isStiff = racket.stifnessRank > racket.flexibilityRank
    return (
        <div className={`mt-auto ${className ?? ""}`}>
            <Progress
                progress={(isHeadHeavy ? racket.headHeavinessRank : (racket.headHeavinessRank - 1)) * 5}
                progressLabelPosition="outside"
                textLabel="Head heavy"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-2"
            />
            <Progress
                progress={(isHeadHeavy ? (racket.headLightnessRank - 1) : racket.headLightnessRank) * 5}
                progressLabelPosition="outside"
                textLabel="Head light"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-2"
            />
            <Progress
                progress={(isStiff ? (racket.flexibilityRank - 1) : racket.flexibilityRank) * 5}
                progressLabelPosition="outside"
                textLabel="Flexible"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-2"
            />
            <Progress
                progress={(isStiff ? racket.stifnessRank : (racket.stifnessRank - 1)) * 5}
                progressLabelPosition="outside"
                textLabel="Stiff"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-2"
            />
            <div className="mt-3">
            <RatingStarComponent label="Playing level" rating={racket.playingLevel} ></RatingStarComponent>
            <RatingDollarComponent rating={racket.priceRank}></RatingDollarComponent>
            </div>
        </div>
    )
}
