import {Image} from "@/src/types/image.type";

export type Brand = {
    brandName: string
    brandFullName?: string
    brandImageSmall: Image | null
    brandImageFull?: Image | null
}
