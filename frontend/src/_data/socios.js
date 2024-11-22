const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "socios"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2,
    heroBtn1,
    heroBtn2,
    introH3,
    introH2,
    introDesc,
    introImg1{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introImg2{
      "media": asset->{url},
      "alt": asset->{altText}
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
   experience{
    h2,
    desc,
    list[]{
      h3,
      p,
      img{
        "media": asset -> {url},
        "alt": asset -> {altText}
      }
    }
   },
   banner{
    title,
    img{
     "media": asset->{url},
     "alt": asset->{altText}
    }
   },
   income{
    h2,
    desc,
    list[]{
      title,
      img{
        "media": asset -> {url},
        "alt": asset -> {altText}
      }
    }
   },
   uFind{
    h2,
    list[]{
      name
    },
    img{
    "media": asset->{url},
    "alt": asset->{altText}
    }
   },
   model{
    h2,
    h3,
    desc,
    img{
    "media": asset->{url},
    "alt": asset->{altText}
    }
   }
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};