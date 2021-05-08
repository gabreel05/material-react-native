import { DrawerActions, useNavigation } from '@react-navigation/core'
import { useCallback } from 'react'
import { IconButton } from 'react-native-paper'

export function MenuIcon() {
  const { dispatch } = useNavigation()

  const openDrawer = useCallback(() => {
    dispatch(DrawerActions.openDrawer())
  }, [])

  return <IconButton icon="menu" size={24} onPress={openDrawer} />
}
