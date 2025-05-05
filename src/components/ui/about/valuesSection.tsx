import { FC } from "react"

export const ValuesSection: FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-rose-50 rounded-3xl my-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Values</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold">Curiosity</h3>
          <p className="text-gray-600 mt-2">Always exploring new ideas and tools.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Empathy</h3>
          <p className="text-gray-600 mt-2">Design with the user in mind, always.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Adaptability</h3>
          <p className="text-gray-600 mt-2">Thriving in diverse, remote teams.</p>
        </div>
      </div>
    </section>
  )
}

  