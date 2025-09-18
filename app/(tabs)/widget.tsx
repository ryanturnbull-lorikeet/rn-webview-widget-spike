import { LorikeetClient, LorikeetWidgetHeader, LorikeetWidgetView, LorikeetWidgetWebView } from '@lorikeetai/react-native-widget';
import { View } from 'react-native';

const publicKey = 'wk_a01eebcb-668b-4414-aadc-21fe7102c1e7';
// Testing only
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6IjhhNjllM2YzMDNmYjc0NGQwNzMzNWMwOWI1NjQ1MmE2ZWViNTc3ZmZmMTEyZDI2MzAxZTRhOTE1ZTU4YmMwZDY5M2UxMzk4OWM5YWQ4MDMyNmQ1MGNiZWUyMGIwMTg1MjNlYzc1NmI2YjNhZWJkZDdmYjg4Y2NhMzg1MGVlZWI0IiwiaWF0IjoxNzU4MDgzNDU3LCJleHAiOjE3NTg2ODgyNTcsImF1ZCI6IjM2NjE3ZWY4LTcxNzMtNGI1Zi04MTVkLWJiZGJjNDYyZTZmOSJ9.-t_FxQKbFKY-vDg5dAko274AyZGPByxfvQOrlLTN1ZU'

export const WidgetUsingComponent = () => {
    return (
        <LorikeetWidgetView 
            publicKey={publicKey} 
            authToken={authToken} 
            customisations={{
                title: 'Local development'
            }} 
        />
    );
}

const lorikeetClient = new LorikeetClient({
    public_key: publicKey,
    customisations: {
        title: 'Local development',
        hideHeader: true,
    }
});

const url = lorikeetClient.getWebviewUrl({
    token: authToken,
});

export const WidgetUsingClient = () => {
    return (
        <View style={{ flex: 1 }}>
            <LorikeetWidgetHeader title='Local development' />
            <LorikeetWidgetWebView uri={url} baseUrl={'https://chat.lorikeetcx.ai'} webviewProps={{}} />
        </View>
    );
}

export default WidgetUsingClient
