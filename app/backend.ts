'use server'

export const fakeDataRetrieval = async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 10))
}

export const serverAction = async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 10))
}
