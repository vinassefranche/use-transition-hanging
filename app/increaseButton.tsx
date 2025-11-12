'use client'
import { useRouter } from "next/navigation";
import { increaseCounter } from "./backend";
import { useTransition } from "react";

export const IncreaseButton = () => {
  const router = useRouter()
  const [loading, startTransition] = useTransition();
  return (
    <button className="bg-gray-200 px-4 py-1 rounded-xl hover:bg-gray-300 cursor-pointer" onClick={() => {
      startTransition(async () => {
        await increaseCounter();
        router.refresh()
      })
    }}>{loading ? 'loading...' : 'increase counter'}</button>
  );
}
