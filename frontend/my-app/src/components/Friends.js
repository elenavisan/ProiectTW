/*import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import './Friends.css';
import { Link } from "react-router-dom";

const Person=(props)=>{
  const{img,name}=props.person;
  const url= `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (<div className='person'>
        <img src={url} alt=""></img>
    <div>
      <h4>{name}</h4>
    </div>
    
     </div>)
}
const SERVER = 'http://localhost:3000/api'
const PersonList=()=>{

    const [users, setUsers] = useState([]);
    const {id} = useParams();
 
    const postUser = async (user) => {
        await fetch(`${SERVER}/postUser`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        getUsers()
    }
    // end part II

    const getUsers = async () => {
        const response = await fetch(`${SERVER}/getUsers`)

        const data = await response.json()
        setUsers(data)
    }
    useEffect(() => {
        getUsers()
      }, [])

      return (

        <div className="user-list">
            {
                users.map(e => <Person key={e.id} item={e} />)
            }
            <Friends onAdd={postUser}/>
        </div>
    )
};
const Friends =()=>(<PersonList/>)*/

import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Friends.css";

const SERVER="http://localhost:8080/api";

export default function Friends() {
    const [users, setUsers] = useState([]);
    const {id} = useParams();
    
    const postUser = async (user) => {
        await fetch(`${SERVER}/postUser`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        getUsers()
    }

    const getUsers = async () => {
        const response = await fetch(`${SERVER}/getUsers`)

        const data = await response.json()
        setUsers(data)
    }
    useEffect(() => {
        getUsers()
      }, [])

    return (
<section className="friends-list">
                <div className='container'>
                    <div className='row'>
                        {
                            users.length>0 && users.map(user =>{
                                return(
                                <div className='col-md-6' key={user.id}>
                        <div className='card my-2'>
                            <div className='card-body'>
                                <div className='row align-items-center d-flex justify-content-around'>
                                <div className='col-md-4'>
                                    <img src={`https://randomuser.me/api/portraits/thumb/lego/${user.id}.jpg`} alt="" className='img-fluid contact-img'></img>
                                </div>
                                <div className='col-md-7'>
                                    <ul className='list-group'>
                                        <li className='list-group-item list-group-item-action'>
                                        Email: <span className="fw-bold">{user.email}</span>
                                    </li>
                                    </ul>
                                </div>
                                <div className='col-md-1 d-flex flex-column align-items-center'>
                                    <Link className="btn btn-primary" to="/Friends/FriendsAliments">
                                        <i className='fa fa-eye'/>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                     </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>
    );
}