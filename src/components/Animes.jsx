import { Link } from 'react-router-dom'
import '../css/animes.css'


function Animes(props) {
  const {
    animes = [],
    setFavourite = Function.protytype,
    favouriteArray,
  } = props;

  return (
    <>
      <div className='animes'>
        {
          animes.map((anime) =>
            <div className='anime-wrapper' key={anime.mal_id}>
              <div>
                <Link to={`/${anime.type === 'TV' || anime.type === 'Movie' || anime.type === 'OVA' || anime.type === 'Special' || anime.type === 'ONA' ? 'anime' : 'manga'}/${anime.mal_id}`}>
                  <img className='anime-img' src={anime.image_url} />
                </Link>
              </div>
              <div className='anime-text'>
                {favouriteArray.find((elem) => elem.mal_id === anime.mal_id) ? <i className="fas fa-star" onClick={() => setFavourite(anime, anime.type)}></i> : <i className="far fa-star" onClick={() => setFavourite(anime, anime.type)}></i>}
                <span>{anime.title.length > 32 ? `${anime.title.slice(0, 32)}...` : anime.title}</span>
              </div>

            </div>
          )}
      </div>
    </>
  );
}
export { Animes };
