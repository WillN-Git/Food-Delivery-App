import React from 'react'
import {} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { COLORS } from '../utils' 

/**
 * ==================== Responsible to display some star ====================
 * @params description
 *    > number: the number of star wanted
 *    > type: A star can be fill, empty of half-full (or half-empty, or just half)
 *    > size: the size of the star in pixels
 */
export const displayStars = (number = 1, type = 'fill', size = 24) => {
  const starList = []

  for(let i=1; i<=number; i++)
    starList.push(
      <FontAwesome
        name={(type === 'fill') ? "star": (type === 'empty') ? "star-o" : "star-half-full"} 
        size={size}
        color={COLORS.orange}
        style={{marginRight: 4}}
      />
    )

  return starList
}