import React, { Component } from "react";
import API from "../../utils/API";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);

    API.findbooks(this.state.value)
        .then(res=> {
            if (res.data.status === "error"){
                throw new Error (res.data); 
            }
            console.log(res.data)
            this.setState({ results: res.data, error: ""})
        })
        .catch(err => this.setState({error: err.message}))
  }

  render() {
    return (
      <div className="search">
        <form>
          <div className="form-group">
            <label for="search">Search</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              placeholder="Search for..."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BookSearch;


// //https://reactjs.org/docs/forms.html
