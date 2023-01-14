import React, { useState } from "react";
import axios from 'axios';
 
//import { useHistory } from "react-router-dom";
const SERVER = 'http://localhost:8080/api'

const AddAliment = (props) => {
 const onAdd={props};
  const [aliment, setAliment] = useState({
    name: "",
    category: "",
    expirationDate: ""
  });
 
  const options=[{
    label: 'LACTAT',
    value: 'LACTAT'
}, {
    label: 'FRUCT',
    value: 'FRUCT'
}, {
    label: 'LEGUMA',
    value: 'LEGUMA'
},
{
    label: 'CARNE',
    value: 'CARNE'
}]
const {name, category,expirationDate} = aliment;
   
  const onInputChange = e => {
    setAliment({ ...aliment, [e.target.name]: e.target.value });
  };
  const addAliments = () => {
    onAdd({
        name,
        category,
        expirationDate
    })
}

  /*const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/aliments",aliment);
    alert('Data Inserted');
    // history.push("/");
  };*/
   
  return (
    <div className="container bg-light">
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New Aliment</h2>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Aliment Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Expiration Date"
              name="expirationDate"
              value={expirationDate}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <select 
          type="text"
          className="form-control file-selector-button"
           placeholder="Select Aliment Category"
           name="category"
           value={category} 
           onChange={(e) => onInputChange(e)}>
                    {
                        options.map((o) => <option key={o.value} value={o.value}> {o.label} </option>)
                    }
                </select>
          </div>          
          <button className="btn btn-primary btn-block" onClick={onAdd} >Add Aliment</button>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default AddAliment;