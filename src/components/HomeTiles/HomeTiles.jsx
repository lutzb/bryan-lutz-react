import React from 'react'
import './HomeTiles.scss'
import HomeTile from '../HomeTile/HomeTile'
import TwitterLogo from '../../img/Twitter_Social_Icon_Circle_White.svg'

const HomeTiles = () => (
  <div className='home-tiles'>
    <HomeTile image={TwitterLogo} header='Show me the code.' text='Unyielding advocate of ATDD, clean code, and extreme programming.' />
    <HomeTile image={TwitterLogo} header='Data is my passion.' text='Big data, ETL, data transformation, and data analytics.' />
    <HomeTile image={TwitterLogo} header='Embrace Esports.' text='Over $1 Billion dollar industry for playing video games competitively. Yeah, really.' />
  </div>
)

/*
Unyielding advocate of TDD, clean code, and YAGNI extreme programming
Back-end data transformation, ETL, data manipulation, Batch script orchestration.
Identifying and encouraging the use of Software Development industry patterns.

*/

export default HomeTiles