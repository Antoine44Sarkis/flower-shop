"use client";
import Link from "next/link";
import React, { useState } from "react";

const Formes = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !image || !about || !name) {
      alert("please fill all informations");
      return;
    }
    if (password === "flowershop") {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("about", about);
      formData.append("image", image);

      try {
        const res = await fetch("/api/products", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (res.ok) {
          alert("Product added successfully!");
          setName("");
          setAbout("");
          setImage(null);
          setPreview(null);
          setPassword("");
        } else {
          alert("Error: " + data.message);
        }
      } catch (err) {
        console.error("Error submitting product:", err);
        alert("Something went wrong");
      }
    } else {
      alert("Incorrect password");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-600">
          Add Product
        </h2>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            id="name"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="about"
            placeholder="Enter description..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-sm file:font-semibold hover:file:bg-gray-100"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 h-40 object-cover rounded border border-gray-300"
            />
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
        <Link href={"/"}>
          <div className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
            Click here to go back Home
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Formes;
