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
        Building great code is a calling, one that developers continually learn and hone their skills towards. We've found that those aspirations of being great at software is something we can teach to new devs. In that teaching we've discovered that wonderful things happen within an team of developers; senior and mid level devs learn and teach, code culture improves, and code delivery speed goes up when a team starts to gel.
      </p>
      <p css={para}>
        Our program works to find people who are best suited for a career as a developer. We train them to be some of the most promising people to work on your code. Our teaching processes get new developers up to speed quickly while also giving them a handle on the best practices for writing software. We teach these fresh developers that learning is a life long process and give them insight on how to do it well. We pass on our calling to be great developers.
      </p>
    </div>
  </Layout>
)

export default IndexPage
