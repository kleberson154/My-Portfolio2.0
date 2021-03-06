import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'
import styled from 'styled-components'
import { DarkTheme } from './Themes'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.3rem 2.5rem;
  }

  @media (max-width: 500px) {
    left: -10px;
    box-sizing: content-box;
    height: 16rem;
  }
`

const Line = styled(motion.span)`
  width: 3px;
  height: 9rem;
  background-color: ${props =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = props => {
  return (
    <div>
      <Icons>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          <Link href={'https://github.com/kleberson154'}>
            <a target={'_blank'}>
              <BsGithub
                size={30}
                fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
              />
            </a>
          </Link>
        </motion.div>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          <Link href={'https://www.instagram.com/kleberson.14/'}>
            <a target={'_blank'}>
              <BsInstagram
                size={30}
                fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
              />
            </a>
          </Link>
        </motion.div>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          <Link href={'https://api.whatsapp.com/send?phone=5534991336956'}>
            <a target={'_blank'}>
              <BsWhatsapp
                size={30}
                fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
              />
            </a>
          </Link>
        </motion.div>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          <Link
            href={'https://www.linkedin.com/in/kleberson-andrade-47187520a/'}
          >
            <a target={'_blank'}>
              <BsLinkedin
                size={30}
                fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
              />
            </a>
          </Link>
        </motion.div>

        <Line
          color={props.theme}
          initial={{
            height: 0
          }}
          animate={{
            height: '8rem'
          }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: 0.8
          }}
        />
      </Icons>
    </div>
  )
}

export default SocialIcons
