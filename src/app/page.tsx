import Hero from "./components/hero";

const Home = () => {

  return (
    <div>

      <Hero></Hero>

      <section className="max-w-7xl mx-auto px-2">

        <div>
          <h1 className="font-extrabold text-4xl">THE LIBRARY</h1>
          <p className="font-light text-sm --font-geist-sans my-0.5 md:my-2.5">
            Twelve lifts covering every major muscle group.
          </p>
        </div>



      </section>

    </div>
  );
}
export default Home;