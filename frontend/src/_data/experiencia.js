const client = require("../utils/sanityClient");
const processContent = require("../utils/contentProcessor");

module.exports = async function () {
  const data = await client.fetch(`*[_type == "experiencia"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2,
    heroP,
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
    spaCarousel{
      text1{
        h2,
        desc
      },
      img1{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text2{
        h2,
        desc
      },
      img2{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text3{
        h2,
        desc
      },
      img3{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text4{
        h2,
        desc
      },
      img4{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text5{
        h2,
        desc
      },
      img5{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text6{
        h2,
        desc
      },
      img6{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text7{
        h2,
        desc
      },
      img7{
        "media": asset->{url},
        "alt": asset->{altText}
      },
      text8{
        h2,
        desc
      },
      img8{
        "media": asset->{url},
        "alt": asset->{altText}
      },
    },
    adventure{
      h2,
      gallery[]{
        name,
        img{
        "media": asset -> {url},
        "alt": asset -> {altText}
        }
      }
    },
    placeToBeH2,
    placeToBeImg{
      "media" : asset -> {url},
      "alt" : asset -> {altText}
    },
    traditionsH2,
    traditionsH3,
    traditionsDesc,
    traditionsBtn
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};
