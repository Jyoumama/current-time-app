import { format } from 'date-fns';

// HTMLの要素に現在時刻を表示
const displayTime = () => {
  const now = new Date();
  const formattedTime = format(now, 'yyyy-MM-dd HH:mm:ss');
  const timeElement = document.getElementById('time');
  if (timeElement) {
    timeElement.textContent = formattedTime;
  }
};

// 1秒ごとに更新
setInterval(displayTime, 1000);
