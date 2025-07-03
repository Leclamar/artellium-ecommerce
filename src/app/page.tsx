import Navbar from "../components/Navbar";
import Artwork from "../components/Artwork"
import Commission from "../components/Commission"

const Homepage = () => {
  return (
    <>
      <div className="max-w-screen">
        <Navbar />
        <main className="pb-4">
          <div id="banner" className="border max-w-screen h-96">

          </div>
          <article className="mx-24 max-w-screen">
            <section className="mt-12 text-center">
              <header className="mb-10">
                <h2 className="font-bold text-2xl">Our Talented Artist’s Artworks</h2>
              </header>

              <section className="items my-10">
                <Artwork />
                <Artwork />
                <Artwork />
                <Artwork />
                <Artwork />
                <Artwork />
              </section>

              <button className="btn-dark-blue text-center mt-10">See More</button>
            </section>
              
            <section className="mt-12 text-center">
              <header className="mb-10">
                <h2 className="font-bold text-2xl">Available Commissions</h2>
              </header>

              <section className="items my-10">
                <Artwork />
                <Artwork />
                <Artwork />
                <Artwork />
                <Artwork />
                <Artwork />
              </section>

              <button className="btn-dark-blue text-center mt-10">See More</button>
            </section>
          </article>
        </main>
      </div>
    </>
    
  );
}

export default Homepage