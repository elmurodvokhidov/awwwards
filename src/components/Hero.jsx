import { useRef, useState } from "react"

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVdRef = useRef(null);

    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(prev => prev + 1);
    }

    const getVdSrc = (index) => `videos/hero-${index}.mp4`;

    const handleVdLoad = () => {
        setLoadedVideos(prev => prev + 1);
    }

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref={nextVdRef}
                                src={getVdSrc(currentIndex + 1)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVdLoad}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}