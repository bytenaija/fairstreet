import { useStore } from 'contexts/wizard-context'
import React from 'react'
import Location from './location'
import 'components/wizard/wizard.scss'
import Doctors from './doctors'


const Wizard = () => {
  const [{nav}] = useStore()
  
  let content = null
  if (nav === 'Location') {
    content = <Location />
  }


  if (nav === 'Doctors') {
    content = <Doctors />
  }

  return content;
  
}

export default Wizard