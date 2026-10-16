import Image from "next/image";
import Hero from "./components/hero";

const Home = () => {

  return (
    <div>

      <Hero></Hero>
      
      <div>
        <h1 className="font-extrabold text-4xl">THE LIBRARY</h1>
        <p>
          Twelve lifts covering every major muscle group.
        </p>
      </div>

    </div>
  );
}
export default Home