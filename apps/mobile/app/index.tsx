import { View, Text } from 'react-native';
import { Button } from '@omnipulse/shared-ui';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 12 }}>OmniPulse Mobile</Text>
      <Text style={{ marginBottom: 20, textAlign: 'center' }}>Mobile patient experience</Text>
      <Button>Launch</Button>
    </View>
  );
}
