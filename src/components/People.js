import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Avatar from './Avatar';

import theme from '../theme';

const People = ({people}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {people.map((person, index) => (
          <Avatar
            key={person.id}
            image={person.image}
            style={index !== 0 && styles.mln24}
          />
        ))}
      </View>
      <Text style={styles.numberOfPeople}>{people.length} people</Text>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10,
    marginTop: 32,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mln24: {
    marginLeft: -24,
  },
  numberOfPeople: {
    flex: 1,
    textAlign: 'right',
    color: theme.colors.gray,
  },
});
