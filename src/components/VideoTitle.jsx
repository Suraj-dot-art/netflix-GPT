

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">
        {title}
      </h1>
      <p className="py-6 text-s w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-14 text-xl rounded-lg hover:bg-opacity-70">
        ▶ Play
        </button >
        <button className="mx-2 bg-gray-500 text-white p-4 px-14 text-xl bg-opacity-50 rounded-lg">
         ℹ More Info 
        </button>
      </div>
    </div>
  )
}

export default VideoTitle