import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const Registration = () => {
  const params: Partial<{name: string}> = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{
        title: params.name
      }} />
      <Text>Registration</Text>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({})