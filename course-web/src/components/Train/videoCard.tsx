import React from 'react'
interface Video {
  image: string
  name: string
}
interface Props {
  video: Video
}
const VideoCard: React.FC<Props> = ({video}) => {
  return (
    <>
      <div className="video-card" style={{backgroundImage: `url(${video.image})`}}>
        <div className="video-card-bottom">{video.name}</div>
      </div>
    </>
  )
}

export default VideoCard
