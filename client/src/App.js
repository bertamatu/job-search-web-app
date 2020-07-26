import React, { Component } from "react";

const API_URL = "http://localhost:3333/search";

export class App extends Component {
  state = {
    jobs: [],
    searchQuery: "",
  };

  callApi = async (e) => {
    e.preventDefault();
    await fetch(`${API_URL}/${this.state.searchQuery}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          jobs: responseData,
        });
        console.log("responseData", responseData);
      })
      .catch((error) => {
        console.log("Error fetch!", error);
      });
    console.log("JOBS", this.state.jobs);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.callApi}>
          <input
            type="text"
            placeholder="Job title..."
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
          <button type="submit">Search</button>
        </form>
        {this.state.jobs.slice(0, 20).map((job, index) => {
          return (
            <div key={index}>
              {job.jobTitle} <br />
              <a href={job.link}>Read more</a>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
