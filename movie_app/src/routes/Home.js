import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from '../components/Home.module.css';
import axios from 'axios';

function Home() {
  const [loading, setLoading] = useState(true);
  // 기본값으로 비어있는 array
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('title');

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=title`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  // const getMovies = async () => {
  //   const ID_KEY = '';
  //   const SECRET_KEY = '';
  //   const {
  //     data: { items },
  //   } = await axios.get('/v1/search/movie.json', {
  //     params: { query: '해리포터' },
  //     headers: { 'X-Naver-Client-Id': ID_KEY, 'X-Naver-Client-Secret': SECRET_KEY },
  //   });
  //};

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
            // <Movie id={movie.title} coverImg={movie.image} title={movie.title} subTitle={movie.subtitle} pubDate={movie.pubDate} actor={movie.actor} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
