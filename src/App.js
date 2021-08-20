import React, {useState} from 'react'
import  'scss/App.scss';
import DefaultLayout from 'layouts/default';
import { AppProvider } from 'contexts/wizard-context';
import Wizard from 'components/wizard';
import {initialState,
wizardDataReducer} from 'contexts/reducers/wizard-data'

function App() {

  return (
    <div className="app">
      <AppProvider reducer={wizardDataReducer} initialState={initialState}>

      <DefaultLayout>
        <Wizard />
       </DefaultLayout>
      </AppProvider>

    
    </div>
  );
}

export default App;
