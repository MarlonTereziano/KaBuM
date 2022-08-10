import {
    createContext,
    useCallback,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from 'react';
import { IUser } from '../interfaces/User';
import api from "../services/api";

interface AuthContextData {
    signIn: (email: string) => Promise<void>;
    user: IUser | null;
    signOut: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children })  => {
    const [user, setUser] = useState<IUser | null>(null);

    const signIn = useCallback(async (email: string) => {
        const getUsers = await api.get<IUser[]>('/users');
        const userData = getUsers.data.find((user) => user.email === email);

        if (!userData) throw new Error('Usuário não encontrado');

        const userWithType = {
            ...userData,
            type: 'user',
        };

        localStorage.setItem('@Kabum:USER', JSON.stringify(userWithType));
        setUser(userWithType as IUser);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@Kabum:USER');
        setUser(null);
    }, []);

    useEffect(() => {
        const userString = localStorage.getItem('@Kabum:USER');
        console.log(user);

        if (userString && !user) {
            setUser(JSON.parse(userString));
        }
    }, [user]);

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
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };