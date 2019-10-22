package com.example.administrator.activity;

import android.app.Activity;
import android.os.Bundle;
import android.widget.EditText;

import com.example.administrator.debugtest.ParseH5Util;
import com.example.administrator.debugtest.R;

public class H5JsonActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_h5_json);
        final EditText mEdJson = findViewById(R.id.edJson);
        final String str = ParseH5Util.parseH5File(H5JsonActivity.this);
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mEdJson.setText(str);
            }
        });
    }
}
