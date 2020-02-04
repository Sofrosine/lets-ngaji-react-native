import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex:1
  },
  // navbar: {
  //   flex:1,
  //   backgroundColor: '#F1EEE5',
  //   justifyContent:'center',
  //   alignItems:'center'
  // },
  // navbarText: {
  //   fontSize: 32,
  //   color:'#819C4B',
  //   borderBottomWidth:2,
  //   borderBottomColor:'#819C4B'
  // },
  choices: {
    flex:0.1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  choicesSurah: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  choicesSurahActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#819C4B',
  },
  choicesSurahText: {
    color: '#bdbbb5',
    fontWeight: 'bold',
    fontSize: 18
  },
  choicesSurahTextActive: {
    color: '#819C4B',
    fontWeight: 'bold',
    fontSize: 18
  },
  choicesJuz: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choicesJuzActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#819C4B',
  },
  choicesJuzText: {
    color: '#bdbbb5',
    fontWeight: 'bold',
    fontSize: 18
  },
  choicesJuzTextActive: {
    color: '#819C4B',
    fontWeight: 'bold',
    fontSize: 18
  },
  list: {
    flex: 1,
    padding: 10,
    paddingHorizontal:0
  },
  surahList: {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    paddingVertical: 15,
  },
  surahListNumber: {
    color: 'gray',
    fontSize:18,
    fontWeight:'bold'
  },
  surahListName: {
    color: '#819C4B',
    fontWeight:'bold',
  },
  surahListMean: {
    color:'gray',
    fontSize:12,
    fontWeight:'bold',
    opacity:0.6
  },
  surahDivider: {
    borderBottomWidth: 1,
    marginHorizontal: 15,
    borderBottomColor: '#d1cfc7',
  }
});