// services/posts-service.ts
import { fetchContentfulGraphQL } from './contentful-client';
import {RacketString} from "@/src/types/racket-string.type";

export const getRacketStrings = async (): Promise<RacketString[]> => {
    const query = `
       query RacketStringCollection {
            racketStringCollection {
                items {
                    _id
                    modelName
                    repulsionRank
                    durabiltyRank
                    shockAbsorptionRank
                    hittingSoundRank
                    controlRank
                    gaugeMeasurement
                    coreMaterial
                    outerMaterial
                    popularityLevel
                    brand {
                        _id
                        brandName
                        brandImageSmall {
                            title
                            url
                        }
                    }
                    productImage {
                        title
                        url
                    }
                }
            }
        }

  `;

    const data = await fetchContentfulGraphQL<{ racketStringCollection: { items: RacketString[] } }>(query);
    return data.racketStringCollection.items;
};
