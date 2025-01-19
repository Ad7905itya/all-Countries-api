import { useContext } from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"

const Country = ({ flag, CountryName, population, region, capital , Country}) => {
    const [theme] = useContext(ThemeContext);
    return (
        <Link to={`/${CountryName}`} state={Country} className={theme? 'max-w-[17.5rem] bg-[var(--Dark-Blue)] rounded-lg overflow-hidden shadow-3xl hover:shadow-hover3xl hover:scale-[1.02] transition-all' : 'max-w-[17.5rem] bg-white rounded-lg overflow-hidden shadow-3xl hover:shadow-hover3xl hover:scale-[1.02] transition-all'}>
            <img src={flag} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h1 className="mb-2 font-bold text-2xl">{CountryName}</h1>
                <p><b className="font-semibold text-sm">Population : &nbsp;</b>{population}</p>
                <p><b className="font-semibold text-sm">Region : &nbsp;</b>{region}</p>
                <p><b className="font-semibold text-sm">Capital : &nbsp;</b>{capital? capital : "N/A"}</p>
            </div>
        </Link>
    )
}

export default Country