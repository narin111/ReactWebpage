import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from '../components/Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  // 기본값으로 비어있는 array
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 style={{ color: 'white', margin: '50px' }}>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
