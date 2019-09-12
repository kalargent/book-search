 import React, { Component } from "react";
import BookSearch from "../components/Search";
import BookResult from "../components/Results"; 
import Jumbotron from "../components/Jumbotron"
import API from "../utils/API";  

class Search extends Component {
    
    state = {
        searchTerm: "", 
        book:[], 
    };

    componentDidMount () {
        API.basicSearch()
        .then (res => this.setState( { books: res.data.message } ))
        .catch (err => console.log (err)) 
    }

    findBook = () => {
       
        
    } 

    render () {
        return (
        <div className="container">
        <Jumbotron />
        <BookSearch /> 
        <BookResult />
        </div>
    )
}}

export default Search; 