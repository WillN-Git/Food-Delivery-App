import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../utils'

/**
 * ==================== Responsible to display a vertical line ====================
 * Description: 
 * this vertical line is mainly for dividing items in a box
 */
export const LineDivider = () => (
  <View style={{ width: 1, paddingVertical: 18, marginHorizontal: 18 }}> 
    <View 
      style={{
        flex: 1,
        borderLeftColor: COLORS.text,
        borderLeftWidth: 1
      }}
    />
  </View>
)