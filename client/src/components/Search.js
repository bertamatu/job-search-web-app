import React, { Component } from "react";
import styled from "styled-components";
const API_URL = "http://localhost:3333/search/";

export class Search extends Component {
  state = {
    jobs: [],
    searchQuery: "",
    loading: true,
  };
  componentDidMount() {
    this.setState({ loading: false });
  }

  callApi = async (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    await fetch(`${API_URL}${this.state.searchQuery}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loading: false,
          jobs: responseData.filter((job) => {
            return job.jobTitle !== "" && job.companyLogo !== undefined;
          }),
        });
        console.log("responseData", responseData);
        console.log("jobs", this.state.jobs);
      })
      .catch((error) => {
        console.log("Error fetch!", error);
      });
  };

  render() {
    if (this.state.loading === true) {
      return (
        <LoadingWindow>
          <LoadingImg
            src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
            alt="Loading..."
          />
        </LoadingWindow>
      );
    }
    return (
      <div>
        <SearchHeader onSubmit={this.callApi}>
          <SearchBar
            type="text"
            placeholder="Job title..."
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
          <SubmitButton onClick={(e) => (e.target.value = "")} type="submit">
            GO
          </SubmitButton>
        </SearchHeader>
      </div>
    );
  }
}
export default Search;

const SearchHeader = styled.form`
  display: flex;
  justify-content: center;
  padding: 5rem;
`;

const SearchBar = styled.input`
  background: rgba(255, 255, 255, 0.2);
  width: 20rem;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 1.2rem;
  border: none;
  outline-color: white;
  border-radius: 3px 0 0 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
`;
const SubmitButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline-color: white;
  color: white;
  font-weight: 600;
  padding: 0 1rem 0 1rem;
  border-radius: 0 3px 3px 0;
`;

const LoadingWindow = styled.section`
  height: 100vh;
  width: 100vw;
  background: rgba(16, 16, 16, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.2;
  border-radius: 100%;
  height: 200px;
`;
