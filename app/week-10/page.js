"use client";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      router.back();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center ">
      <header className="mb-8 text-center">
        {!user ? (
          <>
            <h1 className="text-4xl font-bold mb-4">Welcome to the Shopping List App</h1>
            <section>
              <button
                onClick={handleLogin}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 font-semibold"
              >
                Sign in with GitHub
              </button>
            </section>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-2">Welcome</h1>
            <p className="text-gray-700 mb-4">{user.email}</p>
          </>
        )}
      </header>

      {user && (
        <section className="flex flex-col items-center gap-4">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition-colors duration-200 font-semibold"
          >
            Sign Out
          </button>

          <Link
            href="/week-10/shopping-list"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Go to Shopping List
          </Link>
        </section>
      )}
    </main>
  );
}
