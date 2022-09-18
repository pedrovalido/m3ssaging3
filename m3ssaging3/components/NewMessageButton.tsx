import { useRouter } from 'next/router'

const NewMessageButton = (): JSX.Element => {
  const router = useRouter()

  const onNewMessageButtonClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let path = window.location.pathname
    if (path.includes("contacts")){
      router.push('/contacts/')
    } else{
    router.push('/dm/')
  }
  }
  let path = window.location.pathname
  if (path.includes("contacts")){
    return (
      <button
        className="inline-flex items-center h-7 md:h-6 px-4 py-1 my-4 bg-cyan-400/75 border border-cyan-600 hover:bg-cyan-300/75 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-n-100 focus-visible:ring-offset-cyan-400/75 focus-visible:border-n-100 focus-visible:outline-none active:bg-cyan-400/75 active:border-cyan-600 active:ring-0 text-sm md:text-xs md:font-semibold tracking-wide text-white rounded"
        onClick={onNewMessageButtonClick}
      >
        + New Contact
      </button>
    )
  }
  return (
    <button
      className="inline-flex items-center h-7 md:h-6 px-4 py-1 my-4 bg-cyan-400/75 border border-cyan-600 hover:bg-cyan-300/75 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-n-100 focus-visible:ring-offset-cyan-400/75 focus-visible:border-n-100 focus-visible:outline-none active:bg-cyan-400/75 active:border-cyan-600 active:ring-0 text-sm md:text-xs md:font-semibold tracking-wide text-white rounded"
      onClick={onNewMessageButtonClick}
    >
      + New Message
    </button>
  )
}

export default NewMessageButton
