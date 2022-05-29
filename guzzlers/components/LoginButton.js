export default function LoginButton({ user }) {
  return (
    <a
      className="absolute top-0 right-0 mt-4 mr-4 rounded-3xl shadow-md text-white bg-neutral-800 p-4 font-bold text-2xl"
      href={user ? "/dashboard" : "/signIn"}
    >
      Dashboard
    </a>
  );
}
