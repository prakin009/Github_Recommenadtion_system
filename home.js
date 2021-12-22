import React from 'react';
import './home.css';
import git from './git.jpg';
//import { withRouter } from "react-router";
class Home extends React.Component{
    constructor(){
        super();
        this.state={value:""}
        this.honChange=this.honChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
      }
  honChange=(e)=>{
    this.setState({value:e.target.value})
  }
  
   handleSubmit=async(e)=>{
    e.preventDefault();
    //const greater=fetchResults();
    const url="https://api.github.com/users/"+this.state.value;
    const lang="https://api.github.com/users/"+this.state.value+"/repos"
    const res= await fetch(url)
    const result=await res.json()
    const lan=await fetch(lang)
    const lan1=await lan.json();
    const js=[],python=[],java=[];
    var i1=0,j=0,h1=0,js1=0,ts=0,php=0,vs=0,greater='',p=0,jup=0;
    lan1.forEach((i)=>{
      const l1=i.language;
      if(l1!=null)
      {
      const k=l1.toLowerCase();
      if(k==="javascript" || k==="typescript" || k==="html" || k==="css" || k==="php" || k==="visual basic .net")
      {
        js[i1++]=k;
      }
      else if(k==="python" || k==="r" || k==="jupyter notebook")
      {
        python[j++]=k;
      }
      else if(k==="java")
      {
        java[h1++]=k;
      }
    }
    })
    if(i1>j && i1>h1)
    {
       js.forEach((i)=>{
          if(i==="javascript" || i==="html" || i==="css")
          {
            js1++;
          }
          else if(i==="typescript")
          {
            ts++;
          }
          else if(i==="php")
          {
            php++;
          }
          else if(i==="visual basic .net")
          {
            vs++;
          }
       })
       if(js1>ts && js1>php && js1>vs)
       {
           greater="javascript";
       }
       else if(ts>php && ts>vs) 
       {
         greater="typescript";
       }
       else if(php>vs)
       {
         greater="php"
       }
       else
       {
         greater="visual basic .net";
       }
      }
    else if(j>h1)
    {
      python.forEach(i=>{
       if(i==="python" || i==="r")
       {
         p++;
       }
       else if(i==="jupyter notebook")
       {
         jup++;
       }})
       if(jup>p)
       {
         greater="jupyter notebook";
       }
       else
       {
         greater="python";
       }
    }
    else
    {
      greater="java";
    }
    const url_rec="https://api.github.com/search/repositories?q=language:"+greater;
    const r=await fetch(url_rec)
    const r1=await r.json()
    console.log(r1)
   var g=0;
   //const user=[]
   const users=[];
    r1.items.forEach((i)=>{
       if(g<8)
       {
         users[g++]=i.owner.login;
       }
    })
      const u="https://api.github.com/users/"+users[0];
      const u1=await fetch(u);
      const u2=await u1.json();
      const avatar1=u2.avatar_url;
      const followers1=u2.followers
      const following1=u2.following
      const name1=u2.name;
      const url1=u2.html_url
      const ui="https://api.github.com/users/"+users[1];
      const ui1=await fetch(ui);
      const ui2=await ui1.json();
      const avatar2=ui2.avatar_url;
      const followers2=ui2.followers
      const following2=ui2.following
      const name2=ui2.name;
      const url2=ui2.html_url
      const uj="https://api.github.com/users/"+users[2];
      const uj1=await fetch(uj);
      const uj2=await uj1.json();
      const avatar5=uj2.avatar_url;
      const followers5=uj2.followers
      const following5=uj2.following
      const name5=uj2.name;
      const url5=uj2.html_url
      const uk="https://api.github.com/users/"+users[3];
      const uk1=await fetch(uk);
      const uk2=await uk1.json();
      const avatar3=uk2.avatar_url;
      const followers3=uk2.followers
      const following3=uk2.following
      const name3=uk2.name;
      const url3=uk2.html_url
      const um="https://api.github.com/users/"+users[4];
      const um1=await fetch(um);
      const um2=await um1.json();
      const avatar4=um2.avatar_url;
      const followers4=um2.followers
      const following4=um2.following
      const name4=um2.name;
      const url4=um2.html_url
    const data={
      avatar:result.avatar_url,
      followers:result.followers,
      following:result.following,
      name:result.name,
      url:result.html_url,
      avatar1:avatar1,
      followers1:followers1,
      following1:following1,
      name1:name1,
      url1:url1,
      avatar2:avatar2,
      followers2:followers2,
      following2:following2,
      name2:name2,
      url2:url2,
      avatar3:avatar3,
      followers3:followers3,
      following3:following3,
      name3:name3,
      url3:url3,
      avatar4:avatar4,
      followers4:followers4,
      following4:following4,
      name4:name4,
      url4:url4,
      avatar5:avatar5,
      followers5:followers5,
      following5:following5,
      name5:name5,
      url5:url5,
    }
    this.props.history.push({pathname:'/info',
    state:{
    det:data
    }})
    this.setState({
        value:""
    })
  }
  render()
  {
  return(
    <>
    <h1 className="h1">Github Recommendation System</h1>
    <img src={git} alt="git" className="img"></img>
    <form className="form" autoComplete="off" onSubmit={this.handleSubmit}>
      <label className="l1">search/find </label><br></br>
      <label htmlFor="search" className="l2">UserName</label><br></br>
      <input type="text" className="search" name="search" value={this.state.value} onChange={this.honChange} placeholder="Username..."/><br></br>
      <button  type="submit" className="btn">search</button>
    </form>
    </>
  )
}
}
export default Home;