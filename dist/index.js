import { format } from 'date-fns';
// HTMLの要素に現在時刻を表示
var displayTime = function () {
    var now = new Date();
    var formattedTime = format(now, 'yyyy-MM-dd HH:mm:ss');
    var timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = formattedTime;
    }
};
// 1秒ごとに更新
setInterval(displayTime, 1000);
