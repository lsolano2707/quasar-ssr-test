import { useMeta } from 'quasar';

interface MetaOptions {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const APP_NAME = 'SSR-TEST';

export const useMetaTags = ({
  title,
  description,
  keywords,
  image,
}: MetaOptions) => {
  useMeta({
    title: APP_NAME,
    titleTemplate: () => `${APP_NAME} - ${title}`,
    meta: {
      description: { name: 'description', content: description },
      keywords: { name: 'keywords', content: keywords },

      ogTitle: { name: 'og:title', content: `${APP_NAME} - ${title}` },
      ogDescription: { name: 'og:description', content: description },
      ogImage: { name: 'og:image', content: image },

      twitterTitle: {
        name: 'twitter:title',
        content: `${APP_NAME} - ${title}`,
      },
      twitterDescription: { name: 'twitter:description', content: description },
      twitterImage: { name: 'twitter:image', content: image },
    },
  });
};
