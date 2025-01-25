import { Document } from '@contentful/rich-text-types';
export type RacketDetails = {
    description: {
        json: Document
    }
    gripSizes: ReadonlyArray<string>
    maximumStringTensions: ReadonlyArray<string>
    frameMaterial: string
    shaftMaterial: string
    manufacturingCountry: string
    informationSource: string
}
