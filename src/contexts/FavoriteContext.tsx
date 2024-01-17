import { createContext, useContext, useState } from 'react';

interface FavoriteContextProps {
    favoriteCount: number;
    setFavoriteCount: React.Dispatch<React.SetStateAction<number>>;
}

export const FavoriteContext = createContext<FavoriteContextProps | undefined>(undefined);

export const FavoriteProvider: React.FC = ({ children }) => {
    const [favoriteCount, setFavoriteCount] = useState(0);

    return (
        <FavoriteContext.Provider value={{ favoriteCount, setFavoriteCount }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error('useFavorite must be used within a FavoriteProvider');
    }
    return context;
};