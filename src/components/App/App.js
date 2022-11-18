import logo from '../../logo.svg';
import '@aws-amplify/ui-react/styles.css';
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card
} from '@aws-amplify/ui-react';

function App({ signOut }) {
  return (
    <View>
        <Card>
            <Image alt="logo" src={logo} className="App-logo" />
            <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
