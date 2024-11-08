import React from 'react'
import { StatusBar } from 'react-native'
import { Stack } from 'expo-router'
function RootAuth() {
  return (
    <>
      <Stack >
      <Stack.Screen name='index' title={'login'} options={{headerShown:false}}/>
      <Stack.Screen name='signup' title={'signup'} options={{headerShown:false}}/>
    </Stack>
    <StatusBar  barStyle={'light-content'} />
    </>
  )
}

export default RootAuth