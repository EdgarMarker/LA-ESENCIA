const client = require("../utils/sanityClient");
const processContent = require("../utils/contentProcessor");

module.exports = async function () {
  const data = await client.fetch(`*[_type == "empresa"]{
    brandName,
    form{
      h2,
      description,
      img{
        "media": asset->{url},
        "alt": asset->{altText}
      },
    },
    brandIndustry,
    brandTagLine,
    brandPhone,
    brandEmail,
    brandAddress,
    brandAddressUrl,
  }`);

  await Promise.all(data.map(processContent));
  return data;
};