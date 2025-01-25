// services/posts-service.ts
import {fetchContentfulGraphQL} from './contentful-client';
import {Racket} from "@/src/types/racket.type";

export const getRacket = async (id: string): Promise<Racket> => {
    const query = `
        query Racket {
            racket(id: "${id}") {
                sys {
                    id
                }
                modelName
                productionYear
                stifnessRank
                flexibilityRank
                headHeavinessRank
                headLightnessRank
                priceRank
                playingLevel
                image {
                  title
                  url
                }
                racketDetails {
                    ... on RacketDetails {
                        description {
                            json
                        }
                        gripSizes
                        maximumStringTensions
                        frameMaterial
                        shaftMaterial
                        manufacturingCountry
                        informationSource
                    }
                }
                brand {
                    brandName
                    brandFullName
                    brandImageSmall {
                        title
                        url
                    }
                    brandImageFull {
                        title
                        url
                    }
                }
                versions: versionsCollection {
                    items {
                        modelName
                        productionYear
                        stifnessRank
                        flexibilityRank
                        headHeavinessRank
                        headLightnessRank
                        priceRank
                        playingLevel
                        image {
                            title
                            url
                        }
                    }
                }
            }
        }

  `;

    const data = await fetchContentfulGraphQL<{ racket: Racket }>(query);
    console.log(data)
    return data.racket;
}

export const getRackets = async (): Promise<Racket[]> => {
    const query = `
        query RacketCollection {
           racketCollection {
                total
                items {
                    sys {
                        id
                    }
                    modelName
                    productionYear
                    stifnessRank
                    flexibilityRank
                    headHeavinessRank
                    headLightnessRank
                    priceRank
                    playingLevel
                    brand {
                        _id
                        brandName
                        brandImageSmall {
                            fileName
                            url
                        }
                    }
                    image {
                        fileName
                        url
                    }
                }
            }
        }
  `;

    const data = await fetchContentfulGraphQL<{ racketCollection: { items: Racket[] } }>(query);
    return data.racketCollection.items;
};
