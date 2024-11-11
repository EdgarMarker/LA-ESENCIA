const client = require("../utils/sanityClient");

module.exports = async function () {
  const data = await client.fetch(`*[_type == "empresa"]{
    brandLogo{
    "media": asset->{url},
    "alt": asset->{altText}
    },
    footLogo{
    "media": asset->{url},
    "alt": asset->{altText}
    },
    isoType{
      "media": asset->{url},
      "alt": asset->{altText}},
    logoType{
      "media": asset->{url},
      "alt": asset->{altText}}
    }`);

  return await Promise.all(
    data.map(async (item) => {
      return {
        ...item,
      };
    })
  );
};
