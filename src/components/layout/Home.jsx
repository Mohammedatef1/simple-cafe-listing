import { useState } from "react";
import { default as img1, default as img7 } from "../../assets/1.jpg";
import { default as img2, default as img8 } from "../../assets/2.jpg";
import { default as img3, default as img9 } from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import cover from "../../assets/cover.jpg";
import data from "../../assets/data.json";
import Card from "../ui/card";

const Home = () => {
  const [isSelected, setIsSelected] = useState("all");
  return (
    <main>
      <div className=" h-64 overflow-hidden -z-10 absolute top-0 left-0">
        <img
          src={cover}
          alt="cover"
          className=""
        />
      </div>
      <section className="mt-32 bg-zinc-800 rounded-md mx-16 py-16 mb-12">
        <h1 className="text-4xl text-white font-bold text-center">Our Collection</h1>
        <p className="text-zinc-500 font-bold m-auto text-center md:w-1/2 lg:w-1/3  w-3/4 mt-4">Recycle Bin Icon Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins expertly roasted in small batches and shipped fresh weekly.</p>
        <div className="flex items-center justify-center gap-4 text-white font-semibold mt-6">
          <button
            onClick={() => {
              setIsSelected("all");
            }}
            className={`px-3 py-2 ${isSelected == "all" ? "bg-zinc-500" : ""} rounded-md transition`}>
            All products
          </button>
          <button
            onClick={() => {
              setIsSelected("available");
            }}
            className={`px-3 py-2 ${isSelected == "available" ? "bg-zinc-500" : ""} rounded-md transition`}>
            Available now
          </button>
        </div>
        <div className="mt-4 flex flex-wrap mx-24">
          {data.items.map((item, index) => {
            if (isSelected === "all" || (isSelected === "available" && item.available)) {
              return (
                <Card
                  key={item.id}
                  className="w-full md:w-1/2 lg:w-1/3"
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                  votes={item.votes}
                  available={item.available}
                  img={index === 0 ? img1 : index === 1 ? img2 : index === 2 ? img3 : index === 3 ? img4 : index === 4 ? img5 : index === 5 ? img6 : index === 6 ? img7 : index === 7 ? img8 : img9}
                  popular={item.popular}
                />
              );
            }
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
