const client = require("../utils/sanityClient");
const processContent = require("../utils/contentProcessor");

module.exports = async function () {
  const data = await client.fetch(`*[_type == "inicio"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2,
    introDivider{
     logo{
       "media": asset->{url},
         "alt": asset->{altText}
     },
     slide1[]{
       "media": asset->{url},
       "alt": asset->{altText}
     },
     slide2[]{
       "media": asset->{url},
       "alt": asset->{altText}
     }
   },
   discoverPueblito{
    h2,
    h3,
    description,
    img[]{
      "media": asset->{url},
      "alt": asset->{altText}
    }
   },
   discoverBenefits{
    h2,
    description,
    logo{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    img{
      "media": asset->{url},
      "alt": asset->{altText}
    }
   },
    
   recentArticles{
    h2,
    articles[]->{
      title,
      slug,
      excerpt,
      publishedAt,
      "categories": categories[]->title,
      "categoriesSlug": categories[]->slug,
      mainImage{
        "media": asset->{url},
        "alt": asset->{altText}
      }
    }
   },

   location{
    h2,
    h3,
    description,
   },
    heroH2[]{
      ...,
      _type == 'image' => {
        "image": asset->{
          url,
          "alt": altText
        }
      }
    },
    heroP,
    heroBtn1,
    heroBtn2,
    heroImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introH2,
    introH4,
    introRichText,
    introImg1{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introImg2{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    activityH3,
    activityH2,
    activityH4,
    activityRichText,
    activityBtn,
    dividerImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    conceptH3,
    conceptH2,
    conceptH4,
    conceptRichText,
    conceptBtn,
    conceptImg1{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    conceptImg2{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    toBeH2,
    toBeImg[]{
        "media": asset->{url},
        "alt": asset->{altText}
    },
    locationH3,
    locationH2,
    locationH4,
    locationRichText,
    locationMapImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    locationPinImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    iWantImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    iWantCard{
      img{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      h2,
      btn{
        name,
        link
      }
    },
    recentProdRef{
      "recentProducts": recentProducts[]->{
        title,
    slug,
    publishedAt,
    "categories": categories[]->title,
    mainImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
      }
    }
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};
