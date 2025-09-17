import { LorikeetClient, WidgetScreen } from '@lorikeetai/react-native-widget';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

const publicKey = 'wk_a01eebcb-668b-4414-aadc-21fe7102c1e7';
// Testing only
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6IjhhNjllM2YzMDNmYjc0NGQwNzMzNWMwOWI1NjQ1MmE2ZWViNTc3ZmZmMTEyZDI2MzAxZTRhOTE1ZTU4YmMwZDY5M2UxMzk4OWM5YWQ4MDMyNmQ1MGNiZWUyMGIwMTg1MjNlYzc1NmI2YjNhZWJkZDdmYjg4Y2NhMzg1MGVlZWI0IiwiaWF0IjoxNzU4MDgzNDU3LCJleHAiOjE3NTg2ODgyNTcsImF1ZCI6IjM2NjE3ZWY4LTcxNzMtNGI1Zi04MTVkLWJiZGJjNDYyZTZmOSJ9.-t_FxQKbFKY-vDg5dAko274AyZGPByxfvQOrlLTN1ZU'

export const WidgetUsingComponent = () => {
    return (
        <WidgetScreen 
            publicKey={publicKey} 
            authToken={authToken} 
            renderHeader={client =>(
                <View style={{ width: '100%', padding: 16, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                    <Text>Custom Header, team cool</Text>
                </View>
            )}
            customisations={{
                title: 'Local development'
            }} 
        />
    );
}

const lorikeetClient = new LorikeetClient({
    public_key: publicKey,
    customisations: {
        title: 'Local development'
    }
});

const url = lorikeetClient.getWebviewUrl({
    token: authToken,
});

export const WidgetUsingClient = () => {
    return (
        <WebView source={{ uri: url }} />
    );
}

export default WidgetUsingComponent
