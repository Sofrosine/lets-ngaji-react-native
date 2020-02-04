import React, { useState, useEffect } from 'react'
import {Text, View, TouchableOpacity, ScrollView} from 'react-native'
import styles from './style'
import Surah from '../../components/Home/Surah'
import Juz from '../../components/Home/Juz'

const Home = () => {
  const [juz, setJuz] = useState(false)


  return (
    <View style={styles.container}>
      <View style={styles.choices}>
        <TouchableOpacity onPress={() => setJuz(!juz)} style={juz ? styles.choicesSurah : styles.choicesSurahActive}>
          <Text style={juz ? styles.choicesSurahText : styles.choicesSurahTextActive}>Surah</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setJuz(!juz)} style={juz ? styles.choicesJuzActive : styles.choicesJuz}>
          <Text style={juz ? styles.choicesJuzTextActive : styles.choicesJuzText}>Juz</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <ScrollView>
          {juz ? <Juz/> : <Surah/>}
        </ScrollView>
      </View>
    </View>
  )
}

export default Home