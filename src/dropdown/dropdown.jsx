import React, { useState } from "react";

const SearchDropdown = ({cities,searchLocation,loader}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [location, setLocation] = useState('')
  // Filter options based on the search term
  const filteredOptions = cities.filter((city) =>
    city.toLowerCase().includes(location.toLowerCase())
  );
  

  return (
    <div>
      {/*dropdown for searching cities*/ }
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Enter Location"
        type="text"
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setIsDropdownOpen(false)}
        className="dropdown-input"
      />
      {isDropdownOpen && (
        <ul
          style={{
            position:"absolute",
            border: "1px solid #ccc",
            maxHeight: "150px",
            overflowY: "auto",
            left:"41.5%",
            minWidth:"260px",
            cursor:"pointer",
            zIndex: 1000,
            background:'rgba(0, 0, 0, 0.508)'
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onMouseDown={() => {
                  setLocation(option);
                  setIsDropdownOpen(false);
                  searchLocation(option)
                }}
              >
                {option}
              </li>
            ))
          ) : (
            loader?
            <li>No options found</li>
            :<li>please wait cities are loading...</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
