import React from "react"

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/aa96d720-36a5-11ee-aa48-0d756f031946'
//   "https://public.herotofu.com/v1/d7f4f4a0-7813-11ed-a126-b172cf164538"

export default function Form(props) {

  const { darkMode } = props

  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit() {
    setTimeout(() => {
      setSubmitted(true)
    }, 100)
  }

  if (submitted) {
    return (
      <>
        <div className="text-xl p-4 font-semibold text-center">
          Thank you for your message!
        </div>
      </>
    )
  }
  //px-10 md:px-40 lg:px-80 xl:max-w-screen-xl items-center justify-center
  return (
    <div className={`${darkMode ? 'bg-slate-700 text-slate-300' : ''} pt-10 px-10 pb-10`}>
      <h1 className="px-10 md:px-20 pt-20 flex justify-center font-SpecialElite text-sm md:text-base">If you have a moment I would really apreciate a feedback or what you think about my project. 
      <br/>
      <br/>
      Also I am currently accepting new freelance clients, interesting project opportunities, and casual coffee chats.</h1>
      <div className="pt-10 md:flex md:justify-center">
        {/* <h1 className="pb-10 flex justify-center">Leave a Feedback</h1> */}
        <form
          className="p-4 bg-yellow-600 rounded-lg md:w-1/2"
          action={FORM_ENDPOINT}
          onSubmit={() => handleSubmit()}
          method="POST"
          target="_blank"
        >
          <label className="block mb-6" for="name">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="block w-full p-2 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-serif"
              required
            />
          </label>
          <label className="block mb-6" for="email">
            <input
              type="text"
              name="email"
              placeholder="Email@email.com"
              className="block w-full p-2 border-gray-400 rounded-lg shadow-sm font-serif"
              pattern="[^ @]*@[^ @]*"
              required
            />
          </label>
          <label className="block mb-6" for="message">
            <textarea
              name="message"
              placeholder="Your feedback here"
              className="block w-full h-40 p-2 rounded-lg shadow-sm font-serif"
            >
            </textarea>
          </label>
          <div className="mb-4">
            <button
              type="submit"
              className="submit-button h-10 px-5 text-white font-semibold rounded-lg border-2 border-yellow-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}