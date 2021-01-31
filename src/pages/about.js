import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'
import styled from '@emotion/styled'

const Title = styled.h1`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`
const Heasding2 = styled.h2`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.3rem;
    color: tomato;
  }
`
const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  p {
    line-height: 1.5;
    margin: 0 0 1.75rem;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
  code {
    font-family: ${props => props.theme.fonts.monospace};
    font-size: 0.9rem;
    padding: 0.25rem;
    background: ${props => props.theme.colors.code};
    color: ${props => props.theme.colors.text};
    border-radius: 0.3em;
  }
`

const AboutPage = ({ data }) => {
  return (
    <Container>
      <SEO title="About Page" description="This is the about page" />
      <Title>About</Title>
      <Content>
       <p>Hi. I'm Ben, nice to meet you. This is my website. Give me a few weeks to get it all sorted out and write some content for the site that I want to share pubically. 👀</p>

       <Heasding2>What's going on with your site?</Heasding2>

       <p>I just launched this Gatsby theme by <a href="https://twitter.com/ryanwiemer" title="Ryan Wiemer">Ryan Wiemer</a>, it's called <a href="https://amsterdam.netlify.app" title="Amsterdam">Amsterdam</a> and I like it okay, it has most of the features I was looking for and looks quite good too. I will stil <i>"fix it up"</i> and add my own style to it, at some point. 😎</p>
       <p>I'm getting used to blogging; and I have nothing to blog about right now. So I'm just collecting stuff "notes" to share with my GF.✌🏻</p>

       <Heasding2>What do you do for fun and amusement?</Heasding2>

       <p>I do a lot of different stuff to amuse myself. First and formost it's music!!!! I love music (mainly metal and jazz) but I might surprise you with my tastes. I also like watching movies and TV shows, but that's not really all that unusual as most people like that as well.</p>

      </Content>
    </Container>
  )
}

export default AboutPage
