const puppeteer = require('puppeteer');

(async () => {
  try {
    // Launch the browser
    const browser = await puppeteer.launch();
  
    // Open a new page
    const page = await browser.newPage();
  
    // Navigate to the Warframe Wiki
    await page.goto('https://warframe.fandom.com/wiki/WARFRAME_Wiki');
  
    // Perform scraping operations
    const warframes = await page.evaluate(() => {
      // Extract warframe data from the page
      const warframeElements = document.querySelectorAll('.warframes-list .warframe-item');
  
      // Convert warframe elements to an array of data objects
      const warframes = Array.from(warframeElements).map((element) => {
        const name = element.querySelector('.name').textContent.trim();
        const image = element.querySelector('.image').src;
  
        return { name, image };
      });
  
      return warframes;
    });
  
    // Display the scraped warframes
    console.log(warframes);
  
    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
