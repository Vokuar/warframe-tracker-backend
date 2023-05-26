const axios = require('axios');
const cheerio = require('cheerio');

const scrapeWarframes = async () => {
  try {
    const warframesUrl = 'https://warframe.fandom.com/wiki/Warframes';
    const response = await axios.get(warframesUrl);
    const html = response.data;
    const $ = cheerio.load(html);

    // Now you can use jQuery-like syntax to extract information from the HTML
    // For example, to retrieve the names of the Warframes:
    const warframeNames = [];
    $('.tabbertab .tabbertab').each((index, element) => {
      const name = $(element).find('.warframe_name a').text();
      warframeNames.push(name);
    });

    return warframeNames;
  } catch (error) {
    console.log('Error retrieving warframe data:', error);
    return [];
  }
};

module.exports = {
  scrapeWarframes
};
