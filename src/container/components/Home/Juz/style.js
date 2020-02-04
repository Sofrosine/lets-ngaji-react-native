import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  juzList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  juzListNumber: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold'
  },
  juzListName: {
    color: '#819C4B',
    fontWeight: 'bold',
    fontSize: 18,
  },
  surahDivider: {
    borderBottomWidth: 1,
    marginHorizontal: 15,
    borderBottomColor: '#d1cfc7',
  }
});