export interface User {
  uid: string;
  email: string;
  role?: string;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
  authLoading?: boolean;
}
