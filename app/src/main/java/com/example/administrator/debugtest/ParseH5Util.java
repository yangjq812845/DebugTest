package com.example.administrator.debugtest;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

import static android.content.ContentValues.TAG;

/**
 * Created by Administrator on 2018/8/30.
 */

public class ParseH5Util {
//    private static String BASE_URL = "http://218.13.4.182:8040/spark/62AA1FE011455-sit/";
        private static String BASE_URL = "https://static.95508.com/mdss/mcube/62AA1FE271508-product/";
    private static String VHOST = "https://{0}.cgbchina.com.cn";
//    private static String mPass = "mPaaS产品测试";
    private static String mPass = "mPaaS";

    public static String parseH5File(Activity context) {
        try {
            String[] list = context.getAssets().list("");
            int i = 0;
            JSONObject object = new JSONObject();
            JSONObject config = new JSONObject();
            config.put("appPoolLimit", 3);
            config.put("limitReqRate", 13600);
            config.put("updateReqRate", 16400);
            config.put("versionRefreshRate", 86400);
            object.put("config", config);
            JSONArray data = new JSONArray();
            for (String fileName : list) {
                if (fileName.contains(".amr") && !fileName.isEmpty() && fileName.contains("_")) {
                    JSONObject dataJson = new JSONObject();
                    String[] split = fileName.substring(0, fileName.indexOf(".amr")).split("_");
                    Log.d(TAG, "parseH5File: " + split[0] + "---" + i++ + "---" + split[1]);
//                    dataJson.put("app_desc", "mPaaS");
                    dataJson.put("app_desc", mPass);
                    dataJson.put("app_id", split[0]);
                    dataJson.put("auto_install", 0);
                    dataJson.put("extend_info", "");
                    dataJson.put("fallback_base_url",
                            new StringBuffer(BASE_URL).append(split[0])
                                    .append("/")
                                    .append(split[1])
                                    .append("_all/nebula/fallback/").toString());
                    dataJson.put("global_pack_url", "");
                    dataJson.put("icon_url", "");
                    dataJson.put("main_url", "index.htm");
                    dataJson.put("online", 1);
                    dataJson.put("package_url", new StringBuffer(BASE_URL)
                            .append(split[0])
                            .append("/")
                            .append(split[1])
                            .append("_all/nebula/")
                            .append(split[0])
                            .append("_")
                            .append(split[1])
                            .append(".amr").toString());
                    dataJson.put("patch", "");
                    dataJson.put("sub_url", "");
                    dataJson.put("version", split[1]);
                    dataJson.put("vhost", VHOST.replace("{0}",split[0]));
                    data.put(dataJson);
                }
            }
            object.put("data", data);
            object.put("resultCode", 100);
            object.put("resultMsg", "操作成功");
            object.put("state", "success");
            Log.d(TAG, "parseH5File: " + object.toString());
//            printFile(context, object.toString());
            return object.toString().replace("\\", "");
        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return "";
    }

    public static void printFile(Context context, String content) {
        BufferedWriter bw = null;
        File file = new File("file:///android_asset/");
        String path = file.getAbsolutePath() + "/555.json";
        File newFile = new File(path);
        try {
            if (!newFile.exists()) {
                newFile.mkdir();
            }
            File newFile1 = new File(newFile.getAbsolutePath());
            FileOutputStream fileOutputStream = new FileOutputStream(newFile1);
            OutputStreamWriter osw = new OutputStreamWriter(fileOutputStream);
            bw = new BufferedWriter(osw);
            bw.write(content);
            bw.close();
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {

        }
    }
}
