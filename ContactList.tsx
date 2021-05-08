import { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { FAB, List, Portal, Title } from 'react-native-paper'
import { useIsFocused, useNavigation } from '@react-navigation/core'
import { ContextualActionBar } from './components/ContextualActionBar'

interface ContactListProps {}

export function ContactList() {
  const isScreenFocused = useIsFocused()

  const navigation = useNavigation()

  const [fabIsOpen, setFabIsOpen] = useState(false)
  const [cabIsOpen, setCabIsOpen] = useState(false)
  const [selectedItemName, setSelectedItemName] = useState('')

  const openHeader = useCallback(
    (str: string) => {
      setSelectedItemName(str)
      setCabIsOpen(!cabIsOpen)
    },
    [cabIsOpen]
  )

  const closeHeader = useCallback(() => {
    setCabIsOpen(false)
    setSelectedItemName('')
  }, [])

  useEffect(() => {
    if (cabIsOpen) {
      navigation.setOptions({
        header: (props: any) => (
          <ContextualActionBar
            {...props}
            title="selectedItemName"
            close={closeHeader}
          />
        )
      })
    } else {
      navigation.setOptions({
        header: undefined
      })
    }
  }, [cabIsOpen, selectedItemName])

  return (
    <View>
      <Title>Contacts</Title>
      <Portal>
        <FAB.Group
          visible={isScreenFocused}
          open={fabIsOpen}
          onStateChange={({ open }) => setFabIsOpen(open)}
          icon={fabIsOpen ? 'close' : 'account-multiple'}
          actions={[
            {
              icon: 'plus',
              label: 'Add new contact',
              onPress: () => {}
            },
            {
              icon: 'file-export',
              label: 'Export contact list',
              onPress: () => {}
            }
          ]}
        />
      </Portal>
      <List.Item
        title="Contact #1"
        description="Mar 18 | 3:31 PM"
        style={{ width: '100%' }}
        onPress={() => {}}
        onLongPress={() => openHeader('Contact #1')}
      />
    </View>
  )
}
