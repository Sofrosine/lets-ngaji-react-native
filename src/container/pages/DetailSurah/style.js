import React from 'react';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 0.1,
    backgroundColor: '#F1EEE5',
    justifyContent: 'center',
  },
  navbarTextContainer: {
    flex: 1,
    paddingHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarIcon: {
    alignSelf: 'center',
    color: 'gray',
  },
  navbarName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  surahContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 14,
  },
  ayahsList: {
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  ayahsArabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
    flex:1
  },
  ayahs: {
    alignSelf: 'center',
    backgroundColor: '#F1EEE5',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 5,
  },
  arabicText: {
    width: '70%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#819C4B',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  latinText: {
    fontSize: 16,
    color: '#a3a199',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },
  latinTextContainer: {
    fontSize: 16,
    color: '#a3a199',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    flex:1
  },
  divider: {
    borderColor: '#F1EEE5',
    borderWidth: 1,
    marginBottom: '5%',
  },
});
