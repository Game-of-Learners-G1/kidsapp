import React from "react";
import Footer from "./Footer";
import {Link} from 'react-router-dom';

import "../styles/Home.css";

import computer from "../Images/computer.png"

const Home = () => {
  return (
    <div className="home">
      

      {/* code from chuol */}

      <div className="container">
        <div className="contentComputer">

        <div className="computer">
        <img src={computer} alt=""/>
          </div>
          
    <div id="content">
        <h1>Learn with <br></br>Course Correct</h1>
            <p>The best learning tool for your kids, let your kids learn, play and glow!</p>
            <div>
              <p>Want to Help ? </p>
              <button
                
            style={{
                  width: "190px",
                  height: "80px",
                  cursor: "pointer",
                  borderRadius: "30px",
                  fontSize: "40px",
            }} className="btnDonate"
              > <Link to="/donate" style={{
                  textDecoration: "none",
                
          }}> Donate</Link></button>
        </div>
    </div>
        
          </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270"><path fill="gray" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,144C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
</div>

      {/* end of code from chuol */}

      {/* <h1>This is Home page</h1> */}
      <div><MidHome /></div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;



const MidHome = () => {
  const buttonsArray = [
    {
      name: "Alphabets",
      color: "green",
      id: 1,
      url:"/alphabets"
    },
    {
      name: "Shapes",
      color: "yellow",
      id: 2,
      url:"/shapes"
    },
    {
      name: "Colors",
      color: "purple",
      id: 3,
        url:"/colors"
    },
    {
    name: "Days of the week",
    color: "white",
      id: 4,
    url: "/days"
},
    {
      name: "Months",
      color: "blue",
      id: 5,
      url:"/months"
    },
    {
      name: "Animals",
      color: "red",
      id: 6,
      url:"/animals"
    },
    {
      name: "Fruits",
      color: "orange",
      id: 7,
      url:"/fruits"
    },
    {
      name: "Parts of the body",
      color: "brown",
      id: 8,
      url:"/body"
    },
    {
      name: "Numbers",
      color: "pink",
      id: 9,
      url:"/numbers"
    },
    {
      name: "Parts of a Computer",
      color: "dodgerblue",
      id: 10,
      url:"/computer"
    },
    {
      //not important here
      name: "Let computer read",
      color: "blue",
      id: 11,
      url:"/read"
    },
    {
    //not important here
      name: "Countries and their cities",
      color: "dodgerblue",
      id: 12,
      url:"/countries"
    },

    {
      //not important here
        name: "Quizzes",
        color: "blue",
        id: 13,
        url:"/quiz"
      },
  ];
  return (
    <div className="mid-home">
      <div className="buttons-container">
        {buttonsArray.map((object) => (
          <Link key={object.id} to={object.url}>

            <Topic  object={object} />
          </Link>
        ))}
      </div>
      
    </div>
  );
};

const Topic = ({ object }) => {
  return (
    <div
      style={{
        backgroundColor: object.color,
      }}
      className="topic"
    >
      <h1>{object.name}</h1>
    </div>
  );
};
