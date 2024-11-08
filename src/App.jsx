import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ["sakib", "Raz", " jasim", "Rubel", "Salman"]
  
 const singers = [
  { id: 1, name: "Dr. Mahfujur Rahman", age: 68}, 
  { id: 2, name: "Eva Rahman", age: 45}, 
  { id: 3, name: "Shovro Dev", age: 38}, 
  { id: 4, name: "Pritom Vai", age: 28}, 
 ]



  return (
    <>
      
      <h3>Vite + React</h3>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)

      }

      

      <Actor name={"Bappa Razz"}></Actor>
     
      
    {
        actors.map(actor=> <Actor name={actor}></Actor> )
    }
    
      
      

      {/* <Todo task="Learn react" isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true}></Todo> */}
     
      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer>
       */}
      
    </>
  )
}
function Device(props){
  // console.log(props)
  return <h2>This device:{props.name} price:{props.price}</h2>
}

 function Person(){
  const age = 25
  const money = 20
  const person = {name: "Hasan", age: 36}
  return <h3>I am {person.name} person eith age:{age + money}</h3>
 
 }
 const {grade, score}= {grade: '7', score: '99'}
 
 function Student({grade=1, score=0}){
 console.log(grade, score)
 
   return (

   <div className='student'>
    <h3>This is a student</h3>
    <p>Class:{grade}</p>
    <p>Score: {score}</p>
   </div>
   )
  }
 
 function Developer(){
  const developerStyle={
    margine: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px"
  }
  return(
    <div style={developerStyle}>
      <h5>Devo debu</h5>
      <p>Coding:</p>
    </div>
  )
 }

 



export default App
