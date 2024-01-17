import { FavoriteProvider } from '../contexts/FavoriteContext';
import { LoadingProvider } from '../contexts/LoadingContext';
import App from './App';

const Root = () => {
  return (
    <FavoriteProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </FavoriteProvider>
  );
};

export default Root;