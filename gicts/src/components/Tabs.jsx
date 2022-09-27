import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Contact from './Contact/Contact';
import Table from './Table';

const TabsLayout = () => {
  return (
    <Tabs>
    <TabList>
      <Tab>Form</Tab>
      <Tab>Items</Tab>
    </TabList>

    <TabPanel>
      <Contact />
    </TabPanel>
    <TabPanel>
      <Table />
    </TabPanel>
  </Tabs>
  )
}

export default TabsLayout