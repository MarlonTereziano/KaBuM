//React Imports
import {
    createContext,
    useCallback,
    useContext,
    ReactNode,
    useState,
  } from "react";
  
  //Interface Imports
  import { IProducts } from "../interfaces/Products";

  //API
  import api from "../services/api";
  
  interface ProductsContextData {
    getProducts: (credentials: IProducts) => Promise<void>;
    // products: IProducts | null;
  }
  
  interface ProductsProviderProps {
    children: ReactNode;
  }
  
  const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);
  
  const ProductsProvider: React.FC<ProductsProviderProps> = ({ children}) => {
    console.log("getProducts");
  

    const getProducts = useCallback(async () => {
        console.log("dentro");
        
      const response = await api.get("products");
      let products = response.data;
      console.log(products[0].description);
    }, []);
  

    return (
      <ProductsContext.Provider
        value={{
          getProducts,
        }}
      >
        {children}
      </ProductsContext.Provider>
    );
  };
  
  function useProducts(): ProductsContextData {
    const context = useContext(ProductsContext);
    console.log("useProducts");
    
    if (!context) {
      throw new Error("useAuth must be used within an ProductsProvider");
    }
  
    return context;
  }
  
  export { ProductsProvider, useProducts };
  