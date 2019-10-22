package com.example.administrator.bean;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

/**
 * Created by Administrator on 2018/10/19.
 */

public class MyObject {
    private Context mContext;

    public MyObject(Context context) {
        mContext = context;
    }

    @JavascriptInterface
    public void showToat() {
        Toast.makeText(mContext, "你大爷", Toast.LENGTH_LONG).show();
    }
}
