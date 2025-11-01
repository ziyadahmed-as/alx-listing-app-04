import axios from "axios";
import { useState, useEffect } from "react";

const ReviewSection = ({ propertyId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">Guest Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border p-3 rounded-lg bg-gray-50">
          <p className="font-medium">{review.userName}</p>
          <p className="text-gray-600 text-sm">{review.comment}</p>
          <p className="text-yellow-500 font-semibold mt-1">
            ⭐ {review.rating}/5
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
