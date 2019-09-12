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
        console.log("Mounted"); 
    }

    findBook = () => {
        API.findbooks()
        

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