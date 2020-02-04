import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  surahList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
  },
  surahListNumber: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    width: '20%',
    paddingLeft: 30
  },
  surahData: {
    width: '40%'
  },
  surahListName: {
    color: '#819C4B',
    fontWeight: 'bold',
    fontSize:16,
  },
  surahListMean: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
    opacity: 0.6,
  },
  surahListNameArab: {
    color: '#819C4B',
    fontWeight: 'bold',
    fontSize: 16,
    flex:1,
    paddingRight: 30
  },
  surahDivider: {
    borderBottomWidth: 1,
    marginHorizontal: 15,
    borderBottomColor: '#d1cfc7',
  }
});