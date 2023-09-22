import Form from "./components/Form";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md w-2/4">
        <h1 className="text-3xl font-semibold text-center mb-6">Name Prediction</h1>
        <Form />
      </div>
    </div>
  )
}
