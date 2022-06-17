import { useRef, useEffect } from 'react'
import styled from 'styled-components'

import Button from './Button'

type VideoPlayerProps = {
    source: string
}

const VideoPlayer = ({ source }: VideoPlayerProps) => {
    const videoPlayer = useRef<null | HTMLMediaElement>(null)

    const playPauseVideo = () => {
        if (!videoPlayer.current) return

        videoPlayer.current.paused ? videoPlayer.current.play() : videoPlayer.current.pause()
    }

    const stopVideo = () => {
        if (!videoPlayer.current) return

        videoPlayer.current.pause()
        videoPlayer.current.currentTime = 0
    }

    return <>
        <StyledVideo controls ref={videoPlayer}>
            <source src={source} />
        </StyledVideo>
        <ControlsContainer>
            <Button
                text='P'
                onClick={playPauseVideo}
            />
            <Button
                text='S'
                onClick={stopVideo}
            />
        </ControlsContainer>
    </>
}    

const ControlsContainer = styled.div`
    display: inline-block;
    width: 60%;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 10px;
`

const StyledVideo = styled.video`
    width: 60%;
    border-radius: 10px;
`

export default VideoPlayer