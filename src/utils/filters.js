import { Component } from 'react';
import dayjs from 'dayjs';
Component.prototype.$formatDate = function formatDate(val){
    return dayjs(val).format("YYYY.MM.DD")
}
Component.prototype.$formatMonthDay = function formatDate(val){
    return dayjs(val).format("MM.DD")
}
Component.prototype.$formatHourMinute = function formatDate(val){
    return dayjs(val).format("HH:mm")
}