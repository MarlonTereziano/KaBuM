import {
  createContext,
  useCallback,
  useContext,
  ReactNode,
  useState,
} from "react";
import { IUser } from "../interfaces/User";
import { ILogin } from "../interfaces/Login";
import api from "../services/api";

interface AuthContextData {
  signIn: (credentials: IUser) => Promise<void>;
  user: IUser | null;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<ILogin | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const signIn = useCallback(async (data: IUser) => {
    setAuthLoading(true);
    try {
      let response = await api.put("/users/1",{
          email: data.email,
          password: data.password,
          profile: data.image_profile,
          adress: data.adress,
          image_profile: data.image_profile,
      });

      await localStorage.setItem("@KaBuM:user", JSON.stringify(response.data.email));

      setUser({
        email: response.data.email, 
        password: response.data.password, 
        name: response.data.name,
        adress: response.data.adress,
        image_profile: response.data.image_profile,
    });
      setAuthLoading(false);
    } catch (error) {
      alert(error);
    }
  }, []);

  const signOut = useCallback(() => {
    try{
        localStorage.removeItem("@KaBuM:user");
        setUser(null);
    }catch(error){
        alert(error);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
