import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
   
//     </>
//   )
// }


const App = () => {
  return (
    <div className="grid-container">
      <header className="navbar"><h3>REACT ASSIGNMENT</h3></header>
      <aside className="sidebar">
        <ul>
          <h4>Highlights</h4> 
          <li>Introduction to react</li>
          <li>components</li>
          <li>class based components</li>
        </ul>
      </aside>
      
      <main className="main">
        <h3>YATOR'S  BLOGS</h3>
        <h4> Introduction to react</h4>
        <p>we learnt on basics of react such as react ES6,react render HTML and starting and stoping react applications</p>

        <h4>Components</h4>
        
        <p>we learnt on types of components such as functional components and class components.</p>

        <h4>CLass based components</h4>
        <p> learnt on react class based lifecycle hooks,functional components,conditionals in react,constructors etc</p>


      </main>
      <footer className="footer">
        
      <p className='Name'>Name:  FAITH YATOR</p>
       <p class="date" data-date='16' data-month='May' data-year='2023'>Date: 16 may,2023</p>
      

      </footer>
    </div>
  );
};



export default App
