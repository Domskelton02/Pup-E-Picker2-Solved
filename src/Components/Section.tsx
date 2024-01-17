import { ReactNode } from "react";
import { useFavorite } from '../contexts/FavoriteContext';
import { useLoading } from '../contexts/LoadingContext';

export const Section = ({
  label,
  children,
}: {
  // No more props than these two allowed
  label: string;
  children: ReactNode;
}) => {
  const { favoriteCount } = useFavorite();
  const { loading } = useLoading();

  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${"active"}`}
            onClick={() => {
              alert("click favorited");
            }}
          >
            favorited ( {favoriteCount} )
          </div>
          {loading ? <div>Loading...</div> : children}
        </div>
      </div>
    </section>
  );
};