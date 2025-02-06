function Search() {
  return (
    <>
      <div className="flex gap-6">
        <div>
          <input
            type="text"
            name=""
            id=""
            className="hidden lg:block bg-[#F4F4F5] rounded-full p-1 border border-gray-400 placeholder:font-sans placeholder:p-4 "
            placeholder="Search"
          />
        </div>
        <div className="items-center justify-center flex lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 4.5H3"
              stroke="#5B6176"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 9.5H11.53"
              stroke="#5B6176"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 14.5H3"
              stroke="#5B6176"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 19.5H11.53"
              stroke="#5B6176"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Search;
