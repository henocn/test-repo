import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Hello Vite + React + TailwindCSS!
        </h1>
        <p className="mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </div>
    </>
  )
}

export default App
