package com.example.zheng.Utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentTime {

    public static String getCurrentTime(){
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        String time = df.format(new Date());
        return time;
    }
}
