import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  // Check if the item is favorited
  const hasFavorited = useMemo(() => {
    return currentUser?.favoriteIds?.includes(listingId) ?? false;
  }, [currentUser, listingId]);

  // Toggle the favorite status
  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        const request = hasFavorited
          ? () => axios.delete(`/api/favorites/${listingId}`)
          : () => axios.post(`/api/favorites/${listingId}`);

        await request();

        // Handle successful response and show appropriate toast
        toast.success(
          hasFavorited ? "Removed from favorites" : "Added to favorites"
        );

        // Optionally, refresh the page or the relevant data
        router.refresh();
      } catch (error) {
        console.error("Error toggling favorite:", error);
        toast.error("Something went wrong");
      }
    },
    [currentUser, loginModal, hasFavorited, listingId, router]
  );

  return { hasFavorited, toggleFavorite };
};

export default useFavorite;
