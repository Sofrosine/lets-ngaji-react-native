import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator, ScrollView, Animated, Easing} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';

const defaultSurah = {
  data: [],
};

const InfoSurah = () => {
  const [surah, setSurah] = useState(defaultSurah);
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [opacityValue, setOpacity] = useState(new Animated.Value(0))
  const [AnimatedValue, setAnimated] = useState(new Animated.Value(0));
  const idSurah = useNavigationParam('id')
  const nameSurah = useNavigationParam('name')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://al-quran-8d642.firebaseio.com/data/${idSurah-1}.json?print=pretty`
        )
        const result = await response.json()
        setSurah(current => {
          return {
            ...result,
            data: [...current.data, result]
          }
        })
      } catch (err) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
    
  }, [])

  const _fadeAnimation = () => {
    Animated.parallel([
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear
      }),
      Animated.timing(AnimatedValue, {
        toValue: 1,
        duration: 1200,
      }),
    ]).start()
  }
  _fadeAnimation()

  const navigation = useNavigation()

  console.log('hahaha', surah.data)

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator size={30} color="green" style={{justifyContent:'center',alignSelf:'center',flex:1}}/>
      :
      <>
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={20} color="#F1EEE5" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('DetailSurah', {
                id: idSurah,
                name: nameSurah
              })}>
                <Icon name="book" size={25} color="#F1EEE5" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.headerText}>{surah.asma}</Text>
              <Text style={styles.headerText}>{surah.nama}</Text>
            </View>
          </View>
          <Animated.View style={[styles.contentContainer, 
            {
              opacity: opacityValue.interpolate({
                inputRange: [0, 0.4, 0.8, 1],
                outputRange: [0, 0.4, 0.8, 1]
              }),
              transform: [
                {
                  translateY: AnimatedValue.interpolate({
                    inputRange: [0.5, 1],
                    outputRange: [100, 0],
                  }),
                },
              ],}]}>
            <ScrollView>
              <Text style={styles.contentText}>
                Nama: <Text style={styles.contentText2}>{surah.nama} ({surah.asma})</Text>
              </Text>
              <Text style={styles.contentText}>
                Tempat diturunkan: <Text style={styles.contentText2}>{surah.type}</Text>
              </Text>
              <Text style={styles.contentText}>
                Arti: <Text style={styles.contentText2}>{surah.arti}</Text>
              </Text>
              <Text style={styles.contentText}>
                Jumlah Ayat: <Text style={styles.contentText2}>{surah.ayat}</Text>
              </Text>
              <Text style={styles.contentText}>
                Surah diturunkan ke-: <Text style={styles.contentText2}>{surah.urut}</Text>
              </Text>
              <Text style={styles.contentText}>
                Keterangan: <Text style={styles.contentText2}>{surah.keterangan}</Text>
              </Text>
            </ScrollView>
          </Animated.View>
          <View style={styles.surahNumber}>
            <Text style={styles.surahNumberText}>{surah.nomor}</Text>
          </View>
      </>
      }
      
    </View>
  );
};

export default InfoSurah;
