import React from 'react'
import Layout from '../Layout'
import Navbar from '../Share/Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section7 from './Section7'
import Section6 from './Section6'
import Section8 from './Section8'
import Section9 from './Section9'
import Footer from './Footer'

const FirstPage = () => {
  return (
    <div>
        <Layout>
            <Section1/>
            <Section2/>
            <Section4/>
            <Section3/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section9/>
            <Section8/>
            <Footer/>
        </Layout>
    </div>
  )
}

export default FirstPage