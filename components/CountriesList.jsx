import { useEffect, useState } from "react"
import Country from "./Country";
import AllCountries from '../Data/Countries.json'
import CountriesListShimmer from "./CountriesListShimmer";

const CountriesList = ({ Query }) => {
    const [Data, setData] = useState(null);

    useEffect(() => {
        setData(AllCountries);
    }, [])

    return (
        <section className="gap-10 grid grid-cols-3xl mx-auto mt-10 max-w-full">
            {!Data ? Array.from({ length: 15 }).map((el, i) => {
                return <CountriesListShimmer key={i} />
            }) : Data.filter((country) => {
                return country.name.toLowerCase().includes(Query) || country.region.toLowerCase().includes(Query)
            }).map((country) => {
                return <Country
                    key={country.name}
                    CountryName={country.name}
                    flag={country.flags.svg}
                    population={country.population.toLocaleString('en-IN')}
                    region={country.region}
                    capital={country.capital}
                    Country={country} />
            })
            }
        </section>
    )
}

export default CountriesList