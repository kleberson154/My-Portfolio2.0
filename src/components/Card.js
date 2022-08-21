import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

const Box = styled(motion.li)`
  width: 24rem;
  height: 56vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 0 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.text};
  transition: background-color ease 0.5s;

  h2 {
    transition: color ease 0.5s;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    h2 {
      color: ${props => props.theme.text};
    }
    div {
      color: ${props => props.theme.text};
      border-color: ${props => props.theme.text};
    }
    button {
      cursor: pointer;
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
      &:hover {
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 500px) {
    width: 20rem;
    height: 50vh;
    font-size: 18px;
  }
`

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  padding-top: 0.5rem;
  text-align: inherit;
`
const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 21rem;
  @media (max-width: 500px) {
    width: 18rem;
  }
`
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 1rem;
`

const Button = styled.button`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 1vw);
  border-radius: 25px 0 0 25px;
  font-size: calc(1em + 0.5vw);
  border: 0;
`

const Git = styled.button`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.64rem calc(2rem + 1.4vw);
  border-radius: 0 25px 25px 0;
  font-size: calc(1em + 0.5vw);
  border: 0;
  display: flex;
  align-items: center;
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

const Card = props => {
  const { id, name, image, description, tags, demo, github } = props.data

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Image src={image}></Image>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>
        })}
      </Tags>
      <Footer>
        <Link href={{ pathname: `${demo}` }} passHref={true} target="_blank">
          <a target="_blank" rel="noreferrer">
            <Button>visit</Button>
          </a>
        </Link>
        <Link href={{ pathname: `${github}` }} passHref={true} target="_blank">
          <a target="_blank" rel="noreferrer">
            <Git>
              <BsGithub width={30} height={30} />
            </Git>
          </a>
        </Link>
      </Footer>
    </Box>
  )
}

export default Card
