import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import "./fridge.css";

const SERVER = 'http://localhost:8080/api'

export default function FriendsAliments(){
    const [aliments, setAliments] = useState([]);
    const {userId} = useParams();

    const addAliment = async (aliment) => {
        await fetch(`${SERVER}/addAliment`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(aliment)
        })
        getAliments()
    }
    // end part II

    const getAliments = async () => {
        const response = await fetch(`${SERVER}/user/${userId}/aliments`)

        const data = await response.json()
        setAliments(data)
    }
    const deleteAliment = (alimentId) =>
    {
      axios.delete(`${SERVER}/deleteAliment`+alimentId)
      .then((result)=>{
        getAliments();
      })
      .catch(()=>{
        alert('Error in the Code');
      });
    };
    useEffect(() => {
        getAliments()
      }, [])

    return (
      <div className="container">
        <div className="py-4">
          <h3 class="mb-3 text-center">My Friends's Aliments</h3>
          <table id='alimentTable' class="table border shadow">
            <thead class="thead-primary">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Expiration Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {aliments.map((aliment, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{aliment.name}</td>
                  <td>{aliment.categorie}</td>
                  <td>{aliment.dataExpirare}</td>
                  <td>
                    <Link class="" onClick={() => deleteAliment(aliment.id)}>
                    <i class="fa fa-trash" aria-hidden="true"></i> 
                    </Link>
                  </td>
                </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}