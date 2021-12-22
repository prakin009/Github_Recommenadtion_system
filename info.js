import React from 'react'
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './info.css';
//import git from './git.jpg';
const Info =(props)=>{
    const history=useHistory();
    const location=useLocation();
    const [state, setState] = useState({
      avatar:'',
      followers:'',
      following:'',
      name:'',
      url:'',
      avatar1:'',
      followers1:'',
      following1:'',
      name1:'',
      url1:'',
      avatar2:'',
      followers2:'',
      following2:'',
      name2:'',
      url2:'',
      avatar3:'',
      followers3:'',
      following3:'',
      name3:'',
      url3:'',
      avatar4:'',
      followers4:'',
      following4:'',
      name4:'',
      url4:'',
      avatar5:'',
      followers5:'',
      following5:'',
      name5:'',
      url5:'',
    });
    useEffect(() => {
      setState(state => ({ ...state, avatar: location.state.det.avatar }));
    }, [state.avatar,location]);
    useEffect(() => {
      setState(state => ({ ...state, followers: location.state.det.followers }));
    }, [state.followers,location]);
    useEffect(() => {
      setState(state => ({ ...state, following: location.state.det.following }));
    }, [state.following,location]);
    useEffect(() => {
      setState(state => ({ ...state, name: location.state.det.name }));
    }, [state.name,location]);
    useEffect(() => {
      setState(state => ({ ...state, url: location.state.det.url }));
    }, [state.url,location]);
    useEffect(() => {
      setState(state => ({ ...state, avatar1: location.state.det.avatar1 }));
    }, [state.avatar1,location]);
    useEffect(() => {
      setState(state => ({ ...state, followers1: location.state.det.followers1 }));
    }, [state.followers1,location]);
    useEffect(() => {
      setState(state => ({ ...state, following1: location.state.det.following1 }));
    }, [state.following1,location]);
    useEffect(() => {
      setState(state => ({ ...state, name1: location.state.det.name1 }));
    }, [state.name1,location]);
    useEffect(() => {
      setState(state => ({ ...state, url1: location.state.det.url1 }));
    }, [state.url1,location]);
    useEffect(() => {
      setState(state => ({ ...state, avatar2: location.state.det.avatar2 }));
    }, [state.avatar2,location]);
    useEffect(() => {
      setState(state => ({ ...state, followers2: location.state.det.followers2 }));
    }, [state.followers2,location]);
    useEffect(() => {
      setState(state => ({ ...state, following2: location.state.det.following2 }));
    }, [state.following2,location]);
    useEffect(() => {
      setState(state => ({ ...state, name2: location.state.det.name2 }));
    }, [state.name2,location]);
    useEffect(() => {
      setState(state => ({ ...state, url2: location.state.det.url2 }));
    }, [state.url2,location]);
    useEffect(() => {
      setState(state => ({ ...state, avatar3: location.state.det.avatar3 }));
    }, [state.avatar3,location]);
    useEffect(() => {
      setState(state => ({ ...state, followers3: location.state.det.followers3 }));
    }, [state.followers3,location]);
    useEffect(() => {
      setState(state => ({ ...state, following3: location.state.det.following3 }));
    }, [state.following3,location]);
    useEffect(() => {
      setState(state => ({ ...state, name3: location.state.det.name3 }));
    }, [state.name3,location]);
    useEffect(() => {
      setState(state => ({ ...state, url3: location.state.det.url3 }));
    }, [state.url3,location]);
    useEffect(() => {
      setState(state => ({ ...state, avatar4: location.state.det.avatar4 }));
    }, [state.avatar4,location]);
    useEffect(() => {
      setState(state => ({ ...state, followers4: location.state.det.followers4 }));
    }, [state.followers4,location]);
    useEffect(() => {
      setState(state => ({ ...state, following4: location.state.det.following4 }));
    }, [state.following4,location]);
    useEffect(() => {
      setState(state => ({ ...state, name4: location.state.det.name4 }));
    }, [state.name4,location]);
    useEffect(() => {
      setState(state => ({ ...state, url4: location.state.det.url4 }));
    }, [state.url4,location]);
    useEffect(() => {
      setState(state => ({ ...state, avatar5: location.state.det.avatar5 }));
    }, [state.avatar5,location]);
    useEffect(() => {
      setState(state => ({ ...state, followers5: location.state.det.followers5 }));
    }, [state.followers5,location]);
    useEffect(() => {
      setState(state => ({ ...state, following5: location.state.det.following5 }));
    }, [state.following5,location]);
    useEffect(() => {
      setState(state => ({ ...state, name5: location.state.det.name5 }));
    }, [state.name5,location]);
    useEffect(() => {
      setState(state => ({ ...state, url5: location.state.det.url5 }));
    }, [state.url5,location]);
   // console.log(state.users)
    return(
      <div>
        <div className='container'>
          <h3>{state.name}</h3>
          <img src={state.avatar} alt='avatar'/><br></br>
          <h5>Followers -{state.followers}</h5>
          <h5>following -{state.following}</h5>
          <a href={state.url}>visit</a>
        </div>
        <h1 className='h11'>Recommendations for you</h1>
        <div className='rec'>
          <div className='r1'>
            <h3>{state.name1}</h3>
            <img src={state.avatar1} alt='avatar'/><br></br>
            <h5>Followers -{state.followers1}</h5>
            <h5>following -{state.following1}</h5>
            <a href={state.url1}>visit</a> 
          </div>
          <div className='r2'>
            <h3>{state.name2}</h3>
            <img src={state.avatar2} alt='avatar'/><br></br>
            <h5>Followers -{state.followers2}</h5>
            <h5>following -{state.following2}</h5>
            <a href={state.url2}>visit</a>
          </div>
          <div className='r3'>
            <h3>{state.name3}</h3>
            <img src={state.avatar3} alt='avatar'/><br></br>
            <h5>Followers -{state.followers3}</h5>
            <h5>following -{state.following3}</h5>
            <a href={state.url3}>visit</a>
          </div>
        </div>
        <div className='rec1'>
          <div className='r11'>
            <h3>{state.name4}</h3>
            <img src={state.avatar4} alt='avatar'/><br></br>
            <h5>Followers -{state.followers4}</h5>
            <h5>following -{state.following4}</h5>
            <a href={state.url4}>visit</a> 
          </div>
          <div className='r21'>
            <h3>{state.name5}</h3>
            <img src={state.avatar5} alt='avatar'/><br></br>
            <h5>Followers -{state.followers5}</h5>
            <h5>following -{state.following5}</h5>
            <a href={state.url5}>visit</a>
          </div>
        </div>
      </div>
    )
}

export default Info;
