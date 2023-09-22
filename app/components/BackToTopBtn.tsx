'use client'
export default function BackToTopBtn() {
    return <button
        id="back-to-top"
        className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    </button>
}