import React, {useState} from 'react';

const SearchCities = () => {
    const [location, setLocation] = useState("Florida");

    return (
        <div className = "SearchCities">
            <form>
                <label htmlFor = "location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location" 
                        onChange = {e => setLocation(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchCities;