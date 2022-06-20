import { useEffect } from 'react'
import styled from 'styled-components'
import Hls from 'hls.js'
// import { Parser } from 'm3u8-parser'

import VideoPlayer from './components/VideoPlayer'

// import myPlst from './assets/arena-stream/20220616184245_arenahd.m3u8'

const src = 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'

// var manifest = [
//   '#EXTM3U',
//   '#EXT-X-VERSION:3',
//   '#EXT-X-TARGETDURATION:6',
//   '#EXT-X-MEDIA-SEQUENCE:0',
//   '#EXT-X-DISCONTINUITY-SEQUENCE:0',
//   '#EXTINF:6,',
//   './assets/arena-stream/20220616184051_arenahd.ts',
//   '#EXT-X-ENDLIST'
// ].join('\n')

// var parser = new Parser()

// parser.push(manifest)
// parser.end()

// var parsedManifest = parser.manifest

function App() {
  useEffect(() => {
    getHLS()
  }, [])

  const getHLS = () => {
    if (Hls.isSupported()) {
      console.log('HELLO HLS JS')

      var video: any = document.getElementById('video-player')
      console.log(video)

      const hls = new Hls()
      console.log(hls)

      hls.attachMedia(video)
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

  return (
    <Container>
      <VideoPlayer />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 50px;
`

export default App
