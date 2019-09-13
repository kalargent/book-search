import React, { Component } from "react";
import BookSearch from "../components/Search";
import BookResult from "../components/Results";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Search extends Component {
  state = {
    searchTerm: "",
    book: []
  };

  componentDidMount() {
    console.log("mounted")
    API.basicSearch()
      .then(res => {
        console.log(res.data)  
        this.setState({ book: res.data })
        })

      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <BookSearch onSearch={this.onSearch} />
        <BookResult />
      </div>
    );
  }
}

export default Search;
