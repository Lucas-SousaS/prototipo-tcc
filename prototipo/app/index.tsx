import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  const isLogged = true; 

  useEffect(() => {
    if (!ready) return;

    if (pathname === '/') {
      if (isLogged) {
        router.replace('/home');
      } else {
        router.replace('/receita');
      }
    }
  }, [ready]);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
