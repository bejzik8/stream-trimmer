import styled from 'styled-components'

type VideoPlayerProps = {
    source: string
}

const VideoPlayer = ({ source }: VideoPlayerProps) =>
    <StyledVideo controls>
        <source src={source} />
    </StyledVideo>

const StyledVideo = styled.video`
    width: 60%;
    border-radius: 10px;
`

export default VideoPlayer