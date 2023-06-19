import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({})
  // https:api.quotable.io/random
  useEffect (() => {
    getQuote();
  }, [])

  const getQuote = () => {
   fetch(' https:api.quotable.io/random') 
   .then((Response) => {
    return Response.json();
   })
   .then((data) => {
    setQuoteInfo({
      text: data.content,
      author: data.author,
    });
   });
  };

  return(
    <div className="App"> 
    <div id='quote-box'>
      <p id='text'>{quoteInfo.text}</p>
      <p id='author'>{quoteInfo.author}</p>
      <button id='new-quote' onClick={getQuote}>New Quote</button>
      <a href={'twitter.com/intent/tweet' + quoteInfo.text} id='tweet-quote'>Post to twitter</a>
    </div> 
  </div>
  );
}

export default App;
