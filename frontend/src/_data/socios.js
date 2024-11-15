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
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};