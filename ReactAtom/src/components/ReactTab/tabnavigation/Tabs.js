import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import CustomTab from './CustomTab'
import Info from './Info'
import About from './About'
import Contact from './Contact'

const Information = () => (
  <div>
    <Tabs activeTab='about'>
      <TabList>
        <Tab component={CustomTab} label='JQuery' id='info' />
        <Tab component={CustomTab} label='HTML5' id='about' />
        <Tab component={CustomTab} label='CSS' id='contact' />
      </TabList>
      <TabList>
        <TabPanel component={Info} id='info' />
        <TabPanel component={About} id='about' />
        <TabPanel component={Contact} id='contact' />
      </TabList>
    </Tabs>
  </div>
)

export default Information