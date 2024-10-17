import { useEffect, useState } from "react"
import Country from "./Country";
import CountriesListShimmer from "./CountriesListShimmer";

const CountriesList = ({ Query }) => {
    const [Data, setData] = useState(null);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then((AllCountries) => {
                setData(AllCountries);
            })
    }, [])

    return (
        <section className="grid mt-10 max-w-full grid-cols-3xl gap-10 mx-auto">
            {!Data ? Array.from({length: 15}).map((el,i)=>{
                return <CountriesListShimmer key={i}/>
            }) : Data.filter((country) => {
                    return country.name.common.toLowerCase().includes(Query) || country.region.toLowerCase().includes(Query)
                }).map((country) => {
                    return <Country key={country.name.common} CountryName={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital} Country={country}/>
                })
            }
        </section>
    )
}

export default CountriesList