package com.example.administrator.activity;

import android.Manifest;
import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.Image;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Message;
import android.provider.MediaStore;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v4.content.PermissionChecker;
import android.util.Base64;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.administrator.debugtest.R;
import com.example.administrator.utils.ContactUtil;
import com.example.administrator.utils.Utils;
import com.uuzuche.lib_zxing.activity.CaptureActivity;
import com.uuzuche.lib_zxing.activity.CodeUtils;

import org.androidannotations.annotations.AfterViews;
import org.androidannotations.annotations.Click;
import org.androidannotations.annotations.EActivity;
import org.androidannotations.annotations.ViewById;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.concurrent.Executors;

@EActivity(R.layout.activity_main)
public class MainActivity extends Activity {
    private static final String TAG = "MainActivity";
    // 要申请的权限
    private String[] permissions = {Manifest.permission.WRITE_EXTERNAL_STORAGE};
    private String oldStr = "这`是~测!试@字#符$串%替^换&看*看+行=不|行{后}面'不:知;道'\"\\[\\]<>/?%—|{}‘”“’";
    private final int resultCode = 110;
    private final int REQUEST_CODE = 111;
    private final int REQUEST_PERMISSION = 1;

    @ViewById(R.id.ivPic)
    ImageView mIvPic;
    @ViewById(R.id.etWeb)
    EditText etWeb;

    @ViewById(R.id.scrollViewRl)
    RelativeLayout scrollViewRl;


    @AfterViews
    void init() {
        ActivityCompat.requestPermissions(this, permissions, 321);
        initScrollView();
    }

    private void initScrollView() {
        for (int i = 0; i < 5; i++) {
            View view = LayoutInflater.from(MainActivity.this).inflate(R.layout.templet_more_label_finance, scrollViewRl, false);
            RelativeLayout finance = view.findViewById(R.id.finance_rl);
            RelativeLayout.LayoutParams params = (RelativeLayout.LayoutParams) view.getLayoutParams();
            params.setMargins(i * (params.width - Utils.dp2px(MainActivity.this, 2)), 0, 0, 0);
            scrollViewRl.addView(view);
        }
    }

    @Click(R.id.scan)
    void scanClick() {
        String permission = Manifest.permission.CAMERA;
        if (PermissionChecker.checkSelfPermission(this, permission) != PermissionChecker.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{permission}, REQUEST_PERMISSION);
        } else {
            Intent intent = new Intent(MainActivity.this, CaptureActivity.class);
            startActivityForResult(intent, REQUEST_CODE);
        }
    }


    @Click(R.id.tvMakeH5File)
    void h5FileClick() {
        startActivity(new Intent(MainActivity.this, H5JsonActivity.class));
    }

    @Click(R.id.toWeb)
    void toWebClick() {
        WebActivity_.intent(this).url(etWeb.getText().toString()).start();
    }

    @Click(R.id.btnReplaceStr)
    void replaceStrClick() {
        String parseStr = "[`~!@#$%^&*+=|{}':;'\"\\[\\]<>/?%—|{}‘”“’]";
        String s = oldStr.replaceAll(parseStr, "");
        Log.d(TAG, "onClick:11111111===》  " + s);
    }

    @Click(R.id.button2)
    void button2Click() {
        Executors.newCachedThreadPool().execute(new Runnable() {
            @Override
            public void run() {
                GetNetIp();
            }
        });
    }

    @Click(R.id.btn2Web)
    void btn2WebClick() {
    }

    @Click(R.id.testNull)
    void testNullClick() {
        testRemoveNull();
    }

    @Click(R.id.testContact)
    void testContactClick() {
        testContact();
    }

    @Click(R.id.testPic)
    void testPicClick() {
        testPic();
    }

    @Click(R.id.testFxjc)
    void testFxjcClick() {
        // 通过包名获取此APP详细信息，包括Activities、services、versioncode、name等等
        PackageInfo packageinfo = null;
        try {
            packageinfo = getPackageManager().getPackageInfo("com.cs_credit_bank", 0);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();

        }
        if (packageinfo == null) {
            return;
        }

        // 创建一个类别为CATEGORY_LAUNCHER的该包名的Intent
        Intent resolveIntent = new Intent(Intent.ACTION_MAIN, null);
        resolveIntent.addCategory(Intent.CATEGORY_LAUNCHER);
        resolveIntent.setPackage(packageinfo.packageName);

        // 通过getPackageManager()的queryIntentActivities方法遍历
        List<ResolveInfo> resolveinfoList = getPackageManager()
                .queryIntentActivities(resolveIntent, 0);

        ResolveInfo resolveinfo = resolveinfoList.iterator().next();
        if (resolveinfo != null) {
            // packagename = 参数packname
            String packageName = resolveinfo.activityInfo.packageName;
            // 这个就是我们要找的该APP的LAUNCHER的Activity[组织形式：packagename.mainActivityname]
            String className = resolveinfo.activityInfo.name;
            // LAUNCHER Intent
            Intent intent = new Intent(Intent.ACTION_MAIN);
            intent.addCategory(Intent.CATEGORY_LAUNCHER);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            // 设置ComponentName参数1:packagename参数2:MainActivity路径
            ComponentName cn = new ComponentName(packageName, className);
            intent.setComponent(cn);
            Uri parse = Uri.parse("credit://wl/openxml/?short_linkType=1&short_link=cdbank_open_pay&picsBackUp=secret=加密串&packgeName=第三方app的包名");
            intent.setData(parse);
            startActivity(intent);

        }
    }


    private void testPic() {
        Intent intent = new Intent(Intent.ACTION_GET_CONTENT, null);
        intent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "image/*");
        startActivityForResult(intent, resultCode);
    }

    private void testContact() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            //ContextCompat.checkSelfPermission() 方法 指定context和某个权限 返回PackageManager.PERMISSION_DENIED或者PackageManager.PERMISSION_GRANTED
            if (ContextCompat.checkSelfPermission(MainActivity.this, android.Manifest.permission.READ_CONTACTS) != PackageManager.PERMISSION_GRANTED) {
                // 申请权限 第一个可以指定多个请求的权限 第二个参数为请求码 第三个参数为当前对象
                requestPermissions(new String[]{android.Manifest.permission.READ_CONTACTS}, 1100);
            } else {
                //权限已经被授予，在这里直接写要执行的相应方法即可
                // 低于6.0的手机直接访问
                try {
//                String info = new ContactUtil(MainActivity.this).getContactInfo();
                    String s = new ContactUtil(MainActivity.this).testGetAllContact();
                } catch (Throwable throwable) {
                    throwable.printStackTrace();
                }
            }
        } else {
            // 低于6.0的手机直接访问
            try {
//                String info = new ContactUtil(MainActivity.this).getContactInfo();
                String s = new ContactUtil(MainActivity.this).testGetAllContact();
            } catch (Throwable throwable) {
                throwable.printStackTrace();
            }
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, final Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 1100 && resultCode == RESULT_OK) {
            // 低于6.0的手机直接访问
            try {
//                String info = new ContactUtil(MainActivity.this).getContactInfo();
                new ContactUtil(MainActivity.this).testGetAllContact();
            } catch (Throwable throwable) {
                throwable.printStackTrace();
            }
        } else if (requestCode == 110 && resultCode == RESULT_OK) {
            final Handler handler = new Handler() {
                @Override
                public void handleMessage(Message msg) {
                    super.handleMessage(msg);
                    Bitmap bitmap = (Bitmap) msg.obj;
//                    Utils.saveImageToGallery(MainActivity.this, bitmap);
//                    byte[] decodedString = Base64.decode(pic, Base64.DEFAULT);
//                    Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
                    mIvPic.setImageBitmap(bitmap);
                }
            };
            new Thread(new Runnable() {
                @Override
                public void run() {
                    String path = Utils.getImageAbsolutePath(MainActivity.this, data.getData());
//                    Bitmap bitmap = BitmapFactory.decodeFile(path);
//                    Bitmap newBitmap = Utils.ImageCompressL(bitmap);
                    Bitmap bitmap = Utils.compressBitmap(MainActivity.this, path, 200, null);
                    Message message = handler.obtainMessage();
                    message.obj = bitmap;
                    handler.sendMessage(message);
                }
            }).start();


        } else if (requestCode == REQUEST_CODE) {
            //处理扫描结果（在界面上显示）
            if (null != data) {
                Bundle bundle = data.getExtras();
                if (bundle == null) {
                    return;
                }
                if (bundle.getInt(CodeUtils.RESULT_TYPE) == CodeUtils.RESULT_SUCCESS) {
                    String result = bundle.getString(CodeUtils.RESULT_STRING);
                    etWeb.setText(result);
//                    Toast.makeText(this, "解析结果:" + result, Toast.LENGTH_LONG).show();
                } else if (bundle.getInt(CodeUtils.RESULT_TYPE) == CodeUtils.RESULT_FAILED) {
                    Toast.makeText(MainActivity.this, "解析二维码失败", Toast.LENGTH_LONG).show();
                }
            }
        }
    }

    private String getPublicIp() {
        try {
            String path = "http://ip.taobao.com/service/getIpInfo2.php?ip=myip";// 要获得html页面内容的地址
            URL url = new URL(path);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestProperty("contentType", "UTF-8");
            conn.setConnectTimeout(5 * 1000);
            conn.setRequestMethod("GET");
            InputStream inStream = conn.getInputStream();
            BufferedReader in = new BufferedReader(new InputStreamReader(inStream, "UTF-8"));
            StringBuffer buffer = new StringBuffer();
            String line = "";
            while ((line = in.readLine()) != null) {
                buffer.append(line);
            }
            String str = buffer.toString();
            String ipString1 = str.substring(str.indexOf("["));
            String ipsString2 = ipString1.substring(ipString1.indexOf("[") + 1,
                    ipString1.lastIndexOf("]"));
            return ipsString2;
        } catch (Exception e) {
            Log.d(TAG, "getPublicIp: " + "获取公网IP连接超时");
            return "连接超时";
        }
    }

    /**
     * 获得外网IP
     *
     * @return 外网IP
     */
    private String getInternetIp() {
        try {
            Enumeration<NetworkInterface> networks = NetworkInterface.getNetworkInterfaces();
            InetAddress ip = null;
            Enumeration<InetAddress> addrs;
            while (networks.hasMoreElements()) {
                addrs = networks.nextElement().getInetAddresses();
                while (addrs.hasMoreElements()) {
                    ip = addrs.nextElement();
                    if (ip != null && ip instanceof Inet4Address && ip.isSiteLocalAddress()) {
                        String address = ip.getHostAddress();
                        return address;
                    }
                }
            }
            // 如果没有外网IP，就返回内网IP
            return "";
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public String GetNetIp() {
        String IP = "";
        try {
            String address = "http://ip.taobao.com/service/getIpInfo2.php?ip=myip";
            URL url = new URL(address);
            HttpURLConnection connection = (HttpURLConnection) url
                    .openConnection();
            connection.setUseCaches(false);
            connection.setRequestMethod("GET");
            connection.setRequestProperty("user-agent",
                    "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.7 Safari/537.36"); //设置浏览器ua 保证不出现503

            if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) {
                InputStream in = connection.getInputStream();
                BufferedReader reader = new BufferedReader(
                        new InputStreamReader(in));

                String tmpString = "";
                StringBuilder retJSON = new StringBuilder();
                while ((tmpString = reader.readLine()) != null) {
                    retJSON.append(tmpString + "\n");
                }
                JSONObject jsonObject = new JSONObject(retJSON.toString());
                String code = jsonObject.getString("code");
                if (code.equals("0")) {
                    JSONObject data = jsonObject.getJSONObject("data");
                    IP = data.getString("ip");
                } else {
                    IP = "";
                }
            } else {
                IP = "";
            }
        } catch (Exception e) {
            IP = "";
        }
        return IP;
    }

    private void testRemoveNull() {
        List<String> lists = new ArrayList<>();
        lists.add("a");
        lists.add("b");
        lists.add("v");

        lists.remove(null);
        Toast.makeText(this, "" + lists.size(), Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == REQUEST_PERMISSION) {
            Intent intent = new Intent(MainActivity.this, CaptureActivity.class);
            startActivityForResult(intent, REQUEST_CODE);
        }
    }
}
