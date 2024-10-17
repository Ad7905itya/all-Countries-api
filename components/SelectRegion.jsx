import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext";

const SelectRegion = ({setQuery}) => {
    const SelectValue = (e) =>{
        setQuery(e.target.value.toLowerCase())
    }
    
    const [theme] = useContext(ThemeContext);
    return (
        <select name="filter" className={theme? 'py-3 px-4 shadow-3xl shadow-[rgba(0,0,0,0.1)] bg-[var(--Dark-Blue)] rounded-lg outline-none' : 'py-3 px-4 shadow-3xl shadow-[rgba(0,0,0,0.1)] rounded-lg outline-none'} onChange={SelectValue}>
            <option hidden>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default SelectRegion