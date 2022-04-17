import Link from 'next/link'
import React from 'react'
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'
import styled from 'styled-components'
import { DarkTheme } from '../src/components/Themes'

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
`

const Line = styled.span`
  width: 3px;
  height: 9rem;
  background-color: ${props =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = props => {
  return (
    <div>
      <Icons>
        <div>
          <Link href={'https://github.com/kleberson154'}>
            <a target={'_blank'}>
              <BsGithub
                size={30}
                fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href={'https://www.instagram.com/kleberson.14/'}>
            <a target={'_blank'}>
              <BsInstagram
                size={30}
                fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href={'https://api.whatsapp.com/send?phone=5534991336956'}>
            <a target={'_blank'}>
              <BsWhatsapp
                size={30}
                fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
              />
            </a>
          </Link>
        </div>
        <div>
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
        </div>

        <Line color={props.theme} />
      </Icons>
    </div>
  )
}

export default SocialIcons
