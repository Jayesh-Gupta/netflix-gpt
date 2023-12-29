const VideoTitle=({title,overview})=>{

    return(<div className="py-[30%] px-4 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
            <h1 className="w-full font-bold text-3xl ">{title}</h1>
            <p className="w-1/2 ">{overview}</p>
            <div className="mt-2">
                <button className="py-1 px-6 bg-white text-black rounded-lg text-lg">Play</button>
                <button className="m-2 py-1 px-6 bg-gray-500 rounded-lg text-lg bg-opacity-50">more info</button>
            </div>
    </div>);

}
export default VideoTitle;
// top-2/3 pl-5 w-1/2