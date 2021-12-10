//Basics
import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

//Constants
import { images, icons, COLORS, SIZES } from '../utils'

//Components
import TrendingSection from '../components/TrendingSection'


//Lists
const foodCategories = [
  {
    id: 1,
    categoryName: 'Pasta',
    source: icons.spaguetti
  },
  {
    id: 2,
    categoryName: 'Fried Food',
    source: icons.fried_chicken
  },
  {
    id: 3,
    categoryName: 'Burgers',
    source: icons.burger
  },
  {
    id: 4,
    categoryName: 'Pizza',
    source: icons.pizza
  },
  {
    id: 5,
    categoryName: 'Tacos',
    source: icons.taco
  },
  {
    id: 6,
    categoryName: 'Skewer',
    source: icons.skewer 
  },
  {
    id: 7,
    categoryName: 'Kebab',
    source: icons.kebab
  }
]

const deliciousItems = [
  {
    id: 1,
    source: images.eggsSunday,
    title: 'Breakfast Eggs',
    shortDescription: 'Special benedict eggs with toasts',
    price: '6.88€'
  },
  {
    id: 2,
    source: images.pancakesSunday,
    title : 'Sunday Pancakes',
    shortDescription: 'Made without gluten',
    price: '8.00€'
  }
]




const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(1)

  const renderCategoryHeader = ({ item }) => {
    let borderState = selectedCategory == item.id ? COLORS.tertiary : 'transparent'

    return (
      <Pressable 
        style={{
          padding: 5,
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor: borderState,
          marginLeft: 20,
          width: 90,
          height: 90,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.secondary
        }}
        onPress={() => setSelectedCategory(item.id)}
      >
        <Image 
          source={item.source}
          style={{width: 40, height: 40}}
        />
        <Text style={{marginTop: 10, color: COLORS.text}}>{item.categoryName}</Text>
      </Pressable>
    )
  }

  const renderDeliciousItems = ({ item }) => {
    return (
      <Pressable>
        <Image source={item.source} />
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary, paddingTop: 35}}>

      {/* ===================== FOOD CATEGORY SECTION ===================== */}
      <View>
        <Text style={{color: COLORS.text, fontSize: SIZES.h2, marginLeft: 10}}>Delicious categories</Text>
      </View>

      <View style={{padding: 15}}>
        <FlatList 
          horizontal
          data={foodCategories}
          renderItem={renderCategoryHeader}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          extraData={selectedCategory}
        />
      </View>

      {/* ===================== TRENDING SECTION ===================== */}
      <TrendingSection />

      {/* ===================== DELICIOUS ITEMS SECTION ===================== */}
      <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'end'}}>
        <Text style={{color: COLORS.text, fontSize: SIZES.h2, marginLeft: 10}}>Delicious Categories</Text>
          <TouchableOpacity>
            <Text style={{color: COLORS.lightGray, fontSize: SIZES.body2, marginRight: 10}}>View All</Text>
          </TouchableOpacity>

      {deliciousItems.map((item) => (
        <View style={{borderRadius: 15 }}>
          <Image source={item.source} />

          <Text>{item.title}</Text>
          <Text>{item.shortDescription}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen