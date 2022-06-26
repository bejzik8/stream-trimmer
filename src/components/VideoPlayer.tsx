import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Hls from 'hls.js'

import Button from './Button'

const src = 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'

type VideoPlayerProps = {
    source?: string
}

interface HTMLMediaElementWithCaputreStream extends HTMLMediaElement {
    captureStream(): MediaStream
}

const VideoPlayer = ({ source }: VideoPlayerProps) => {
    const videoPlayer = useRef<null | HTMLMediaElementWithCaputreStream>(null)

    useEffect(() => {
        getHLS()
    }, [videoPlayer.current])
  
    const getHLS = () => {
      if (Hls.isSupported() && videoPlayer.current) {
        const hls = new Hls()
        console.log(hls)
  
        hls.attachMedia(videoPlayer.current)
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          console.log('video and hls.js are now bound together !')
          hls.loadSource(src)
          hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            console.log(
              'manifest loaded, found ' + data.levels.length + ' quality level'
            )
          })
        })
      }
    }

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

    const startRecording = () => {
        if (!videoPlayer.current) return

        const recordedChunks: any[] = []

        const stream = videoPlayer.current.captureStream()

        console.log(stream)

        const newMediaRecorder = new MediaRecorder(stream)

        const download = () => {
            const blob = new Blob(recordedChunks)
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            document.body.appendChild(a)
            a.style.cssText = 'display: none'
            a.href = url
            a.download = 'test.webm'
            a.click()
            window.URL.revokeObjectURL(url)
        }

        const handleDataAvailable = event => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data)
                download()
            }
        }
        
        newMediaRecorder.ondataavailable = handleDataAvailable
        newMediaRecorder.start()

        console.log(newMediaRecorder)

        setTimeout(() => {
            newMediaRecorder.stop()
        }, 5000)
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
            <Button
                text='REC B'
                onClick={startRecording}
            />
            <Button
                text='REC E'
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