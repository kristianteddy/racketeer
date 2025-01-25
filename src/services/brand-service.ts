// services/posts-service.ts
import { fetchContentfulGraphQL } from './contentful-client';
import {Image} from "@/src/types/image.type";
export type Brand = {
    brandName: string
    image: Image | null
}
export const getBrands = async (): Promise<Brand[]> => {
    const query = `
        query BrandCollection {
            brandCollection {
                items {
                    brandName
                    brandImageSmall {
                        url
                        fileName
                    }
                    brandImageFull {
                        url
                        fileName
                    }
                }
            }
        }
  `;

    const data = await fetchContentfulGraphQL<{ brandCollection: { items: Brand[] } }>(query);
    return data.brandCollection.items;
};
