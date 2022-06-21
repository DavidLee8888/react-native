import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Contact from './src/components/Contact';
import Seperator from './src/components/Seperator';
import ContactImage1 from './src/assets/contact1.jpeg';
import ContactImage2 from './src/assets/contact2.jpeg';

const App  = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View style={styles.headerContainer}>
          <Text>Contacts</Text>
        </View>

        <View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderTextStyle}>FAVORITE CONTACTS</Text>
          </View>
          <View style={styles.contactsContainer}>
            <Contact name='Harry Potter' description='' avatar={ContactImage1} favorite={true} />
            <Seperator />
            <Contact name='Hermione Granger' description='Gryffindor' favorite={true} />
            <Seperator />
            <Contact name='Homer Simpson' description='Springfield Nuclear Power Plant' avatar={ContactImage2} favorite={true} />
            <Seperator />
            <Contact name='Roger Rabbit' description='' favorite={true} />
          </View>
        </View>

        <View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderTextStyle}>OTHER CONTACTS</Text>
          </View>
          <View style={styles.contactsContainer}>
            <Contact name='Bugs Bunny' description='Looney Tunes' favorite={false} />
            <Seperator />
            <Contact name='Charlie Brown' description='Peanuts' favorite={false} />
            <Seperator />
            <Contact name='Daffy Duck' description='Acme Looniversity' favorite={false} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  sectionHeaderContainer: {
    backgroundColor: '#E1E1E1',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  sectionHeaderTextStyle: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  contactsContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  }
});

export default App;
