// contentful.config.ts
export const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || '';
export const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || '';
export const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
        'Missing Contentful configurations. Please provide SPACE_ID and ACCESS_TOKEN.'
    );
}
