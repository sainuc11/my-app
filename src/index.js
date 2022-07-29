import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Timer from './HelloWorld';
import Msg from './newPage';
import GetPin from './getPinCodes';
import { render } from '@testing-library/react';



function formatUserName(data){
  return data.firstName+" "+data.lastName;
}

const userName={
  firstName:'Saichand',
  lastName:'Goud'

}

function msgFn(){
   root.render(<Msg/>);
}

function timerFn(){
  root.render(<Timer/>,<Msg/>);
};


const element1=(
      <div>
        <button onClick={timerFn}>Open Timer</button> 
        <button onClick={msgFn}>Open Message</button>
        <br></br>
        <br></br>
        <p> Hi {formatUserName(userName)} </p>
        <div className={Msg}/>
        
      </div>
      );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 element1
);

root.render(<GetPin/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
