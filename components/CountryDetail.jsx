import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import AllCountries from '../Data/Countries.json';
import CountryDetailShimmer from "./CountryDetailShimmer";
import ThemeContext from "../contexts/ThemeContext";

const CountryDetail = () => {
  const { CountryDetail } = useParams();
  const [CountryData, setCountryData] = useState(null);
  const { state } = useLocation();
  const [notFound, setNotFound] = useState(false);


  function UpdateCountryDetail(data) {
    setCountryData({
      CountryName: data.name.common || data.name,
      NativeName: data.nativeName || data.name.common || data.name,
      population: data.population.toLocaleString('en-IN'),
      region: data.region,
      subRegion: data.subregion,
      tld: data?.tld?.join(', ') || data?.topLevelDomain?.join(', '), 
      flag: data.flags.svg,
      capital: data.capital,
      languages: Object.values(data.languages || {}).join(', ') || Object.keys(Object.groupBy(state.languages, (lang) => lang.name)).join(', '),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(', '),
      borders: [],
    })
    if (data.borders) {
      Promise.all(data.borders.map(border => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then(res => res.json())
          .then(([borderCountries]) => {
            return borderCountries.name.common
          })
      })
      ).then((borders) => {
        setCountryData((prevState) => ({ ...prevState, borders }));
      })
    }
  }



  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${CountryDetail}?fullText=true`)
      .then(res => res.json())
      .then(([country]) => {
        if (country) {
          UpdateCountryDetail(country);
        }
      }).catch((err) => {
        console.log(err);
        setNotFound(true);
      })
  }, [CountryDetail])

  useEffect(() => {
    if (state) {
      UpdateCountryDetail(state);
      console.log(state);
    }
  }, [])

  if (notFound) {
    return <NotFound />
  }
  const [theme] = useContext(ThemeContext);
  return (
    <main className={theme ? 'p-10 bg-[var(--Very-Dark-Blue-one)] text-white min-h-screen' : 'p-10 bg-[var(--Very-Light-Gray) text-black min-h-scree'}>
      <section className="flex flex-wrap justify-between items-center gap-5 m-auto w-full max-w-[1280px]">
        <div className={theme ? 'w-24 bg-[var(--Dark-Blue)] shadow-3xl py-2 cursor-pointer px-5 shadow-gray-400 flex items-center justify-between rounded-xl' : 'w-24 bg-white shadow-3xl py-2 cursor-pointer px-5 flex items-center justify-between rounded-xl'} onClick={() => {
          history.back();
        }}>
          <i className="fa-arrow-left fas"></i> Back</div>
      </section>
      {
        !CountryData ? <CountryDetailShimmer /> : <section className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-16 lg:gap-2 m-auto w-full max-w-[1280px]">
          <div className="shadow-3xl shadow-gray-400 mt-10 rounded-xl max-w-md overflow-hidden">
            <img className="w-full object-cover" src={CountryData.flag} alt={CountryData.CountryName} />
          </div>
          <div className="px-5 w-full max-w-2xl">
            <h1 className="mb-4 font-bold text-2xl">{CountryData.CountryName}</h1>
            <div className="flex flex-wrap gap-10 w-full">
              <div>
                <p><b>Native Name :</b>{CountryData.NativeName}</p>
                <p><b>Population :</b>{CountryData.population}</p>
                <p><b>Region :</b>{CountryData.region}</p>
                <p><b>Sub Region :</b>{CountryData.subRegion}</p>
                <p><b>Capital :</b>{CountryData.capital}</p>
              </div>
              <div>
                <p><b>Top Level Domain :</b>&nbsp;&nbsp;{CountryData.tld}</p>
                <p><b>Currencies :</b>{CountryData.currencies}</p>
                <p><b>Languages :</b>{CountryData.languages}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-10"><b className="inline">Border Countries: &nbsp;</b>
              {CountryData.borders.map((border) => (
                <Link key={border} to={`/${border}`} className={theme ? 'bg-[var(--Dark-Blue)] py-1 px-3 shadow-3xl shadow-gray-400 rounded-md' : 'bg-white py-1 px-3 shadow-3xl shadow-gray-400 rounded-md'}>
                  {border}
                </Link>
              ))}
            </div>
          </div>
        </section>}
    </main>
  )
}


export default CountryDetail