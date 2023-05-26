const axios = require('axios');
const cheerio = require('cheerio');

const warframesUrl = 'https://warframe.fandom.com/wiki/Warframes';

axios.get(warframesUrl)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Now you can use jQuery-like syntax to extract information from the HTML
    // For example, to retrieve the names of the Warframes:
    const warframeNames = [];
    $('.tabbertab .tabbertab').each((index, element) => {
      const name = $(element).find('.warframe_name a').text();
      warframeNames.push(name);
    });

    console.log(warframeNames);
  })
  .catch(error => {
    console.log('Error retrieving warframe data:', error);
  });
