import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import { Image } from 'react-native'

export function MenuContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        resizeMode="cover"
        style={{ width: '100%', height: 140 }}
        source={require('')}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
