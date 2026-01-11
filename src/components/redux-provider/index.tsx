'use client'
import Store from '@/src/store'
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
