import logo from './logo.svg';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Noakhali" special="bivag"></District>
      <District name="Bramonbaria" special="joda akbar"></District>
      <District name="Sumilla" special="Moyna and moti"></District>
    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return (
    <div style={{backgroundColor: 'lightgray', margin:'20px', border:'3px solid blue',borderRadius:'15px', padding:'15px'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '15px'
}

function District(props){
  const [power, setPower] = useState(1);
  const boostPower= () => setPower(power*2);
  // const boostPower = () => {
  //   const newPower = power * 2;
  //   setPower(newPower);
  // }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
