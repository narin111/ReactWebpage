import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../components/Movie.module.css';

function Movie({ id, coverImg, title, summary, genres }) {
  // App.js으로부터 movie 정보를 받는다
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        {/* <h3 className={styles.movie__year}>{year}</h3> */}
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>

    // <div>
    //   <img src={coverImg} alt={title} />
    //   <h2>
    //     <Link to={`/movie/${id}`}>{title}</Link>
    //   </h2>
    //   <ul>
    //     {genres.map((g) => (
    //       <li key={g}>{g}</li>
    //     ))}
    //   </ul>
    //   <p>{summary}</p>
    // </div>

    // <div class="card" style={{ width: '18rem' }}>
    //   <img class="card-img-top" src={coverImg} alt="{title}" />
    //   <div class="card-body">
    //     <h2>
    //       <Link to={`/movie/${id}`}>{title}</Link>
    //     </h2>
    //     <ul>
    //       {genres.map((g) => (
    //         <li key={g}>{g}</li>
    //       ))}
    //     </ul>
    //     <p>{summary}</p>
    //   </div>
    // </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
