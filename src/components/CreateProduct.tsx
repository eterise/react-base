import axios from "axios";
import React, { useState } from "react";
import { IProducts } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProducts = {
  title: "",
  price: 13,
  description: "Hello bro",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  category: "other",
  rating: {
    rate: 10,
    count: 5,
  },
};
interface CreateProductProps {
  onCreate: (product: IProducts) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [titleValue, setTitleValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (titleValue.trim().length === 0) {
      setError("Error");
      return;
    }
    productData.title = titleValue;

    const response = await axios.post<IProducts>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full"
        placeholder="Enter..."
        value={titleValue}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:bg-green-600"
      >
        Create
      </button>
    </form>
  );
}
