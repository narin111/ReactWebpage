import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json);
      setMovie(json.data.movie)
    };
    useEffect(() => {
      getMovie();
    }, []);
    return (
      <div class="detailMV">
        <img src={movie.large_cover_image} alt={movie.title} />
        <h1>{movie.title}</h1>
        <ul>
          {movie.genres && movie.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>
          {movie.description_full}
        </p>

      </div>

    );
  }
  export default Detail;