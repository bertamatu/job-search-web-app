const request = require("request-promise");
const cheerio = require("cheerio");

const BASE_URL =
  "https://www.monster.com/jobs/search/?q=Developer&intcid=skr_navigation_nhpso_searchMain";
const scrapeResults = [];
async function scrapeWeb() {
  try {
    const htmlResult = await request.get(BASE_URL);
    const $ = await cheerio.load(htmlResult);
    $(".card-content").each((index, element) => {
      const link = $(element).children(".flex-row").find("a").attr("href");
      const jobTitle = $(element).children(".flex-row").find("a").text();
      const company = $(element)
        .children(".flex-row")
        .find(".company")
        .find("span")
        .text();
      const location = $(element)
        .children(".flex-row")
        .find(".location")
        .find("span")
        .text();
      const datePosted = $(element)
        .children(".flex-row")
        .find("time")
        .attr("datetime");
      const dateTextPosted = $(element)
        .children(".flex-row")
        .find("time")
        .text();
      const companyLogo = $(element)
        .children(".flex-row")
        .find(".mux-company-logo")
        .find("img")
        .attr("src");
      const scrapeResult = {
        link,
        jobTitle,
        company,
        companyLogo,
        location,
        datePosted,
        dateTextPosted,
      };
      scrapeResults.push(scrapeResult);
    });
    console.log(scrapeResults);
  } catch (error) {
    console.log(error);
  }
}
scrapeWeb();
