const client = require("../utils/sanityClient");
const processContent = require("../utils/contentProcessor");

module.exports = async function () {
  const data = await client.fetch(`*[_type == "contacto"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2,
    heroBtn1,
    heroBtn2,
    intro{
      h2Left,
      pLeft,
      img1Left{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      img2Left{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      h2Right,
      pRight,
      img1Right{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      img2Right{
        "media": asset->{url},
        "alt": asset->{altText}
      },
    },
    form{
        h2,
        img{
          "media": asset->{url},
          "alt": asset->{altText}
        }
      }
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};
