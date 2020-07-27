import React from "react";
// import styled from "styled-components";

const SearchResults = (props) => (
  <section>
    {props.jobs.slice(0, 8).map((job, index) => {
      return (
        <div key={index}>
          <img src={job.companyLogo} alt="company-logo" />
          <br />
          {job.jobTitle} <br />
          {job.company} <br />
          {job.location} <br />
          {job.dateTextPosted} <br />
          <a href={job.link}>Read more</a>
          <hr />
        </div>
      );
    })}
  </section>
);

export default SearchResults;
