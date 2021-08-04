import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getQuote } from './services/Service';
import { setQuote } from './Redux/Action';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState("")
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.kanye.quote);
  console.log("quotes", quote)
  const handleQuote = (e) => {
    setQuotes(e.target.value)
    getQuote()
      .then((response) => {
        console.log(response);
        dispatch(setQuote(response));
      })
      .catch((error) => {
        console.log(error);
      });
  }

   useEffect(() => {
    getQuote()
      .then((response) => {
        console.log(response);
        dispatch(setQuote(response));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  return (
    <div className="App">
      <div className="container">
        <img 
          src="https://awsimages.detik.net.id/community/media/visual/2019/10/25/2ef88f2d-2dea-41cf-a2d9-c7e25ef719d4_43.jpeg?w=700&q=90" 
          alt="photo"
          width="300"
          height="270">
        </img>
        <h2>Kanye-West Quote</h2>
      </div>
      <div className="quotes">
        {[quote].map((data, index) => (
         <div key="{data.item}">
            <h4>{data.quote}</h4>
          </div>
        ))}
        <div className="buttons">
          <button onClick={handleQuote}>Get Quote</button>
          <button>Add Favorite</button>
        </div>
      </div>
      <div className="my-quotes">
        <h3>My Quotes</h3>
        <input></input>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
