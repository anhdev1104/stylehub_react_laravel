const Search = () => {
  return (
    <form className="relative max-w-[600px] w-full h-[44px] border border-white flex items-center">
      <input
        className="header-form__input w-full px-5 outline-none bg-transparent text-sm text-white"
        type="search"
        name="search"
        id="search"
        placeholder="Search for anything"
      />
      <button
        className="w-[44px] h-[44px] bg-yellow flex items-center justify-center absolute -right-[1px] -top-[1px]"
        type="submit"
      >
        <img src="/src/assets/icons/search.svg" alt="" />
      </button>
    </form>
  );
};

export default Search;
