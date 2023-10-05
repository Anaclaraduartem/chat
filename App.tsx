import React from 'react';
import { SectionList, StyleSheet, Text, View, } from 'react-native';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55
  },
  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#ffb6c1',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },


});



const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'A', data: ['Ana', 'Ariane', 'Amanda']},
          {
            title: 'B',
            data: [
              'Bruna',
              'Bárbara',
              'Bianca',
            ],
          },
          {
            title: 'C',
            data: [
              'Camila',
              'Carol',
              'Carla',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
    

  );
 
};
 


export default SectionListBasics;