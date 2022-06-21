import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import NoneImage from '../assets/none.png';
import Star from '../assets/star.png';

const Contact = ({ name, description, avatar, favorite }) => {
    return (
        <View style={styles.contactContainer}>
            {avatar
                ? <Image source={avatar} width={60} height={60} style={{ width: 60, height: 60 }}/>
                : <Image source={NoneImage} />
            }
            <View style={styles.contactInfoContainer}>
                <View style={styles.flexRow}>
                    {favorite
                        ? <Image source={Star} />
                        : <View width={20} />
                    }
                    <Text style={styles.nameTextStyle}>{' ' + name}</Text>
                </View>
                <Text style={styles.descriptionTextStyle}>{description}</Text>
            </View>              
        </View>
    );
}

const styles = StyleSheet.create({
    contactContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
    },
    contactInfoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    flexRow: {
        flexDirection: 'row',
    },
    nameTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    descriptionTextStyle: {
        color: '#777777',
        fontSize: 12,
        marginLeft: 25,
    }
});

export default Contact;