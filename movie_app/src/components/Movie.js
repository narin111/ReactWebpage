import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import styles from '../components/Movie.module.css';

function Movie({ id, coverImg, title, summary, genres }) {
  // function Movie({ id, coverImg, title, subTitle, pubDate, actor }) {
  // App.js으로부터 movie 정보를 받는다
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <b>
            <Link to={`/movie/${id}`}>{title}</Link>
          </b>
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

    // <div className={styles.movie}>
    //   {coverImg !== '' ? (
    //     <img src={coverImg} alt={title} className={styles.movie__img} />
    //   ) : (
    //     <img src="https://i.pinimg.com/222x/9b/72/4a/9b724a9a57feda49832adc8ea88d157a.jpg" alt={title} className={styles.movie__img} />
    //   )}
    //   {/* <img src={coverImg} alt={title} className={styles.movie__img} /> */}
    //   <div>
    //     <h2 className={styles.movie__title}>
    //       <Link to={`/movie/${title.replace(/<b>/gi, '').replace(/<\/b>/gi, '')}`}>{title.replace(/<b>/gi, '').replace(/<\/b>/gi, '')}</Link>
    //     </h2>
    //     {/* <h3 className={styles.movie__year}>{year}</h3> */}
    //     <p>
    //       <span>
    //         <b>개봉일자</b>
    //       </span>{' '}
    //       {pubDate}
    //     </p>
    //     <p>
    //       <span>
    //         <b>부제</b>
    //       </span>{' '}
    //       {subTitle}
    //     </p>
    //     <p>
    //       <span>
    //         <b>감독</b>
    //       </span>{' '}
    //       {actor}
    //     </p>
    //   </div>
    // </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Movie;
