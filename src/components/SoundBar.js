import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const Box = styled(motion.div)`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 10rem;
  top: 43px;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
  @media (max-width: 500px) {
    left: calc(2rem + 6vw);
    top: 6rem;
  }
`

const play = keyframes`
0%{
  transform: scaleY(1);
}
50%{
  transform: scaleY(2);
}
100%{
  transform: scaleY(1);
}
`

const Line = styled.span`
  box-sizing: unset;
  background: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${props => (props.click ? 'running' : 'paused')};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`

const SoundBar = () => {
  const ref = useRef(null)
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)

    if (!click) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }
  return (
    <Box
      onClick={() => handleClick()}
      initial={{
        y: -200,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
      animate={{
        y: 0,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
    >
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src="/audio/Mountkid_Dino.mp3" ref={ref} loop />
    </Box>
  )
}

export default SoundBar
