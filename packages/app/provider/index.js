import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider } from 'native-base'

export function Provider({ children }) {
  return (
    <NavigationProvider>
      {Platform.OS === 'web' ? (
        <NativeBaseProvider isSSR={true} theme={theme}>
          {children}
        </NativeBaseProvider>
      ) : (
        <NativeBaseProvider theme={theme}>
          {children}
        </NativeBaseProvider>
      )}
    </NavigationProvider>
  )
}
