import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Box = styled(motion.li)`
  background-color: transparent;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color ease 0.5s;
`

const Image = styled.img`
  width: 50%;
  border-radius: 15px;
  @media (max-width: 1348px) {
    width: 60%;
  }
`

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const CardCert = props => {
  const { id, image } = props.data

  return (
    <Box key={id} variants={Item}>
      <Image src={image}></Image>
    </Box>
  )
}

export default CardCert
