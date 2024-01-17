import { useState } from "react";
import { dogPictures } from "../dog-pictures";
import { Dog } from "../types";

export const CreateDogForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setDescription("");
    setSelectedImage(dogPictures.BlueHeeler);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newDog = {
      name,
      description,
      image: selectedImage,
      isFavorite: false,
    };

    try {
      await postDog(newDog);
      resetForm();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form id="create-dog-form" onSubmit={handleSubmit}>
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        name="name"
        value={name}
        disabled={isLoading}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="description">Dog Description</label>
      <textarea
        name="description"
        value={description}
        cols={80}
        rows={10}
        disabled={isLoading}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label htmlFor="picture">Select an Image</label>
      <select
        name="picture"
        value={selectedImage}
        disabled={isLoading}
        onChange={(e) => setSelectedImage(e.target.value)}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => (
          <option value={pictureValue} key={pictureValue}>
            {label}
          </option>
        ))}
      </select>
      <input type="submit" value="submit" disabled={isLoading} />
    </form>
  );
};

const postDog = async (dog) => {
  const apiUrl = 'http://localhost:3000/api/dogs';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dog),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Dog created successfully:', data);
    return data;
  } catch (error) {
    console.error('Error creating new dog:', error);
    throw error;
  }
};

