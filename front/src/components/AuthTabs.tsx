'use client';

import React from 'react';
import {
  Box,
  Tab,
  Tabs,
} from '@mui/material';
import RegisterForm from './Forms/Register';
import Login from './Forms/Login';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel({ children, value, index, ...otherProps }: TabPanelProps) {
  return (
    <Box
      aria-labelledby={`auth-tab-${index}`}
      display={value === index ? 'block' : 'none'}
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      role='tabpanel'
      {...otherProps}
    >
      {value === index && children}
    </Box>
  );
}

function AuthTabs() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setTabIndex(value);
  };

  return (
    <>
      <Box width={350} display='flex' sx={{ backgroundColor: 'white' }}>
        <Tabs value={tabIndex} onChange={handleChange} >
          <Tab label='Register' />
          <Tab label='Login' />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <RegisterForm />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Login />
      </TabPanel>
    </>
  );
}

export default AuthTabs;