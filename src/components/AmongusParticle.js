import React from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'
import { loadFull } from 'tsparticles'

//particle config files
import configDark from '../config/particlejs-amongus.json'

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`

const AmongusParticle = () => {
  const particlesInit = async main => {
    await loadFull(main)
  }
  return (
    <Box>
      <Particles params={configDark} init={particlesInit} />
    </Box>
  )
}

export default AmongusParticle
