import { Star, StarHalf, Star as StarEmpty } from "lucide-react";

export const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  return (
    <div className="flex items-center space-x-1 mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="text-yellow-500 fill-yellow-500 w-5 h-5"
        />
      ))}
      {hasHalfStar && (
        <StarHalf className="text-yellow-500 fill-yellow-500 w-5 h-5" />
      )}
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map(
        (_, i) => (
          <StarEmpty key={`empty-${i}`} className="text-gray-300 w-5 h-5" />
        )
      )}
    </div>
  );
};
