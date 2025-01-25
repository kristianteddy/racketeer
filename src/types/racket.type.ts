import {Brand} from "@/src/types/brand.type";
import {Image} from "@/src/types/image.type";
import {RacketDetails} from "@/src/types/racket-details.type";

export type Racket = {
    sys: {
        id: string
    }
    modelName: string
    productionYear: number
    stifnessRank: number
    flexibilityRank: number
    headHeavinessRank: number
    headLightnessRank: number
    priceRank: number
    playingLevel: number
    versions: Racket[]
    brand: Brand
    image: Image | null
    racketDetails: RacketDetails
}
