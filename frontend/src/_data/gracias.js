const client = require("../utils/sanityClient");
const processContent = require("../utils/contentProcessor");


module.exports = async function () {
  const data = await client.fetch(`*[_type == "gracias"]{
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
    brochure{
      "url": asset->{url},
    },
    introImg1{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introImg2{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    privileges{
        h2,
        h3,
        list[]{
            title,
            img{
                "media": asset->{url},
                "alt": asset->{altText}
            }
        },
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
    desc,
    articles[]{
      title,
      description,
      img{
        "media": asset->{url},
        "alt": asset->{altText}
      }
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
   decidir{
    h2,
    desc,
    img1{
      "media": asset -> {url},
      "alt": asset -> {altText}
    }
   },
   price{
    h2,
    desc,
    h3,
    numero,
    span
   }
  }`);
  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; 
};


