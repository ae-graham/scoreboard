import React, {useState} from "react";

const AddTeamForm = (props) => {
    const [value, setValue] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();         //prevent the form's default behavior when the form submits
        props.addTeam(value);
        setValue("");
    }

    return(
        <form onSubmit={(event) => handleSubmit(event)}>
            {console.log(value)}
            <input                                                  //create a controlled component that renders an <input> field
                type="text"
                onChange= {(event) => setValue(event.target.value)} 
                value={value} 
                placeholder="Add New Team">
            </input>
            
            <input type="submit" value="Add Team"></input>
        </form>
    );
}

export default AddTeamForm;