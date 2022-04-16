import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { useMovies } from '../hooks/useMovies';


export type AppRootParamList = {
  Detail: undefined;
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}



export const HomeScreenResp = () => {

    const navigation = useNavigation();

    const { peliculasEnCine } = useMovies();

    return (
      <View>
          <Text>HomeScreenResp</Text>

          <Button 
            title="Ir detalle1"
            onPress={ () => navigation.navigate('Detail') }
          />

      </View>
    )
}
