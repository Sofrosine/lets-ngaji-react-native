import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigationParam } from 'react-navigation-hooks';

const defaultSurah = {
  data: [],
};

const DetailSurah = () => {
  const [surah, setSurah] = useState(defaultSurah);
  const [limit, setLimit] = useState(7);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const idSurah = useNavigationParam('id')
  const nameSurah = useNavigationParam('name')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://al-quran-8d642.firebaseio.com/surat/${idSurah}.json?print=pretty`,
        );
        const result = await response.json();
        setSurah(current => {
          return {
            ...result,
            data: [...current.data, result],
          };
        });
        // if (result.status !== 'OK') {
        //   throw new Error('error');
        // }
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [limit]);

  console.log('aslkjdl', surah)

  return (
    <>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarTextContainer}>
            <Icon style={styles.navbarIcon} name="chevron-left" size={20} />
            <Text style={styles.navbarName}>{nameSurah}</Text>
            <Icon style={styles.navbarIcon} name="search" size={20} />
          </View>
        </View>

        <ScrollView style={styles.surahContainer}>
          {isLoading && <ActivityIndicator size={30} color="#819C4B" />}
          {surah.data[0] &&
            surah.data[0].map((item, index) => (
              <>
                <View style={styles.ayahsList}>
                  <View style={styles.ayahsArabContainer}>
                    <Text style={styles.ayahs}>{idSurah}:{item.nomor}</Text>
                    <Text style={styles.arabicText}>{item.ar}</Text>
                  </View>
                  <View style={styles.latinTextContainer}>
                    <Text style={styles.latinText}>{item.id}</Text>
                  </View>
                </View>
                <View style={styles.divider} />
              </>
            ))}
        </ScrollView>
      </View>
    </>
  );
};

export default DetailSurah;
