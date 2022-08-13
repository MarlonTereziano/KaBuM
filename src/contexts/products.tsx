//React Imports
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from "react";

//Interfaces Imports
import { IProducts } from "../interfaces/Products";

//Interfaces Context
interface ProductsProviderProps {
  children: ReactNode;
}
interface ProductsContextData {
  products: IProducts[];
  addProducts: (data: IProducts) => void;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);
const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const addProducts = useCallback(
    async (data: IProducts) => {
      setProducts([...products, data]);
      console.log(products.length);
    },
    [products, setProducts]
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts(): ProductsContextData {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }
  return context;
}

export { ProductsProvider, useProducts };
