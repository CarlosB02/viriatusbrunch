export default function sitemap() {
  const baseUrl = 'https://viriatusbrunch.pt';
  
  return [
    // Home / Início
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          pt: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          pt: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },

    // Galeria / Gallery
    {
      url: `${baseUrl}/galeria`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          pt: `${baseUrl}/galeria`,
          en: `${baseUrl}/en/gallery`,
        },
      },
    },
    {
      url: `${baseUrl}/en/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          pt: `${baseUrl}/galeria`,
          en: `${baseUrl}/en/gallery`,
        },
      },
    },

    // Sobre Nós / About
    {
      url: `${baseUrl}/sobre-nos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          pt: `${baseUrl}/sobre-nos`,
          en: `${baseUrl}/en/about`,
        },
      },
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          pt: `${baseUrl}/sobre-nos`,
          en: `${baseUrl}/en/about`,
        },
      },
    },

    // Contactos / Contacts
    {
      url: `${baseUrl}/contactos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          pt: `${baseUrl}/contactos`,
          en: `${baseUrl}/en/contacts`,
        },
      },
    },
    {
      url: `${baseUrl}/en/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          pt: `${baseUrl}/contactos`,
          en: `${baseUrl}/en/contacts`,
        },
      },
    },
  ];
}
