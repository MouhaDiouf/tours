import { useEffect, useState } from 'react';
import './App.css';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log('response is ', res));
  });
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div className="app">
      <h1>App</h1>
    </div>
  );
}

export default App;
