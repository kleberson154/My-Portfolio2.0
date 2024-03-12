import { motion } from 'framer-motion'
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
  left: 0rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.3rem 2.5rem;
  }
  @media (max-width: 500px) {
    left: -10px;
    box-sizing: content-box;
  }
`

const Line = styled(motion.span)`
  width: 3px;
  height: 3rem;
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
          <a
            href={'https://github.com/kleberson154'}
            aria-label="Link para o meu github."
            tabindex="0"
            target={'_blank'}
          >
            <BsGithub
              size={30}
              fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          <a
            href={'https://www.instagram.com/kleberson.14/'}
            aria-label="Link para o meu Instagram."
            tabindex="0"
            target={'_blank'}
          >
            <BsInstagram
              size={30}
              fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          <a
            href={'https://api.whatsapp.com/send?phone=5534991336956'}
            aria-label="Link para o meu numero de telefone no whatsapp."
            tabindex="0"
            target={'_blank'}
          >
            <BsWhatsapp
              size={30}
              fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ transform: 'scale(0)' }}
          animate={{ scale: [0, 1, 1.3, 1] }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
        >
          <a
            href={'https://www.linkedin.com/in/kleberson-andrade-47187520a/'}
            aria-label="Link para o meu linkedin."
            tabindex="0"
            target={'_blank'}
          >
            <BsLinkedin
              size={30}
              fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
            />
          </a>
        </motion.div>

        <Line
          color={props.theme}
          initial={{
            height: 0
          }}
          animate={{
            height: '3rem'
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
