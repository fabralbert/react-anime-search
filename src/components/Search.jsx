import React, { useState } from 'react';
import '../css/search.css'

const Search = (props) => {
    const {
        searchAnimes = Function.protytype, // функция заглушка если вдруг не получит из main
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('anime');


    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchAnimes(search, type)
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchAnimes(search, event.target.dataset.type);
    };


    return (
        <div className="inputs-wrapper">
            <div className="search-wrapper">
                <input
                    className="search-input"
                    placeholder='Type what you want to search'
                    id="search"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="button"
                    onClick={() => searchAnimes(search, type)}>Search</button>
            </div>
            <div className='radio-buttons-wrapper'>
                <input
                    className="with-gap"
                    name="type"
                    id="radio-1"
                    type="radio"
                    data-type="anime"
                    onChange={handleFilter}
                    checked={type === 'anime'} />
                <label for="radio-1">Anime</label>
                <input
                    className="with-gap"
                    name="type"
                    id="radio-2"
                    type="radio"
                    data-type="manga"
                    onChange={handleFilter}
                    checked={type === 'manga'} />
                <label for="radio-2">Manga</label>
            </div>
        </div>
    )
}

export { Search };
