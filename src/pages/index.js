import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const header = css`
  font-family: 'Tangerine', cursive;
  font-size: 9em;
  text-align: center;
  grid-row-start: 1;
  margin: 0 auto;
`
const header2 = css`
  font-family: 'Merriweather', serif;
  width: 90%;
  margin: 0 auto;
  font-size: 1.2em;
  padding: 1rem 1rem;
  @media (min-width: 420px) {
    width: 70%;
    padding: 2rem 3rem;
  }
`

const main = css`
  grid-row-start: 2;
`

const para = css`
  max-width: 72ch;
  margin: 0 auto;
  padding: 1rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 css={header}>Metier</h1>
    <div css={main}>
      <h2 css={header2}><i>n.</i> Any activity that is pursued as a trade or profession; a calling</h2>
      <p css={para}>
        Metier offers a unique approach to helping companies find the best talent in the market by hiring and molding apprentices into exactly what your company needs. Why is the Metier program right for your company? Because our company takes into consideration all the things that go into making an employee just the right fit; including things like diversity, your company’s specific tech stack, and thanks to our learn on-the-job approach where our apprentices will learn alongside one of our experienced  mentors. When you are ready to hire on the candidate, the transition is seamless. Candidates will be trained with the specific technology and soft skills they need to help grow your team. Contact with us to find out how to take the first step toward streamlining the hiring process and gaining access to candidates that are learning cutting edge technology.
      </p>
    </div>
  </Layout>
)

export default IndexPage
