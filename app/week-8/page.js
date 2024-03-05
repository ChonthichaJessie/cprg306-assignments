//Page for loging in = consumer
//Need a parent to be provider (higher one level) => chose layer.js
"use client";

import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return(
    <div>
        <h1>Week 8</h1>
        <p>{user ? "Hi! there!" : "Please sign in"}</p>
        {user && user.displayName}
        {user && user.email}
        <p>
            {user?(<button onClick={firebaseSignOut}>Sign Out</button>):(<button onClick={gitHubSignIn}>Sign in Github</button>)}
        </p>

    </div>
  )

};
export default Page;