'use client'
import Store from '@/src/store'
import React from 'react'
import { Provider } from 'react-redux'

function ReduxProvider(props: Omit<BaseProps, 'className'>) {
  const { children } = props

  return (
    <Provider store={Store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider
