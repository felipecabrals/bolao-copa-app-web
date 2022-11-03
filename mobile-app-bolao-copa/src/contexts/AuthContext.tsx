import { createContext, ReactNode } from 'react';

interface UserProps {
  name: string;
  avatarUrl: string;
}
export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log('logou')
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Felipe',
        avatarUrl: 'https://github.com/felipecabrals.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}