import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 30,
  },
});

export default function App() {
  return (
    <>
      <WebView
        mixedContentMode='always'
        style={styles.WebViewStyle}
        injectedJavaScriptBeforeContentLoaded={`
        window.onerror = function(message, sourcefile, lineno, colno, error) {
          alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
          return true;
        };
      `}
        source={{ uri: 'https://teamproject-auxios.netlify.app/login' }}
      />
    </>
  );
}

//'https://teamproject-auxios.netlify.app'
//'https://teamproject-auxios-test.netlify.app'
