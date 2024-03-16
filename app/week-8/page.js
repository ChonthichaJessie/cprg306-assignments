//Page for loging in = consumer
//Need a parent to be provider (higher one level) => chose layer.js
"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const isSignIn = () => {
    return (
      <div>
        <button onClick={firebaseSignOut}>Sign Out</button>
        <br />
        <Link href="./week-7" className="bg-red">
          Continue to your Shopping List
        </Link>
      </div>
    );
  };

  return (
    <main>
      <div className="m-2">
        <h1 className="text-3xl font-bold  text-white">
          Week 8 Shopping List App
        </h1>
        <p>{user ? "Hi! there!" : "Please sign in"}</p>
        {user && user.displayName}
        {user && user.email}
        <p>
          {user ? (
            isSignIn()
          ) : (
            <button onClick={gitHubSignIn}>Sign in Github</button>
          )}
        </p>
      </div>
    </main>
  );
};
export default Page;
