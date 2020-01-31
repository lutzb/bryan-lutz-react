import React from 'react'
import './HomeTiles.scss'
import HomeTile from '../HomeTile/HomeTile'
import CodeLogo from '../../img/code.png'
import DataLogo from '../../img/data.jpg'
import EsportsLogo from '../../img/esports.jpg'

const HomeTiles = () => (
  <div className='home-tiles'>
    <HomeTile image={CodeLogo} header1='Talk is cheap' header2='Show me the code' text='Unyielding advocate of ATDD, clean code, and extreme programming.' />
    <HomeTile image={DataLogo} header1='Everything is data' header2='He who has the most, wins' text='Data is my passion. Big data, ETL, data transformation, and data analytics.' />
    <HomeTile image={EsportsLogo} header1='Forget traditional sports' header2='Embrace Esports' text='Kids are gaining fortune and fame for playing video games competitively in an over $1 billion industry' />
  </div>
)

export default HomeTiles