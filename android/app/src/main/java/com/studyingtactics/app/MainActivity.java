package com.studyingtactics.app;

import android.net.Uri;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebViewClient;

public class MainActivity extends BridgeActivity {

    @Override
    protected void load() {
        super.load();

        getBridge().setWebViewClient(new BridgeWebViewClient(getBridge()) {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();

                if ("https".equals(url.getScheme())
                        && "localhost".equals(url.getHost())) {

                    String path = url.getPath();

                    if (path != null
                            && !path.equals("/")
                            && !path.contains(".")) {

                        view.loadUrl("https://localhost" + path + ".html");
                        return true;
                    }
                }

                return super.shouldOverrideUrlLoading(view, request);
            }
        });
    }
}