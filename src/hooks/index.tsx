import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { ProductsProvider } from "../contexts/products";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};
