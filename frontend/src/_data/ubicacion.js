const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "ubicacion"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2,
    heroBtn1,
    heroBtn2,
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
    haveAll{
        h2,
        h3,
        desc,
        leftGallery{
            "media": asset->{url},
            "alt": asset->{altText}
        },
        rightGallery[]{
            "media": asset->{url},
            "alt": asset->{altText}
        }
    },
    discoverBenefits{
        h2,
        logo{
            "media": asset->{url},
            "alt": asset->{altText}
        },
        img{
          "media": asset->{url},
          "alt": asset->{altText}
        }
    },
    map{
      h2,
      desc,
      keyPlaces[]{
        name,
        icon{
          "media": asset->{url},
          "alt": asset->{altText}
        }
      },
      img{
        "media": asset->{url},  
        "alt": asset->{altText}
      }
    },
    adventure{
      gallery[]{
        name,
        img{
        "media": asset -> {url},
        "alt": asset -> {altText}
        }
      }
    },
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};