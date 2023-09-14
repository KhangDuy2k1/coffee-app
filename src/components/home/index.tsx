import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './header';
import Body from './body';
import Flast from './flashList';
import { useSelector } from 'react-redux';
import { selectIsModalVisible, selectIsModalVisibleOut } from '../../store/userslice';
import ModalNoti from '../../modal/nofi';
import ModaLogOut from '../../modal/logout';
export default function Home({navigation, param}) {
  const visible = useSelector(selectIsModalVisible);
  const visibleOut = useSelector(selectIsModalVisibleOut)
  return (
    <View style={styles.container}>
      <Flast/>
      <Body navigation={navigation} init={param}/>
      {visible && <ModalNoti/>}
      {visibleOut && <ModaLogOut/>}
      </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});