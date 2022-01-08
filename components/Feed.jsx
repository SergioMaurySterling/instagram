import Stories from "./Stories"
import Posts from "./Posts"

export default function Feed() {
  return (
    <main className="grid gird-cols-1 md:grid-cols-2
    md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">

      {/* Section Left */}
      <section className='col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      {/* Section right */}
      <section>
        {/* Mini profile */}
        {/* Suggestion */}
      </section>

    </main>
  )
}
