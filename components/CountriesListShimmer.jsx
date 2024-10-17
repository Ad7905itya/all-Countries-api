import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"

const CountriesListShimmer = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={theme? 'max-w-[17.5rem] mt-10 w-full bg-[--Dark-Mode] shadow-gray-400 rounded-lg overflow-hidden shadow-3xl mx-auto' : 'max-w-[17.5rem] mt-10 w-full bg-white rounded-lg overflow-hidden shadow-3xl mx-auto'}>
            <div className={theme? 'w-full h-48 bg-gray-500' : 'w-full h-48 bg-gray-400'}></div>
            <div className="p-4 flex flex-col gap-2">
                <h1 className={theme? 'text-2xl h-5 rounded-xl font-bold mb-2 bg-gray-600' : 'text-2xl h-5 rounded-xl font-bold mb-2 bg-gray-300'}></h1>
                <p className={theme?'bg-gray-600 h-4 w-3/4 rounded-xl': 'bg-gray-300 h-4 w-3/4 rounded-xl'}></p>
                <p className={theme?'bg-gray-600 h-4 w-3/4 rounded-xl': 'bg-gray-300 h-4 w-3/4 rounded-xl'}></p>
                <p className={theme?'bg-gray-600 h-4 w-3/4 rounded-xl': 'bg-gray-300 h-4 w-3/4 rounded-xl'}></p>
            </div>
        </div>
  )
}

export default CountriesListShimmer