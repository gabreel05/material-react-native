import { Appbar } from 'react-native-paper'

interface ContextualActionBarProps {
  title: string
  close: () => void
}

export function ContextualActionBar(props: ContextualActionBarProps) {
  return (
    <Appbar.Header {...props} style={{ width: '100%' }}>
      <Appbar.Action icon="close" onPress={props.close} />
      <Appbar.Content title={props.title} />
      <Appbar.Action icon="delete" onPress={() => {}} />
      <Appbar.Action icon="content-copy" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  )
}
