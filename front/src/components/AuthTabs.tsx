'use client';

import storageLocal from '@/utils/storageLocal';
import { Box, Tab, Tabs } from '@mui/material'
import { useEffect, useState } from 'react'
import LoginForm from './Forms/Login'
import RegisterForm from './Forms/Register'

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}

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
  )
}

function a11yProps(index: number) {
  return {
    id: `auth-tab-${index}`,
    'aria-controls': `auth-tabpanel-${index}`
  }
}

type Props = { closeModal?: () => void }

export default function AuthTabs({ closeModal }: Props) {
  // состояние индекса открытой вкладки
  const [tabIndex, setTabIndex] = useState(0)
  // состояние индикатора загрузки
  const [loading, setLoading] = useState(true)

  // метод для переключения вкладок
  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setTabIndex(value)
  }

  // после регистрации мы не только записываем данные пользователя в БД,
  // но также фиксируем факт регистрации в локальном хранилище
  // если пользователь зарегистрирован, мы показываем ему вкладку авторизации,
  // если нет - вкладку регистрации
  useEffect(() => {
    if (storageLocal.get('user_has_been_registered')) {
      setTabIndex(1)
    }
    setLoading(false)
  }, [])

  if (loading) return null

  return (
    <>
      <Box display='flex'>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label='auth tabs'
        >
          <Tab label='Register' {...a11yProps(0)} />
          <Tab label='Login' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <RegisterForm closeModal={closeModal} />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <LoginForm closeModal={closeModal} />
      </TabPanel>
    </>
  )
}