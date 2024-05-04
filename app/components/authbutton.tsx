import { signIn, signOut } from "next-auth/react";

export default function AuthButtons() {
  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
