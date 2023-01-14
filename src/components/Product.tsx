import { useState } from "react";
import { IProducts } from "../models";

interface ProductProps {
  product: IProducts;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnClassName = details
    ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      {/* <p>{product.description}</p> */}
      
      <p className="font-bold">{product.price}</p>

      <button
        className={btnClassName}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide" : "Show"}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}
