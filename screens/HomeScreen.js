import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const products = [
  { id: '1', name: 'Product 1', price: 'Ksh 150', image: require('../assets/product1.jpeg') },
  { id: '2', name: 'Product 2', price: 'Ksh 150', image: require('../assets/product2.png') },
  { id: '3', name: 'Product 3', price: 'Ksh 150', image: require('../assets/product3.jpeg') },
  { id: '4', name: 'Product 4', price: 'Ksh 150', image: require('../assets/product4.jpeg') },
  { id: '5', name: 'Product 5', price: 'Ksh 150', image: require('../assets/product5.jpeg') },
];

const HomeScreen = () => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} resizeMode="cover" />
      <Text style={styles.productPrice}>{item.price}</Text>
      <Button title="View" type="outline" containerStyle={styles.viewButton} />
      <Image 
      onPress={() => {
        // Implement a function to open WhatsApp with the provided number
        alert('Opening WhatsApp...');
      }}
      source={require('../assets/whatsapp_icon.png')} style={styles.whatsappIcon} />
  
      
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Banner */}
      <Image
        source={require('../assets/banner.jpeg')}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Account Info Card */}
      <Card containerStyle={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="account-circle" type="material" size={40} color="#555" />
          <Text style={styles.cardHeaderText}>Total Give Away Amount: Ksh 200,000,000</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.infoText}>Balance: Ksh 500</Text>
          <Text style={styles.infoText}>Total Amount Earned: Ksh 1,000</Text>
          <Text style={styles.infoText}>Seller Code: 725828589</Text>
        </View>
        <Button
          title="View Details"
          type="outline"
          containerStyle={styles.viewDetailsButton}
        />
      </Card>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 200,
    width: '100%',
  },
  card: {
    marginTop: -50,
    borderRadius: 10,
    elevation: 3,
    color:  '#555',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderText: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: 'bold',
    color:  '#555',
  },
  cardBody: {
    marginTop: 5,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color:  '#555',
  },
  viewDetailsButton: {
    marginTop: 10,
  },
  productList: {
    marginTop: 20,
  },
  productItem: {
    marginRight: 10,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
    color:  '#555',
  },
  viewButton: {
    marginBottom: 5,
  },
  whatsappIcon: {
    width: 30,
    height: 30,
    marginTop: 5,
    borderRadius: 50,
  },


});

export default HomeScreen;
