//Basics
import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { AntDesign, Ionicons } from "@expo/vector-icons"

//Constants
import {images, SIZES, COLORS} from '../utils'

//Helpers
import { displayStars } from './displayStar'
import { LineDivider } from './LineDivider'


const TrendingSection = () => (
  <View style={{marginTop: 10}}>
    {/* Section title */}
    <Text style={{color: COLORS.text, fontSize: SIZES.h2, marginLeft: 10}}>Trending Now</Text>

    {/* Box for the items */}
    <View 
      style={{
        backgroundColor: COLORS.secondary,
        borderRadius: 15,
        width: SIZES.width * 0.9,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        padding: 12
      }}
    >
      {/* Name of the trend */}
      <Text style={{color: COLORS.text, fontSize: SIZES.body2}}>A Pasta Special</Text>
          
      <View style={{flexDirection: 'row'}}>
        {displayStars(4, 'fill', 17)}
        {displayStars(1, 'half', 17)}
      </View>

      {/* Extra info */}
      <View 
        style={{
          flexDirection: 'row',
          height: 70,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <View>
          <Text style={{color: COLORS.lightGray, fontSize: SIZES.body4}}>Serving</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Ionicons name="ios-person" size={18} color={COLORS.text} />
            <Text style={{color: COLORS.text, fontSize: SIZES.body2}}> ×1</Text>
          </View>
        </View>

        <LineDivider />

        <View>
          <Text style={{color: COLORS.lightGray, fontSize: SIZES.body4}}>Preparation</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <AntDesign name="clockcircleo" size={18} color={COLORS.text} />
            <Text style={{color: COLORS.text, fontSize: SIZES.body2}}> 2hr</Text>
          </View>
        </View>

        <Image 
          source={images.pastaSpecial}
          style={{width: 200, height: 200, marginTop: -100, marginLeft: -10}} 
        />
      </View>
    </View>
  </View>
)

export default TrendingSection