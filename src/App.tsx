import styled from 'styled-components'
// import { Parser } from 'm3u8-parser'

import VideoPlayer from './components/VideoPlayer'

// import myPlst from './assets/arena-stream/20220616184245_arenahd.m3u8'

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
