import { useRef, useEffect } from 'react'
import styled from 'styled-components'

import Button from './Button'

type VideoPlayerProps = {
    source?: string
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

    const minusFiveSeconds = () => {
        if (!videoPlayer.current) return

        videoPlayer.current.currentTime -= 5
    }

    const plusFiveSeconds = () => {
        if (!videoPlayer.current) return

        videoPlayer.current.currentTime += 5
    }

    const testAPI = () => {
        if (!videoPlayer.current) return

        console.log('DURATION', videoPlayer.current.duration)
        console.log('CURRENT TIME', videoPlayer.current.currentTime)
        console.log('PLAYBACK RATE', videoPlayer.current.playbackRate)
    }

    return <>
        <StyledVideo controls ref={videoPlayer} id='video-player'>
            <source src={source} />
        </StyledVideo>
        <ControlsContainer>
            <Button
                text='-5'
                onClick={minusFiveSeconds}
            />
            <Button
                text='P'
                onClick={playPauseVideo}
            />
            <Button
                text='S'
                onClick={stopVideo}
            />
            <Button
                text='+5'
                onClick={plusFiveSeconds}
            />
            <Button
                text='TEST'
                onClick={testAPI}
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