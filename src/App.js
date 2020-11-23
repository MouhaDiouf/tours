import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
      });
  });

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return <div className="app"></div>;
}

export default App;
