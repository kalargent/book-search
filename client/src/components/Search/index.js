import React from "react"; 

function BookSearch (props){
    var text = ""; 

    function handleInput (e) {
        text = e.target.value
    }
    
    function handleClick(event){
        event.preventDefault(); 
        props.onSearch(text)
    }
    return (
        <div className="search">
           <form>
                <div className="form-group">
                    <label for="search">Search</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onChange={handleInput} placeholder="Search for..."/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default BookSearch; 

//https://reactjs.org/docs/forms.html