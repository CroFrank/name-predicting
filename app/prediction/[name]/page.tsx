import { countrysList } from "@/app/_countries-list/c-list";
import Link from "next/link";

interface Params {
    params: { name: string }
}

interface Country {
    country_id: string
    probability: number
}

const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io?name=${name}`);
    return res.json();
};

const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    return res.json();
};

const getPredictedNationality = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io?name=${name}`);
    return res.json();
};

export default async function Prediction({ params }: Params) {
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const nationalityData = getPredictedNationality(params.name);
    const [age, gender, nationality] = await Promise.all([
        ageData,
        genderData,
        nationalityData,
    ]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                        Here are stats and most common cases for name <b>{params.name}:</b>
                    </div>
                    <div className="block mt-1 text-lg leading-tight font-medium text-black">
                        Age: <b>{age?.age}</b>
                    </div>
                    <div className="block mt-1 text-lg leading-tight font-medium text-black">
                        Gender: <b>{gender?.gender}</b> with a probability off: {gender?.probability * 100}%
                    </div>
                    <div className="block mt-1 text-lg leading-tight font-medium text-black">
                        Nationality: {nationality?.country.map((c: Country) => {
                            return <div key={crypto.randomUUID()}>
                                <p className="inline">
                                    <b>{countrysList.filter((v) => (v.code === c.country_id)).length === 0 ? c.country_id : countrysList.filter((v) => (v.code === c.country_id))[0].name}</b>
                                </p> -
                                <p className="inline"> with a probability of {(c.probability * 100).toFixed(2)}%</p>
                            </div>
                        })}
                    </div>
                    <div className="block mt-1 text-lg leading-tight font-medium text-black">
                        <b>{gender?.count}</b> people with name {params.name} in the world
                    </div>
                </div>
                <Link href={'/'} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">New name request?</Link>
            </div>
        </div>
    );
}