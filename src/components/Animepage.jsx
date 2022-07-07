import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css/animepage.css'


function Animepage() {

  const { id, animepage } = useParams();

  const [Animes, setAnimes] = useState(null);


  useEffect(async () => {

    let res = await fetch(`https://api.jikan.moe/v3/${animepage}/${id}`);

    let data = await res.json();

    if (data.mal_id)
      setAnimes(data);
  }, []);


  return (
    <>
      {Animes ?
        <>
          <div className='container anime-container'>
            <h2 className='anime-title'>{Animes.title}</h2>
            <div className='anime-wrapper-info'>
              <img className='anime-img' src={Animes.image_url} />
              <ul className='anime-info'>
                <li><span>Synopsis:</span> {Animes.synopsis}</li>
                <li><span>Type:</span>  {Animes.type}</li>
                <li><span>Source:</span> {Animes.source}</li>
                <li><span>Episodes:</span> {Animes.episodes}</li>
                <li><span>Score:</span> {Animes.score}</li>
                <li><span>Reting:</span> {Animes.rating}</li>
              </ul>
            </div>
          </div>
        </>
        :
        <h3 className='notFound container'>Request not found</h3>
      }
    </>
  )
}


export { Animepage };