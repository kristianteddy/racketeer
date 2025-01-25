import {Image} from "@/src/types/image.type";
import {Brand} from "@/src/types/brand.type";

export type RacketString = {
    _id: string
    modelName: string
    repulsionRank: number
    durabiltyRank: number
    shockAbsorptionRank: number
    hittingSoundRank: number
    controlRank: number
    gaugeMeasurement: number
    coreMaterial: string
    outerMaterial: string
    popularityLevel: number
    brand: Brand
    productImage: Image
}
