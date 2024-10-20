import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const SearchBar = ({setQuery}) => {
    const [theme] = useContext(ThemeContext);
    const InputValue = (e) => {
        setQuery(e.target.value.toLowerCase());
    }
    return (
        <div className={theme? 'flex justify-between max-w-md shadow-3xl shadow-[rgba(0,0,0,0.1)] bg-[var(--Dark-Blue)] rounded-xl overflow-hidden w-full' : 'flex justify-between max-w-md shadow-3xl shadow-[rgba(0,0,0,0.1)] bg-white rounded-xl overflow-hidden w-full'}>
            <i className="fas fa-search text-xl p-4"></i>
            <input type="text" onChange={InputValue} className={theme? 'flex-grow text-lg font-medium outline-none bg-[var(--Dark-Blue)] py-3 px-2 placeholder:text-gray-400' : 'flex-grow text-lg font-medium outline-none py-3 px-2 placeholder:text-gray-400'} placeholder="Search for Country..." />
        </div>
    )
}

export default SearchBar