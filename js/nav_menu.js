window.onscroll = percent; // 监听滚动事件

function percent() {
  let scrollTop = document.documentElement.scrollTop; // 获取滚动距离
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
  let clientHeight = document.documentElement.clientHeight;
  let scrollableHeight = scrollHeight - clientHeight; // 可滚动的总高度
  let result = Math.round((scrollTop / scrollableHeight) * 100);

  result = Math.min(result, 100); // 最高到 100%
  
  let btn = document.querySelector("#percent"); // 获取显示进度的元素
  if (btn) btn.innerHTML = result; // 更新进度
}

document.getElementById("page-name").innerText = document.title.split(" | 无言的奇妙小窝-[object Object]")[0];