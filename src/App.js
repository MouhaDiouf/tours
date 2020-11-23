import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
