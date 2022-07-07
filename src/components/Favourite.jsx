import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../css/favourite.css'


function Favourite() {
  const [favouriteArray, setFavourite] = useState(JSON.parse(localStorage.getItem('favourite')) || []);

  function delFavourite(animeEl) {
    console.log(animeEl)
    let index = favouriteArray.findIndex((elem) => elem.mal_id === animeEl.mal_id);

    favouriteArray.splice(index, 1);
    localStorage.setItem('favourite', JSON.stringify(favouriteArray));

    let favouriteCopy = [...favouriteArray];
    setFavourite(favouriteCopy)
  }


  return (
    <>
      {favouriteArray.length ?
        <div className='container favourite-container'>
          <div className='animes'>
            {
              favouriteArray.map((elem) =>
                <div className='anime-wrapper' key={elem.mal_id}>
                  <div>
                    <Link to={`/${elem.type === 'TV' || elem.type === 'Movie' || elem.type === 'OVA' || elem.type === 'Special' || elem.type === 'ONA' ? 'anime' : 'manga'}/${elem.mal_id}`}>
                      <img className='anime-img' src={elem.image_url} />
                    </Link>
                  </div>
                  <div className='anime-text'>
                    <i className="far fa-trash-alt" onClick={() => delFavourite(elem)}></i>
                    <span>{elem.title.length > 32 ? `${elem.title.slice(0, 32)}...` : elem.title}</span>
                  </div>
                </div>
              )}
          </div>
        </div>
        :
        <h3 className='notFound container'>No favorites added</h3>
      }
    </>
  )
}

export { Favourite };
