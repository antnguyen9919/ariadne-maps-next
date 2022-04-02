import React from 'react'
import {InlineWidget} from 'react-calendly'


const styles={
    height: '110vh'
  }
const pageSettings={
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: true,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }
  const prefill={
    email: 'test@test.com',
    firstName: 'Jon',
    lastName: 'Snow',
    name: 'Jon Snow',
    customAnswers: {
      a1: 'a1',
      a2: 'a2',
      a3: 'a3',
      a4: 'a4',
      a5: 'a5',
      a6: 'a6',
      a7: 'a7',
      a8: 'a8',
      a9: 'a9',
      a10: 'a10'   
    }
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
    <div>
        <InlineWidget
        styles={styles}
        pageSettings = {pageSettings}
        prefill = {prefill}
        utm = {utm}
        
        url="https://calendly.com/georgios-ariadnemaps/30min" />
        </div>
  )
}

export default Calendly