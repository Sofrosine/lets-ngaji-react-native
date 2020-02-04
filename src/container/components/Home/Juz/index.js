import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

const Juz = () => {
  const [juz, setJuz] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
    17,18,19,20,21,22,23,24,25,26,27,28,29,30])

  useEffect(() => {

  })

  return (
    <>
      {juz.map(item => {
        return (
          <>
            <TouchableOpacity style={styles.juzList} key={item}>
              <Text style={styles.juzListNumber}>{item}</Text>
              <View>
                <Text style={styles.juzListName}>Juz {item}</Text>
              </View>
              <Text style={styles.juzListName}>
                بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </TouchableOpacity>
            <View style={styles.surahDivider}></View>
          </>
        );
      })}
    </>
  );
};

export default Juz;
