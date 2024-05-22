import { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showBoxSearch, setShowBoxSearch] = useState(false);

  const handleSearch = e => {
    setQuery(e.target.value);
    setShowBoxSearch(!!e.target.value);
  };

  return (
    <form className="relative max-w-[600px] w-full h-[44px] border border-white flex items-center">
      <input
        className="header-form__input w-full px-5 outline-none bg-transparent text-sm text-white"
        type="search"
        name="search"
        id="search"
        placeholder="Search for anything"
        onChange={handleSearch}
      />
      <button
        className="w-[44px] h-[44px] bg-yellow flex items-center justify-center absolute -right-[1px] -top-[1px]"
        type="submit"
      >
        <img src="/src/assets/icons/search.svg" alt="" />
      </button>

      {showBoxSearch && (
        <div className="absolute top-full left-0 right-0 bg-white h-[200px] shadow-lg z-10">
          <article></article>
        </div>
      )}
    </form>
  );
};

export default Search;
