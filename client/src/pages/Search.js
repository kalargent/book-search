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
        this.setState({ books: res.data.message })})
      .catch(err => console.log(err));
  }

  onSearch (searchTerm) {
    console.log("i'm searching")
    console.log(searchTerm)
    API.findbooks()
    .then(res => {
        console.log(res.data)
    }
        )
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
