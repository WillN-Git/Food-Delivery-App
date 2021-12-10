//Basics
import React from 'react'
import { View, Text } from 'react-native'

//Constants
import { SIZES } from '../utils'

const ProfileScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: SIZES.h1}}>Profile Screen</Text>
  </View>
)

export default ProfileScreen