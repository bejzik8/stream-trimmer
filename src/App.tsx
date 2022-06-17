import styled from 'styled-components'

import VideoPlayer from './components/VideoPlayer'

import video from './assets/file_example_MP4_1920_18MG.mp4'

function App() {
  return (
    <Container>
      <VideoPlayer source={video} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 50px;
`

export default App
