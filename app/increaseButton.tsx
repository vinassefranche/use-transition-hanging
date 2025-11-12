'use client'
import { useRouter } from "next/navigation";
import { increaseCounter } from "./backend";
import { useTransition } from "react";

export const IncreaseButton = () => {
  const router = useRouter()
  const [loading, startTransition] = useTransition();
  return (
    <button className="bg-gray-200 p-1" onClick={() => {
      startTransition(async () => {
        console.log('increasing')
        await increaseCounter();
        router.refresh()
      })
    }}>{loading ? 'loading...' : 'increase counter'}</button>
  );
}
