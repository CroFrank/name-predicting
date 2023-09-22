import BackToTopBtn from "../components/BackToTopBtn"
import { countrysList } from "../_countries-list/c-list"

export default function Countries() {
    return <>
        <div className="mt-4 overflow-x-auto max-w-screen-lg mx-auto flex justify-center mb-10">
            <table className="min-w-max bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700">Country Name</th>
                        <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-700">Alpha-2</th>
                    </tr>
                </thead>
                <tbody>
                    {countrysList.map((c) => {
                        return <tr key={crypto.randomUUID()}>
                            <td className="py-2 px-4">{c.name}</td>
                            <td className="py-2 px-4">{c.code}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <BackToTopBtn />
        </div >

    </>
}


