import { useState } from 'react';
import { Animes } from '../components/Animes'
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
import '../css/main.css'
import '../css/preloader.css'

function Main() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState(true);

  const favouriteArray = JSON.parse(localStorage.getItem('favourite')) || [];


  // спускаем вниз для компонента Search
  const searchAnimes = async (name, type) => {
    setBanner(false);
    setLoading(true);

    const res = await fetch(`https://api.jikan.moe/v3/search/${type}?q=${name}&limit=10`)
    let data = await res.json();
    if (data.results) {
      markFavorite(data.results)
    }
    setLoading(false)
  }


  function markFavorite(data) {
    let AnimesCopy = [...data];
    if (AnimesCopy)
      setAnimes(AnimesCopy);
  }


  function setFavourite(animeEl, type) {

    console.log(animeEl, type);

    let index = favouriteArray.findIndex((elem) => elem.mal_id === animeEl.mal_id && elem.type === type);

    console.log(index);

    if (index != -1)
      favouriteArray.splice(index, 1);
    else
      favouriteArray.push(animeEl);

    localStorage.setItem('favourite', JSON.stringify(favouriteArray));

    markFavorite(animes);
  }

  return (
    <main className='container'>

      <Search searchAnimes={searchAnimes} />
      {banner ?
        <div className='banner'><img src={process.env.PUBLIC_URL + '/banner.png'} /></div>
        :
        loading ? <Preloader ></Preloader> : <Animes animes={animes} setFavourite={setFavourite} favouriteArray={favouriteArray} />
      }
    </main>
  );
}

export { Main };
