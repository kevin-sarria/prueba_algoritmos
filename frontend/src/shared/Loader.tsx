import { Spinner } from "flowbite-react"

export const Loader = () => {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
        <Spinner />
    </div>
  )
}
