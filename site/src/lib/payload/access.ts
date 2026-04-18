import type { Access } from "payload";

/** Allow admins and editors to mutate */
export const adminOrEditor: Access = ({ req }) => {
  const role = (req.user as { role?: string } | null | undefined)?.role;
  return role === "admin" || role === "editor";
};

/** Admin only */
export const adminOnly: Access = ({ req }) => {
  const role = (req.user as { role?: string } | null | undefined)?.role;
  return role === "admin";
};

/** Any authenticated user */
export const authenticated: Access = ({ req }) => Boolean(req.user);
