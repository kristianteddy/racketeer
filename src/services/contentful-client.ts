// services/contentful-client.ts
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_ENVIRONMENT } from '../../contentful.config';

const CONTENTFUL_GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

export const fetchContentfulGraphQL = async <T>(
    query: string
): Promise<T> => {
    const response = await fetch(CONTENTFUL_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error(`Contentful API error: ${response.statusText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
        throw new Error(`Contentful GraphQL errors: ${JSON.stringify(errors)}`);
    }

    return data;
};
