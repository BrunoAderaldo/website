/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Layout from 'components/Layout'
import Hero from 'components/Hero'
import Section from 'components/Section'
import Features from 'components/Features'

import Logo from 'assets/images/logo.svg'
import IconLayout from 'assets/icons/layout.svg'
import IconCode from 'assets/icons/code.svg'

const features = [
  {
    image: IconLayout,
    title: 'Design',
    text:
      'Melhore a usabilidade dos seus produtos proporcionando ao seu usuário uma melhor experiência.'
  },
  {
    image: IconCode,
    title: 'Desenvolvimento',
    text: 'Landing pages, mobile-first, aplicações web e apps mobile.'
  }
]

const IndexPage = () => (
  <Layout seo={{ title: 'Home' }}>
    <Hero
      titleImage={Logo}
      description={
        <>
          Atualmente trabalhando como Front-end developer em{' '}
          <span sx={{ color: 'text.bejamas' }}>Bejamas</span>.
        </>
      }
      descriptionMaxWidth="324"
      socialIcons
    />
    <Section title="Como posso te ajudar hoje?" titleMaxWidth="225">
      <Features data={features} />
    </Section>
  </Layout>
)

export default IndexPage
