package com.example.administrator.utils;


import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;
import android.provider.ContactsContract.CommonDataKinds.Email;
import android.provider.ContactsContract.CommonDataKinds.Event;
import android.provider.ContactsContract.CommonDataKinds.Im;
import android.provider.ContactsContract.CommonDataKinds.Nickname;
import android.provider.ContactsContract.CommonDataKinds.Note;
import android.provider.ContactsContract.CommonDataKinds.Organization;
import android.provider.ContactsContract.CommonDataKinds.Phone;
import android.provider.ContactsContract.CommonDataKinds.StructuredName;
import android.provider.ContactsContract.CommonDataKinds.StructuredPostal;
import android.provider.ContactsContract.CommonDataKinds.Website;
import android.provider.ContactsContract.Contacts;
import android.provider.ContactsContract.Data;
import android.text.TextUtils;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static android.icu.lang.UProperty.NAME;

/**
 * ljn
 */

public class ContactUtil {
    private List<Contacts> list;
    private Context context;
    private JSONArray contactData;
    private JSONObject jsonObject;

    public ContactUtil(Context context) {
        this.context = context;
    }

    /**
     * * 获取联系人信息，并把数据转换成json数据
     * *
     * * @return
     * * @throws JSONException
     */
    public String getContactInfo() throws JSONException {
        list = new ArrayList<>();
        contactData = new JSONArray();
        String mimetype = "";
        int oldrid = -1;
        int contactId = -1;
// 1.查询通讯录所有联系人信息，通过id排序，我们看下android联系人的表就知道，所有的联系人的数据是由RAW_CONTACT_ID来索引开的
// 所以，先获取所有的人的RAW_CONTACT_ID
        Cursor cursor = context.getContentResolver().query(Data.CONTENT_URI,
                null, null, null, Data.RAW_CONTACT_ID);
        if (cursor == null) {
            return null;
        }
        int numm = 0;
        while (cursor.moveToNext()) {
            contactId = cursor.getInt(cursor.getColumnIndex(Data.RAW_CONTACT_ID));
            if (oldrid != contactId) {
                jsonObject = new JSONObject();
                contactData.put(jsonObject);
                numm++;
                oldrid = contactId;
            }
            mimetype = cursor.getString(cursor.getColumnIndex(Data.MIMETYPE));
            // 1.1,拿到联系人的各种名字
            if (StructuredName.CONTENT_ITEM_TYPE.equals(mimetype)) {
                cursor.getString(cursor.getColumnIndex(StructuredName.DISPLAY_NAME));

               /* String prefix = cursor.getString(cursor.getColumnIndex(StructuredName.PREFIX));
                jsonObject.put("prefix", prefix);*/
                String firstName = cursor.getString(cursor.getColumnIndex(StructuredName.FAMILY_NAME));
                String middleName = cursor.getString(cursor.getColumnIndex(StructuredName.MIDDLE_NAME));
                String lastname = cursor.getString(cursor.getColumnIndex(StructuredName.GIVEN_NAME));
                jsonObject.put("Name", checkNull(firstName) + checkNull(middleName) + checkNull(lastname));
               /* String suffix = cursor.getString(cursor.getColumnIndex(StructuredName.SUFFIX));
                jsonObject.put("suffix", suffix);
                String phoneticFirstName = cursor.getString(cursor.getColumnIndex(StructuredName.PHONETIC_FAMILY_NAME));
                jsonObject.put("phoneticFirstName", phoneticFirstName);

                String phoneticMiddleName = cursor.getString(cursor.getColumnIndex(StructuredName.PHONETIC_MIDDLE_NAME));
                jsonObject.put("phoneticMiddleName", phoneticMiddleName);
                String phoneticLastName = cursor.getString(cursor.getColumnIndex(StructuredName.PHONETIC_GIVEN_NAME));
                jsonObject.put("phoneticLastName", phoneticLastName);*/
            }
            // 1.2 获取各种电话信息
            if (Phone.CONTENT_ITEM_TYPE.equals(mimetype)) {
                int phoneType = cursor.getInt(cursor.getColumnIndex(Phone.TYPE)); // 手机
                if (phoneType == Phone.TYPE_MOBILE) {
                    String mobile = cursor.getString(cursor.getColumnIndex(Phone.NUMBER));
                    jsonObject.put("mobile", mobile);
                }
                // 住宅电话
                if (phoneType == Phone.TYPE_HOME) {
                    String homeNum = cursor.getString(cursor.getColumnIndex(Phone.NUMBER));
                    jsonObject.put("homeNum", homeNum);
                }
                // 单位电话
                if (phoneType == Phone.TYPE_WORK) {
                    String jobNum = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("jobNum", jobNum);
                }
               /*  // 单位手机
                if (phoneType == Phone.TYPE_WORK_MOBILE) {
                    String jobMobile = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("jobMobile", jobMobile);
                }
               // 单位传真
                if (phoneType == Phone.TYPE_FAX_WORK) {
                    String workFax = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("workFax", workFax);
                }
                // 住宅传真
                if (phoneType == Phone.TYPE_FAX_HOME) {
                    String homeFax = cursor.getString(cursor.getColumnIndex(Phone.NUMBER));
                    jsonObject.put("homeFax", homeFax);
                } // 寻呼机
                if (phoneType == Phone.TYPE_PAGER) {
                    String pager = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("pager", pager);
                }
                // 回拨号码
                if (phoneType == Phone.TYPE_CALLBACK) {
                    String quickNum = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("quickNum", quickNum);
                }
                // 公司总机
                if (phoneType == Phone.TYPE_COMPANY_MAIN) {
                    String jobTel = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("jobTel", jobTel);
                }
                // 车载电话
                if (phoneType == Phone.TYPE_CAR) {
                    String carNum = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("carNum", carNum);
                }
                // ISDN
                if (phoneType == Phone.TYPE_ISDN) {
                    String isdn = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("isdn", isdn);
                }
                // 总机
                if (phoneType == Phone.TYPE_MAIN) {
                    String tel = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("tel", tel);
                }
                // 无线装置
                if (phoneType == Phone.TYPE_RADIO) {
                    String wirelessDev = cursor.getString(cursor.getColumnIndex(Phone.NUMBER));
                    jsonObject.put("wirelessDev", wirelessDev);
                }
                // 电报
                if (phoneType == Phone.TYPE_TELEX) {
                    String telegram = cursor.getString(cursor.getColumnIndex(Phone.NUMBER));
                    jsonObject.put("telegram", telegram);
                }
                // TTY_TDD
                if (phoneType == Phone.TYPE_TTY_TDD) {
                    String tty_tdd = cursor.getString(cursor.getColumnIndex(Phone.NUMBER));
                    jsonObject.put("tty_tdd", tty_tdd);
                }

                // 单位寻呼机
                if (phoneType == Phone.TYPE_WORK_PAGER) {
                    String jobPager = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("jobPager", jobPager);
                }
                // 助理
                if (phoneType == Phone.TYPE_ASSISTANT) {
                    String assistantNum = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("assistantNum", assistantNum);
                }
                // 彩信
                if (phoneType == Phone.TYPE_MMS) {
                    String mms = cursor.getString(cursor
                            .getColumnIndex(Phone.NUMBER));
                    jsonObject.put("mms", mms);
                }*/

               /* String mobileEmail = cursor.getString(cursor
                        .getColumnIndex(Email.DATA));
                jsonObject.put("Email", mobileEmail);*/
            }
        }
        // 查找event地址
        if (Event.CONTENT_ITEM_TYPE.equals(mimetype)) { // 取出时间类型
            int eventType = cursor.getInt(cursor.getColumnIndex(Event.TYPE)); // 生日
            if (eventType == Event.TYPE_BIRTHDAY) {
                String birthday = cursor.getString(cursor
                        .getColumnIndex(Event.START_DATE));
                jsonObject.put("birthday", birthday);
            }
            // 周年纪念日
            if (eventType == Event.TYPE_ANNIVERSARY) {
                String anniversary = cursor.getString(cursor
                        .getColumnIndex(Event.START_DATE));
                jsonObject.put("anniversary", anniversary);
            }
        }
        // 获取即时通讯消息
        if (Im.CONTENT_ITEM_TYPE.equals(mimetype)) { // 取出即时消息类型
            int protocal = cursor.getInt(cursor.getColumnIndex(Im.PROTOCOL));
            if (Im.TYPE_CUSTOM == protocal) {
                String workMsg = cursor.getString(cursor
                        .getColumnIndex(Im.DATA));
                jsonObject.put("workMsg", workMsg);
            } else if (Im.PROTOCOL_MSN == protocal) {
                String workMsg = cursor.getString(cursor
                        .getColumnIndex(Im.DATA));
                jsonObject.put("workMsg", workMsg);
            }
            if (Im.PROTOCOL_QQ == protocal) {
                String instantsMsg = cursor.getString(cursor
                        .getColumnIndex(Im.DATA));

                jsonObject.put("instantsMsg", instantsMsg);
            }
        }
// 获取备注信息
        if (Note.CONTENT_ITEM_TYPE.equals(mimetype)) {
            String remark = cursor.getString(cursor.getColumnIndex(Note.NOTE));
            jsonObject.put("remark", remark);
        }
// 获取昵称信息
        if (Nickname.CONTENT_ITEM_TYPE.equals(mimetype)) {
            String nickName = cursor.getString(cursor
                    .getColumnIndex(Nickname.NAME));
            jsonObject.put("nickName", nickName);
        }
        // 获取组织信息
        if (Organization.CONTENT_ITEM_TYPE.equals(mimetype)) { // 取出组织类型
            int orgType = cursor.getInt(cursor
                    .getColumnIndex(Organization.TYPE)); // 单位
            if (orgType == Organization.TYPE_CUSTOM) {
                String company = cursor.getString(cursor
                        .getColumnIndex(Organization.COMPANY));
                jsonObject.put("company", company);
                String jobTitle = cursor.getString(cursor
                        .getColumnIndex(Organization.TITLE));
                jsonObject.put("jobTitle", jobTitle);
                String department = cursor.getString(cursor
                        .getColumnIndex(Organization.DEPARTMENT));
                jsonObject.put("department", department);
            }
        }
        // 获取网站信息
        if (Website.CONTENT_ITEM_TYPE.equals(mimetype)) { // 取出组织类型
            int webType = cursor.getInt(cursor.getColumnIndex(Website.TYPE)); // 主页
            if (webType == Website.TYPE_CUSTOM) {

                String home = cursor.getString(cursor
                        .getColumnIndex(Website.URL));
                jsonObject.put("home", home);
            } // 主页
            else if (webType == Website.TYPE_HOME) {
                String home = cursor.getString(cursor
                        .getColumnIndex(Website.URL));
                jsonObject.put("home", home);
            }
            // 个人主页
            if (webType == Website.TYPE_HOMEPAGE) {
                String homePage = cursor.getString(cursor
                        .getColumnIndex(Website.URL));
                jsonObject.put("homePage", homePage);
            }
            // 工作主页
            if (webType == Website.TYPE_WORK) {
                String workPage = cursor.getString(cursor
                        .getColumnIndex(Website.URL));
                jsonObject.put("workPage", workPage);
            }
        }
        //Email
        if (TextUtils.equals(Email.CONTENT_ITEM_TYPE, mimetype)) {
            String email = cursor.getString(cursor.getColumnIndex(StructuredPostal.DATA));
            jsonObject.put("Email", email);
        }
        // 查找通讯地址
        if (StructuredPostal.CONTENT_ITEM_TYPE.equals(mimetype)) { // 取出邮件类型
            int postalType = -1;
            if (cursor != null && cursor.moveToFirst()) {
                postalType = cursor.getInt(cursor.getColumnIndex(StructuredPostal.TYPE));
            }
            // 单位通讯地址
            if (postalType == StructuredPostal.TYPE_WORK) {
                String street = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.STREET));
                jsonObject.put("street", street);
                String ciry = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.CITY));
                jsonObject.put("ciry", ciry);
                String box = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.POBOX));
                jsonObject.put("box", box);
                String area = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.NEIGHBORHOOD));
                jsonObject.put("area", area);

                String state = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.REGION));
                jsonObject.put("state", state);
                String zip = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.POSTCODE));
                jsonObject.put("zip", zip);
                String country = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.COUNTRY));
                jsonObject.put("country", country);
            }
            // 住宅通讯地址
            if (postalType == StructuredPostal.TYPE_HOME) {
                String homeStreet = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.STREET));
                jsonObject.put("homeStreet", homeStreet);
                String homeCity = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.CITY));
                jsonObject.put("homeCity", homeCity);
                String homeBox = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.POBOX));
                jsonObject.put("homeBox", homeBox);
                String homeArea = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.NEIGHBORHOOD));
                jsonObject.put("homeArea", homeArea);
                String homeState = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.REGION));
                jsonObject.put("homeState", homeState);
                String homeZip = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.POSTCODE));
                jsonObject.put("homeZip", homeZip);
                String homeCountry = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.COUNTRY));
                jsonObject.put("homeCountry", homeCountry);
            }
            // 其他通讯地址
            if (postalType == StructuredPostal.TYPE_OTHER) {
                String otherStreet = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.STREET));
                jsonObject.put("otherStreet", otherStreet);

                String otherCity = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.CITY));
                jsonObject.put("otherCity", otherCity);
                String otherBox = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.POBOX));
                jsonObject.put("otherBox", otherBox);
                String otherArea = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.NEIGHBORHOOD));
                jsonObject.put("otherArea", otherArea);
                String otherState = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.REGION));
                jsonObject.put("otherState", otherState);
                String otherZip = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.POSTCODE));
                jsonObject.put("otherZip", otherZip);
                String otherCountry = cursor.getString(cursor
                        .getColumnIndex(StructuredPostal.COUNTRY));
                jsonObject.put("otherCountry", otherCountry);
            }
        }
        cursor.close();
        String s = contactData.toString();
        Log.i("contactData", s);
        return s;
    }

    private String checkNull(String s) {
        if (s == null || s.isEmpty()) {
            s = "";
        }
        return s;
    }

    public String testGetAllContact() {

        JSONArray array = new JSONArray();
        try {
            //获取联系人信息的Uri
            ContentResolver contentResolver = context.getContentResolver();
            //查询数据，返回Cursor
            Cursor cursor = contentResolver.query(ContactsContract.Contacts.CONTENT_URI, null, null, null, null);
            while (cursor.moveToNext()) {
                JSONObject object = new JSONObject();
                //获取联系人的ID
                String contactId = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts._ID));
                //获取联系人的姓名
                String name = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME));
                //构造联系人信息
                object.put("Name", name);

                //查询电话类型的数据操作
                Cursor phones = contentResolver.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                        null,
                        ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = " + contactId,
                        null, null);
                List<String> listsMobile = new ArrayList<>();
                List<String> listsHome = new ArrayList<>();
                List<String> listsJob = new ArrayList<>();

                while (phones.moveToNext()) {
                    String phoneNumber = phones.getString(phones.getColumnIndex(
                            ContactsContract.CommonDataKinds.Phone.NUMBER));
                    int phoneType = phones.getInt(phones.getColumnIndex(Phone.TYPE));
                    //家庭
                    if (phoneType == Phone.TYPE_HOME) {
                        if (!TextUtils.isEmpty(phoneNumber) && listsJob.size() < 5) {
                            listsJob.add(phoneNumber);
                        }
                    }
                    //工作
                    else if (phoneType == Phone.TYPE_WORK) {
                        if (!TextUtils.isEmpty(phoneNumber) && listsMobile.size() < 5) {
                            listsMobile.add(phoneNumber);
                        }

                    }
                    //个人
                    else {
                        if (!TextUtils.isEmpty(phoneNumber) && listsMobile.size() < 5) {
                            listsMobile.add(phoneNumber);
                        }
                    }

                }
                object.put("homeNum", parsePhones(listsHome));
                object.put("jobNum", parsePhones(listsJob));
                object.put("mobile", parsePhones(listsMobile));
                phones.close();


                //查询==公司名字==类型的数据操作.Organization.COMPANY  ContactsContract.Data.CONTENT_URI
                String orgWhere = ContactsContract.Data.CONTACT_ID + " = ? AND " + ContactsContract.Data.MIMETYPE + " = ?";
                String[] orgWhereParams = new String[]{contactId,
                        ContactsContract.CommonDataKinds.Organization.CONTENT_ITEM_TYPE};
                Cursor orgCur = contentResolver.query(Data.CONTENT_URI,
                        null, orgWhere, orgWhereParams, null);
                String mCompany = "";
                boolean isCompany = true;
                while (orgCur.moveToNext()) {
                    //组织名 (公司名字)
                    String company = orgCur.getString(orgCur.getColumnIndex(Organization.COMPANY));
                    //只取第一个
                    if (isCompany && !TextUtils.isEmpty(company)) {
                        isCompany = false;
                        mCompany = company;
                    }
                }
                //添加company的信息
                object.put("company", mCompany);
                orgCur.close();


                //查询Email类型的数据操作
                Cursor emails = contentResolver.query(ContactsContract.CommonDataKinds.Email.CONTENT_URI,
                        null,
                        ContactsContract.CommonDataKinds.Email.CONTACT_ID + " = " + contactId,
                        null, null);
                String emailAddress = "";
                boolean isEmail = true;
                while (emails.moveToNext()) {
                    String email = emails.getString(emails.getColumnIndex(
                            ContactsContract.CommonDataKinds.Email.DATA));
                    //只取第一个
                    if (isEmail && !TextUtils.isEmpty(emailAddress)) {
                        isEmail = false;
                        emailAddress = email;
                    }
                }
                //添加Email的信息
                object.put("email", emailAddress);
                emails.close();

                //查询==地址==类型的数据操作.StructuredPostal.TYPE_WORK
                Cursor address = contentResolver.query(ContactsContract.CommonDataKinds.StructuredPostal.CONTENT_URI,
                        null,
                        ContactsContract.CommonDataKinds.StructuredPostal.CONTACT_ID + " = " + contactId,
                        null, null);
                String mAddress = "";
                boolean isAddress = true;
                while (address.moveToNext()) {
                    String workAddress = address.getString(address.getColumnIndex(
                            ContactsContract.CommonDataKinds.StructuredPostal.DATA));
                    //只取第一个
                    if (isAddress && !TextUtils.isEmpty(workAddress)) {
                        isAddress = false;
                        mAddress = workAddress;
                    }
                }
                //添加address的信息
                object.put("address", mAddress);
                address.close();

                //查询==昵称==类型的数据操作.Nickname.CONTENT_ITEM_TYPE
                String mNickName = "";
                Cursor nickName = contentResolver.query(ContactsContract.CommonDataKinds.StructuredPostal.CONTENT_URI,
                        null,
                        ContactsContract.CommonDataKinds.StructuredPostal.CONTACT_ID + " = " + contactId,
                        null, null);
                while (nickName.moveToFirst()) {
                    String nickname = nickName.getString(nickName.getColumnIndex(Nickname.NAME));
                    //只取第一个
                    if (!TextUtils.isEmpty(nickname)) {
                        mNickName = nickname;
                        break;
                    }
                }
                //添加nickname的信息
                object.put("nickname", mNickName);
                nickName.close();

                Cursor groupCursor = contentResolver.query(Data.CONTENT_URI,
                        new String[]{ContactsContract.CommonDataKinds.GroupMembership.GROUP_ROW_ID},
                        ContactsContract.CommonDataKinds.GroupMembership.MIMETYPE + "='" + ContactsContract.CommonDataKinds.GroupMembership.CONTENT_ITEM_TYPE + "' AND " + Data.RAW_CONTACT_ID + " = " + contactId,
                        null,
                        null);
                String mGroup = "";
                boolean isGroup = true;
                while (groupCursor.moveToNext()) {
                    Cursor groupNameCursor = contentResolver.query(ContactsContract.Groups.CONTENT_URI,
                            new String[]{ContactsContract.Groups.TITLE},
                            ContactsContract.Groups._ID + "=" + contactId,
                            null,
                            null);
                    String groupName = groupNameCursor.getString(0);
                    //只取第一个
                    if (isGroup && !TextUtils.isEmpty(groupName)) {
                        isGroup = false;
                        mGroup = groupName;
                    }
                    groupNameCursor.close();
                }
                //添加groupName的信息
                object.put("group", mGroup);
                groupCursor.close();

                //查询==关系==类型的数据操作.Organization.COMPANY  ContactsContract.Data.CONTENT_URI
                String orgfriends = ContactsContract.Data.CONTACT_ID + " = ? AND " + ContactsContract.Data.MIMETYPE + " = ?";
                String[] orgFriendsParams = new String[]{contactId,
                        ContactsContract.CommonDataKinds.Relation.CONTENT_ITEM_TYPE};
                Cursor orgfri = contentResolver.query(ContactsContract.Data.CONTENT_URI,
                        null, orgfriends, orgFriendsParams, null);
                String mOrgfri = "";
                if (orgfri.moveToFirst()) {
                    String friend = orgfri.getString(orgfri.getColumnIndex(ContactsContract.CommonDataKinds.Relation.NAME));
                    //只取第一个
                    if (!TextUtils.isEmpty(friend)) {
                        mOrgfri = friend;
                        break;
                    }
                }
                //添加company的信息
                object.put("RName", mOrgfri);
                orgCur.close();
                array.put(object);
            }
            cursor.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return array.toString();
    }

    private String parsePhones(List<String> lists) {
        if (lists.isEmpty()) {
            return "";
        }
        StringBuilder stringBuilder = new StringBuilder(5);
        for (int i = 0; i < lists.size(); i++) {
            stringBuilder.append(lists.get(i));
            if (i != lists.size() - 1) {
                stringBuilder.append(",");
            }
        }

        return stringBuilder.toString();
    }

}
