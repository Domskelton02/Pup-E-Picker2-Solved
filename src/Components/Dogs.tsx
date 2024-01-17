import { useState, useEffect } from "react";
import { DogCard } from "./DogCard";

export const Dogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    const response = await fetch("http://localhost:3000/dogs");
    const dogs = await response.json();
    setDogs(dogs);
  };

  return (
    <>
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </>
  );
};