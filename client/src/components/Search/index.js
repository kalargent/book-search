import React from "react"; 

function BookSearch (){
    return (
        <div className="search">
           <form>
                <div className="form-group">
                    <label for="search">Search</label>
                    <input type="text" className="form-control" id="searchTerm" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default BookSearch; 