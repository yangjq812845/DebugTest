package com.example.administrator.debugtest;

import java.util.List;

/**
 * Created by Administrator on 2018/8/30.
 */

public class testjson {

    /**
     * config : {"appPoolLimit":3,"limitReqRate":13600,"updateReqRate":16400,"versionRefreshRate":86400}
     * data : [{"app_desc":"mPaaS","app_id":"20181001","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20181001/1.0.0.7_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20181001/1.0.0.7_all/nebula/20181001_1.0.0.7.amr","patch":"","sub_url":"","version":"1.0.0.7","vhost":"http://20181001.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182001","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182001/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182001/1.0.0.16_all/nebula/20182001_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182001.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182002","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182002/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182002/1.0.0.16_all/nebula/20182002_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182002.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182003","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182003/1.0.0.17_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182003/1.0.0.17_all/nebula/20182003_1.0.0.17.amr","patch":"","sub_url":"","version":"1.0.0.17","vhost":"http://20182003.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182004","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182004/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182004/1.0.0.16_all/nebula/20182004_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182004.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182005","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182005/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182005/1.0.0.16_all/nebula/20182005_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182005.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182006","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182006/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182006/1.0.0.16_all/nebula/20182006_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182006.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182007","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182007/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182007/1.0.0.16_all/nebula/20182007_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182007.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182008","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182008/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182008/1.0.0.16_all/nebula/20182008_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182008.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182009","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182009/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182009/1.0.0.16_all/nebula/20182009_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182009.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182010","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182010/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182010/1.0.0.16_all/nebula/20182010_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182010.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182011","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182011/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182011/1.0.0.16_all/nebula/20182011_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182011.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182012","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182012/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182012/1.0.0.16_all/nebula/20182012_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182012.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182013","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182013/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182013/1.0.0.16_all/nebula/20182013_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182013.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182014","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182014/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182014/1.0.0.16_all/nebula/20182014_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182014.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182015","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182015/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182015/1.0.0.16_all/nebula/20182015_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182015.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182016","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182016/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182016/1.0.0.16_all/nebula/20182016_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182016.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182017","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182017/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182017/1.0.0.16_all/nebula/20182017_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182017.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182018","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182018/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182018/1.0.0.16_all/nebula/20182018_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182018.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182019","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182019/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182019/1.0.0.16_all/nebula/20182019_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182019.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182020","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182020/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182020/1.0.0.16_all/nebula/20182020_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182020.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182021","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182021/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182021/1.0.0.16_all/nebula/20182021_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182021.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182022","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182022/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182022/1.0.0.16_all/nebula/20182022_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182022.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182023","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182023/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182023/1.0.0.16_all/nebula/20182023_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182023.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182024","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182024/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182024/1.0.0.16_all/nebula/20182024_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182024.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182025","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182025/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182025/1.0.0.16_all/nebula/20182025_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182025.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182026","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182026/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182026/1.0.0.16_all/nebula/20182026_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182026.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182027","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182027/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182027/1.0.0.16_all/nebula/20182027_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182027.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182028","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182028/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182028/1.0.0.16_all/nebula/20182028_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182028.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182029","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182029/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182029/1.0.0.16_all/nebula/20182029_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182029.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182030","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182030/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182030/1.0.0.16_all/nebula/20182030_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182030.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182031","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182031/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182031/1.0.0.16_all/nebula/20182031_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182031.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182032","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182032/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182032/1.0.0.16_all/nebula/20182032_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182032.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182033","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182033/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182033/1.0.0.16_all/nebula/20182033_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182033.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182034","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182034/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182034/1.0.0.16_all/nebula/20182034_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182034.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182035","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182035/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182035/1.0.0.16_all/nebula/20182035_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182035.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182036","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182036/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182036/1.0.0.16_all/nebula/20182036_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182036.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182037","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182037/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182037/1.0.0.16_all/nebula/20182037_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182037.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182038","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182038/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182038/1.0.0.16_all/nebula/20182038_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182038.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182039","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182039/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182039/1.0.0.16_all/nebula/20182039_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182039.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182040","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182040/1.0.0.16_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182040/1.0.0.16_all/nebula/20182040_1.0.0.16.amr","patch":"","sub_url":"","version":"1.0.0.16","vhost":"http://20182040.fxjcweb.com.cn"},{"app_desc":"mPaaS","app_id":"20182041","auto_install":0,"extend_info":"","fallback_base_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182041/1.0.0.17_all/nebula/fallback/","global_pack_url":"","icon_url":"","main_url":"index.htm","online":1,"package_url":"https://static.95508.com/mdss/mcube/62AA1FE271508-product/20182041/1.0.0.17_all/nebula/20182041_1.0.0.17.amr","patch":"","sub_url":"","version":"1.0.0.17","vhost":"http://20182041.fxjcweb.com.cn"}]
     * resultCode : 100
     * resultMsg : 操作成功
     * state : success
     */

    private ConfigBean config;
    private int resultCode;
    private String resultMsg;
    private String state;
    private List<DataBean> data;

    public ConfigBean getConfig() {
        return config;
    }

    public void setConfig(ConfigBean config) {
        this.config = config;
    }

    public int getResultCode() {
        return resultCode;
    }

    public void setResultCode(int resultCode) {
        this.resultCode = resultCode;
    }

    public String getResultMsg() {
        return resultMsg;
    }

    public void setResultMsg(String resultMsg) {
        this.resultMsg = resultMsg;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public List<DataBean> getData() {
        return data;
    }

    public void setData(List<DataBean> data) {
        this.data = data;
    }

    public static class ConfigBean {
        /**
         * appPoolLimit : 3
         * limitReqRate : 13600
         * updateReqRate : 16400
         * versionRefreshRate : 86400
         */

        private int appPoolLimit;
        private int limitReqRate;
        private int updateReqRate;
        private int versionRefreshRate;

        public int getAppPoolLimit() {
            return appPoolLimit;
        }

        public void setAppPoolLimit(int appPoolLimit) {
            this.appPoolLimit = appPoolLimit;
        }

        public int getLimitReqRate() {
            return limitReqRate;
        }

        public void setLimitReqRate(int limitReqRate) {
            this.limitReqRate = limitReqRate;
        }

        public int getUpdateReqRate() {
            return updateReqRate;
        }

        public void setUpdateReqRate(int updateReqRate) {
            this.updateReqRate = updateReqRate;
        }

        public int getVersionRefreshRate() {
            return versionRefreshRate;
        }

        public void setVersionRefreshRate(int versionRefreshRate) {
            this.versionRefreshRate = versionRefreshRate;
        }
    }

    public static class DataBean {
        /**
         * app_desc : mPaaS
         * app_id : 20181001
         * auto_install : 0
         * extend_info :
         * fallback_base_url : https://static.95508.com/mdss/mcube/62AA1FE271508-product/20181001/1.0.0.7_all/nebula/fallback/
         * global_pack_url :
         * icon_url :
         * main_url : index.htm
         * online : 1
         * package_url : https://static.95508.com/mdss/mcube/62AA1FE271508-product/20181001/1.0.0.7_all/nebula/20181001_1.0.0.7.amr
         * patch :
         * sub_url :
         * version : 1.0.0.7
         * vhost : http://20181001.fxjcweb.com.cn
         */

        private String app_desc;
        private String app_id;
        private int auto_install;
        private String extend_info;
        private String fallback_base_url;
        private String global_pack_url;
        private String icon_url;
        private String main_url;
        private int online;
        private String package_url;
        private String patch;
        private String sub_url;
        private String version;
        private String vhost;

        public String getApp_desc() {
            return app_desc;
        }

        public void setApp_desc(String app_desc) {
            this.app_desc = app_desc;
        }

        public String getApp_id() {
            return app_id;
        }

        public void setApp_id(String app_id) {
            this.app_id = app_id;
        }

        public int getAuto_install() {
            return auto_install;
        }

        public void setAuto_install(int auto_install) {
            this.auto_install = auto_install;
        }

        public String getExtend_info() {
            return extend_info;
        }

        public void setExtend_info(String extend_info) {
            this.extend_info = extend_info;
        }

        public String getFallback_base_url() {
            return fallback_base_url;
        }

        public void setFallback_base_url(String fallback_base_url) {
            this.fallback_base_url = fallback_base_url;
        }

        public String getGlobal_pack_url() {
            return global_pack_url;
        }

        public void setGlobal_pack_url(String global_pack_url) {
            this.global_pack_url = global_pack_url;
        }

        public String getIcon_url() {
            return icon_url;
        }

        public void setIcon_url(String icon_url) {
            this.icon_url = icon_url;
        }

        public String getMain_url() {
            return main_url;
        }

        public void setMain_url(String main_url) {
            this.main_url = main_url;
        }

        public int getOnline() {
            return online;
        }

        public void setOnline(int online) {
            this.online = online;
        }

        public String getPackage_url() {
            return package_url;
        }

        public void setPackage_url(String package_url) {
            this.package_url = package_url;
        }

        public String getPatch() {
            return patch;
        }

        public void setPatch(String patch) {
            this.patch = patch;
        }

        public String getSub_url() {
            return sub_url;
        }

        public void setSub_url(String sub_url) {
            this.sub_url = sub_url;
        }

        public String getVersion() {
            return version;
        }

        public void setVersion(String version) {
            this.version = version;
        }

        public String getVhost() {
            return vhost;
        }

        public void setVhost(String vhost) {
            this.vhost = vhost;
        }
    }
}
