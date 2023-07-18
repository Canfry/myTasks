import Todos from "../islands/Todos.tsx";

export default function Home() {
  return (
    <body className="bg-gray-200">
      <div className="mt-10 px-5 rounded bg-white mx-auto flex max-w-screen-md flex-col justify-center py-12">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold mb-5 text-center">Fresh Todos!</h2>
          <img className="mx-auto" src="/logo.svg" alt="Fresh Logo" />
        </div>
        <Todos />
      </div>
    </body>
  );
}
