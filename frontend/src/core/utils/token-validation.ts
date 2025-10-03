// authService.ts
import { jwtDecode } from "jwt-decode";
import type { JwtPayloadWithExp, TokenDecodeInformation } from "../../modules/auth/types/auth";

/**
 * Validates a JWT token.
 * - Returns decoded user information if token is valid and not expired.
 * - Returns null if token is missing, invalid, or expired.
 *
 * @param token - JWT token string from storage or memory
 * @returns Decoded user information or null
 */
export const validateToken = (
  token: string | null
): TokenDecodeInformation | null => {
  if (!token) return null;

  const decoded: JwtPayloadWithExp = jwtDecode(token);
  const now = Date.now() / 1000; // current time in seconds

  if (decoded.exp && decoded.exp > now) {
    // Token is valid and not expired
    const { id, name, email, role } = decoded;
    return { id, name, email, role };
  } else {
    // Token has expired
    return null;
  }
};
