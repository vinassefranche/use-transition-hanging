'use server'

let counter = 0
export const getCounter = async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 700))
  return counter
}

export const increaseCounter = async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 300))
  counter++
}
