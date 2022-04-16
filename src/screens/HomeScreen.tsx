
import React from 'react'

import Carousel from 'react-native-snap-carousel';

import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const { width: windowWidth } = Dimensions.get('window');


export const HomeScreen = () => {


    const { peliculasEnCine, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();


    if( isLoading ) {

      return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
            <ActivityIndicator color="red" size={100}/>
        </View>
      )
    }

    return (
      <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
                //ref={(c) => { this._carousel = c; }}
                data={ peliculasEnCine }
                renderItem={( { item }: any )=> <MoviePoster movie={ item } /> }
                sliderWidth={ windowWidth }
                itemWidth={ 300 }
              />
          </View>
      </View>
    )
}
