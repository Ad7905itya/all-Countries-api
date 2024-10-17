import { useContext, useState } from "react";
import CountriesList from "./CountriesList";
import SearchBar from "./SearchBar";
import SelectRegion from "./SelectRegion";
import ThemeContext from "../contexts/ThemeContext";

const Home = () => {
    const [Query, setQuery] = useState("");
    const [theme] = useContext(ThemeContext);
    return (
        <main className={theme? 'p-10 bg-[var(--Very-Dark-Blue-one)] text-white min-h-screen' : 'p-10 bg-[var(--Very-Light-Gray)] min-h-screen'}>
            <section className="flex justify-between items-center flex-wrap gap-5 max-w-[1280px] w-full m-auto">
                <SearchBar setQuery={setQuery}/>
                <SelectRegion setQuery={setQuery}/>
            </section>
            <div className="max-w-[1280px] w-full m-auto flex">
            <CountriesList Query={Query}/>
            </div>
        </main>
    )
}

export default Home