import { Head } from "https://deno.land/x/fresh@1.2.0/runtime.ts";
import Todos from "../islands/Todos.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Tasks with Fresh</title>
      </Head>
      <body className="bg-gray-200">
        <div className="my-10 px-5 rounded bg-white mx-auto flex max-w-screen-md flex-col justify-center py-12 h-[100%]">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-5 text-center">MY TASKS</h2>
            {/* <img className="mx-auto" src="/logo.svg" alt="Fresh Logo" /> */}
          </div>
          <Todos />
        </div>
      </body>
    </>
  );
}
