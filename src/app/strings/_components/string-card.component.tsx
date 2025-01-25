import { Progress} from "flowbite-react";
import {RatingStarComponent} from "@/src/components/rating-star.component";
import {RacketString} from "@/src/types/racket-string.type";
import CardComponent from "@/src/components/card.component";

export type CardComponentProps = {
    string: RacketString
}

export function StringCardComponent({string}: CardComponentProps) {
    return (
        <CardComponent
            className="max-w-sm"
            redirectUrl=""
            imgAlt={string.productImage?.title ?? ""}
            imgSrc={string.productImage?.url ?? ""}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center justify-between">
                {string.modelName}
                <img src={string.brand?.brandImageSmall?.url ?? ""} className="w-8 ml-2" alt="Brand Logo"/>
            </h5>
            <p>Gauge: {string.gaugeMeasurement}mm</p>
            <Progress
                progress={string.durabiltyRank * 10}
                progressLabelPosition="outside"
                textLabel="Durability"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
            />
            <Progress
                progress={string.repulsionRank * 10}
                progressLabelPosition="outside"
                textLabel="Repulsion"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
            />
            <Progress
                progress={string.controlRank * 10}
                progressLabelPosition="outside"
                textLabel="Control"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
            />
            <Progress
                progress={string.shockAbsorptionRank * 10}
                progressLabelPosition="outside"
                textLabel="Shock absorption"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
            />
            <Progress
                progress={string.hittingSoundRank * 10}
                progressLabelPosition="outside"
                textLabel="Hitting Sound"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
            />
            <RatingStarComponent label="Popularity" rating={string.popularityLevel} ></RatingStarComponent>
        </CardComponent>
    )
}
