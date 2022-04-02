import React from 'react'
import {InlineWidget} from 'react-calendly'


const styles={
    height: '150vh'
  }
const pageSettings={
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }
  
const utm={
    utmCampaign: 'Spring Sale 2019',
    utmContent: 'Shoe and Shirts',
    utmMedium: 'Ad',
    utmSource: 'Facebook',
    utmTerm: 'Spring'
  }


const Calendly = () => {
  return (
    <div className='h-screen'>
        <InlineWidget
        styles={styles}
        pageSettings = {pageSettings}
       
        // utm = {utm}
        
        url="https://calendly.com/georgios-ariadnemaps/30min" />
        </div>
  )
}

export default Calendly