import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, View } from 'react-native';
import { Button, Paragraph, Text } from 'react-native-paper';

import { SafeContainer } from '~/components/layout/safe-container';
import { APP_VERSION_INFO } from '~/constants';
import { useAppTheme } from '~/theme/theme';

const { REPOSITORY } = APP_VERSION_INFO;

export default function Home() {
  const styles = useStyles();

  return (
    <SafeContainer>
      <View style={styles.root}>
        <Text variant="headlineMedium">ReactNative demos</Text>

        <Paragraph style={styles.paragraph}>
          Enjoy this proof of concepts collection for React Native app development using Expo SDK
          and development build
        </Paragraph>

        <Paragraph style={styles.paragraph}>
          Stay tuned because this is also an evolutive app used as a sandbox to learn by
          implementing real solutions to real problems.
        </Paragraph>

        <View>
          <Paragraph style={styles.centeredText}>
            Like it? Do not forget to star the repo!
          </Paragraph>

          <View style={styles.actions}>
            <Button mode="outlined" onPress={() => WebBrowser.openBrowserAsync(REPOSITORY)} icon="star">
              Star it!
            </Button>

            <Button
              mode="outlined"
              onPress={() => router.push('/(drawer)/(about)/about')}
              icon="book-information-variant">
              Licences…
            </Button>
          </View>
        </View>
      </View>
    </SafeContainer>
  );
}

const useStyles = () => {
  const theme = useAppTheme();

  return StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: theme.spacing(4),
      gap: theme.spacing(6),
    },
    paragraph: {
      width: '100%',
    },
    centeredText: {
      textAlign: 'center',
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: theme.spacing(1),
    },
    category: {
      justifyContent: 'center',
      marginVertical: theme.spacing(1),
    },
  });
};
