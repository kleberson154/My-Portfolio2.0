import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 55vh;
  display: flex;
  border: 2px solid #000;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  z-index: 1;

  @media (max-width: 700px) {
    position: absolute;
    top: 22rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

const SubBoxOne = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  @media (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`

const SubBoxTwo = styled.div`
  .pic {
    position: absolute;
    bottom: 0px;
    left: 75%;
    transform: translate(-50%, 0%);
    width: 73%;
  }

  @media (max-width: 700px) {
    .pic {
      position: absolute;
      left: 50%;
      width: 73%;
    }
  }

  @media (max-width: 500px) {
    .pic {
      position: absolute;
      left: 50%;
      width: 120%;
    }
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: #000;
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: #000;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  @media (max-width: 700px) {
    padding: 8px 0 0 10px;
    justify-content: flex-start;
  }
  @media (max-width: 500px) {
    padding: 8px 0 0 10px;
    justify-content: flex-start;
  }
`

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '50vh' }}
      transition={{ type: 'spring', duration: 0.8, delay: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <SubBoxOne>
          <Text>
            <h1>Oi,</h1>
            <h3>Eu sou Kleberson</h3>
            <h6>Eu crio e codifico sites simples e bonitos.</h6>
          </Text>
        </SubBoxOne>
        <SubBoxTwo>
          <img src="/images/profile.png" className="pic" alt="Profile Pic" />
        </SubBoxTwo>
      </motion.div>
    </Box>
  )
}

export default Intro
