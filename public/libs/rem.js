var oHtml = document.documentElement;

//一开始调用一次
getSize();
//当缩放的时候调用方法,实时计算
window.addEventListener('resize', function() {
    console.log(oHtml.style.fontsize);
    getSize();
});

//获取屏幕的大小
function getSize() {
    var screenWidth = oHtml.offsetWidth;
    if (screenWidth >= 640) {
        oHtml.style.fontSize = '80px';
    } else if (screenWidth <= 320) {
        oHtml.style.fontSize = '40px';
    } else {

        oHtml.style.fontSize = (screenWidth / 8) + 'px';
    }

}