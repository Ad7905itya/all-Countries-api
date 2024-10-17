import { useContext } from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"

const Country = ({ flag, CountryName, population, region, capital , Country}) => {
    const [theme] = useContext(ThemeContext);
    return (
        <Link to={`/${CountryName}`} state={Country} className={theme? 'max-w-[17.5rem] bg-[var(--Dark-Blue)] rounded-lg overflow-hidden shadow-3xl hover:shadow-hover3xl hover:scale-[1.02] transition-all' : 'max-w-[17.5rem] bg-white rounded-lg overflow-hidden shadow-3xl hover:shadow-hover3xl hover:scale-[1.02] transition-all'}>
            <img src={flag} className="w-full object-cover h-48" />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-2">{CountryName}</h1>
                <p><b className="font-semibold text-sm">Population : &nbsp;</b>{population}</p>
                <p><b className="font-semibold text-sm">Region : &nbsp;</b>{region}</p>
                <p><b className="font-semibold text-sm">Capital : &nbsp;</b>{capital?.[0]}</p>
            </div>
        </Link>
    )
}

export default Country