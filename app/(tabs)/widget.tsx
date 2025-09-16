import { useRef } from "react";
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const widgetUrl = 'https://chat.lorikeetcx.ai/widget?public_key=wk_a01eebcb-668b-4414-aadc-21fe7102c1e7&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6IjUwMTdlZDg2YzU1MTRkZGI3M2FhZWUyYjk2NjZhOThmYTdjZjY3OTU2OTI2MGZhNmZjOTc2MDViYzY5NDNlYTA2YTQ4Yzk3YWQ1OGRiN2UzZmFhNmExNzU3M2RiZGMzOWEzMDQ4MmFhYTQwYTE3MThiYzJhYzYwZWFlMWM0Zjk3IiwiaWF0IjoxNzU3OTg2ODA0LCJleHAiOjE3NTg1OTE2MDQsImF1ZCI6IjM2NjE3ZWY4LTcxNzMtNGI1Zi04MTVkLWJiZGJjNDYyZTZmOSJ9.YN6lUkLY4L8Ouq6R0WmU1ZxHA_jYh_cfGXmahRL8WGM&customisations=eyJtb2JpbGUiOnsiZGVmYXVsdF9vcGVuIjpmYWxzZX0sImRlc2t0b3AiOnsiZGVmYXVsdF9vcGVuIjp0cnVlfX0%3D';

export default function WidgetScreen() {
    const webViewRef = useRef<WebView>(null);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top', 'left', 'right']}>
            <View style={{ 
                flex: 1, 
            }}>
                <View style={{ 
                    flex: 1,
                    borderRadius: 8,
                    overflow: 'hidden',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3
                }}>
                    <WebView 
                        style={{ flex: 1 }} 
                        source={{ uri: widgetUrl }} 
                        onMessage={(event) => {
                            console.log('event', event);
                        }}
                        onNavigationStateChange={(navState) => {
                            console.log('navState', navState);
                            if (navState.url.includes('chat.lorikeetcx.ai/tickets')) {
                                return true;
                            }
                            return false; // Prevents navigation
                        }}
                        allowsInlineMediaPlayback={true}
                        mediaPlaybackRequiresUserAction={false}
                        startInLoadingState
                        scalesPageToFit={true}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}