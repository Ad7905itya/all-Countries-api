const CountryDetailShimmer = () => {
    return (
        <section className="flex items-center justify-between gap-16 lg:gap-2 max-w-[1280px] w-full m-auto flex-wrap lg:flex-nowrap">
            <div className="max-w-md w-full  mt-10 shadow-3xl shadow-gray-400 rounded-xl overflow-hidden h-56 bg-gray-300">
            </div>
            <div className="max-w-2xl w-full px-5">
                <div className=" mb-4 rounded-xl w-full h-8 bg-gray-300"></div>
                <div className="flex w-full flex-wrap gap-10">
                    <div className="w-full flex flex-col gap-2">
                        <p className="w-3/4 h-6 rounded-xl bg-gray-300"></p>
                        <p className="w-3/4 h-6 rounded-xl bg-gray-300"></p>
                        <p className="w-1/2 h-6 rounded-xl bg-gray-300"></p>
                        <p className="w-1/2 h-6 rounded-xl bg-gray-300"></p>
                        <p className="w-3/4 h-6 rounded-xl bg-gray-300"></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountryDetailShimmer