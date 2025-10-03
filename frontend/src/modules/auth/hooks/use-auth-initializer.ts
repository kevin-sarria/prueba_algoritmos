// hooks/useAuthInitializer.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { TokenDecodeInformation } from '../types/auth';
import { validateToken } from '../../../core/utils/token-validation';
import { resetUser, setUser } from '../../../core/state/slices/app-slice';

/**
 * Hook that initializes authentication state on app load.
 * - Checks if a valid token exists in localStorage.
 * - If valid, dispatches setUser to update Redux.
 * - If invalid or expired, clears Redux state and removes token.
 */
export const useAuthInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user: TokenDecodeInformation | null = validateToken(token);

    if (user) {
      // Update Redux state with authenticated user
      dispatch(setUser(user));
    } else {
      // Clear Redux state and remove expired/invalid token
      dispatch(resetUser());
      localStorage.removeItem('token');
    }
  }, [dispatch]);
};
