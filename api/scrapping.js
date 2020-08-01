const request = require("request-promise");
const cheerio = require("cheerio");

const scrapedJobResults = [];

async function searchJobs(searchQuery) {
  try {
    const htmlResult = await request.get(
      `https://www.monster.com/jobs/search/?q=${searchQuery}&intcid=skr_navigation_nhpso_searchMainPrefill`
    );
    const $ = await cheerio.load(htmlResult);
    $(".card-content").each((index, element) => {
      const link = $(element).children(".flex-row").find("a").attr("href");
      const jobTitle = $(element).children(".flex-row").find("a").text();
      const jobId = $(element).attr("data-jobid");
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
      const scrapedResult = {
        jobId,
        link,
        jobTitle,
        company,
        companyLogo,
        location,
        datePosted,
        dateTextPosted,
      };
      scrapedJobResults.push(scrapedResult);
    });
  } catch (error) {
    console.log(error);
  }
  return scrapedJobResults;
}
module.exports = { searchJobs };
