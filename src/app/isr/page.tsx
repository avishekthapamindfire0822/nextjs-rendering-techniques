import fs from "fs/promises";
import path from "path";
import { Todo } from "../types";
import supabase from "../lib/supabase";

export const revalidate = 10;

export default async function ISRPage() {
  const { error, data: _todos } = await supabase
    .from("todo")
    .select("*")
    .order("created_at", {
      ascending: false,
    });
  const todos = _todos as Todo[];
  return (
    <>
      <h1 className="text-2xl tracking-wide font-semibold p-4">
        Incremental Static Regeneration - (ISR)
      </h1>
      <div className="flex flex-col gap-4 p-4">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="py-4 bg-slate-400 rounded text-white px-4"
            >
              {todo.title}
            </div>
          );
        })}
      </div>
    </>
  );
}
