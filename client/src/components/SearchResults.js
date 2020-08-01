import React from "react";
import styled from "styled-components";
import { GoLocation, GoBriefcase, GoInfo } from "react-icons/go";

const SearchResults = (props) => (
  <section>
    {props.jobs.slice(0, 8).map((job, index) => {
      return (
        <JobCard key={index}>
          <JobInfo>
            <img src={job.companyLogo} alt="company-logo" />
            <GoBriefcase />
            {job.jobTitle}
            <br />
            {job.company} <br />
            {job.dateTextPosted} <br />
            <a href={job.link}>
              <GoInfo />
              Read more
            </a>
          </JobInfo>
          <JobLocation>
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
  margin: 0 auto;
  width: 80vw;
  background: rgba(255, 255, 255, 0.6);
  @media (min-width: 768px) {
    width: 50vw;
    display: flex;
    flex-direction: row;
  }
`;

const JobInfo = styled.section``;
const JobLocation = styled.section`
  text-align: right;
`;
