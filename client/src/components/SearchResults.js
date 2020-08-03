import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";

const SearchResults = (props) => (
  <section>
    {props.jobs.slice(0, 8).map((job, index) => {
      return (
        <JobCard key={index}>
          <JobInfo>
            <JobTitle href={job.link}>{job.jobTitle}</JobTitle>
            <br />
            {job.company} <br />
            {job.dateTextPosted} <br />
            <a href="{job.link}">Read more...</a>
          </JobInfo>
          <JobLocation>
            <img src={job.companyLogo} alt="company-logo" width="110" />
            <br />
            <GoLocation />
            {job.location}
          </JobLocation>
        </JobCard>
      );
    })}
  </section>
);

export default SearchResults;

const JobCard = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70vw;
  background: rgb(255, 255, 255);
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 40vw;
  }
`;

const JobInfo = styled.section`
  font-size: 0.7rem;
`;

const JobLocation = styled.section`
  font-size: 0.7rem;
  font-weight: 500;
`;
const JobTitle = styled.a`
  font-weight: 500;
  color: darkblue;
  text-decoration: none;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
