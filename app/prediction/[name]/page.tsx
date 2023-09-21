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
                            <p className="inline"><b>{c.country_id}</b></p> -
                            <p className="inline"> with a probability of {(c.probability * 100).toFixed(2)}%</p>
                        </div>
                    })}
                </div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black">
                    <b>{gender?.count}</b> people with name {params.name} in the world
                </div>
            </div>
        </div>
    );
}