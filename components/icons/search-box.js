const SearchBox = () => {
    return ( 
        <div className="search-box col-span-4 dis-none flex">
        <div>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="44"
              height="44"
              rx="11"
              fill="var(--mainOrange)"
              fillOpacity="0.29"
            ></rect>
            <circle
              cx="21.7666"
              cy="21.7666"
              r="8.98856"
              stroke="var(--mainOrange)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
            <path
              d="M28.0183 28.7551L31.5423 32.27"
              stroke="var(--mainOrange)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className="xl:w-80 md:w-72 hidden md:block">
          <input
            type="search"
            className="form-control block w-full py-1.5 text-sm text-gray-700 bg-white bg-clip-padding border-r p-2 border-solid border-gray-200 transition ease-in-out mr-3 mt-1.5 focus:text-gray-700 focus:bg-white focus:border-none focus:outline-none"
            id="search-box"
            placeholder="نام محصول را جستجو کنید"
          />
        </div>
      </div>
     );
}
 
export default SearchBox;