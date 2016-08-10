var scrollTop = 0,      // 滚动高度
    clientHeight = 0,   // 屏幕高度
    scrollHeight = 0;   // 页面高度

var onScrollAjax = {
    getInitialState() {
        return ({
        })
    },
    // 初始化各种变量
    init(){
        // 获取滚动高度
        if ( document.documentElement && document.documentElement.scrollTop ) {
            scrollTop = document.documentElement.scrollTop;
        } else if ( document.body ) {
            scrollTop = document.body.scrollTop;
        }
        // 窗口高度
        if ( document.body.clientHeight && document.documentElement.clientHeight ) {
            clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight; 
        } else {
            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight; 
        }
        // 页面高度
        scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
    },
    //判断是页面底部返回true
    isPageBottom() {
        onScrollAjax.init();
        if ( scrollHeight == scrollTop + clientHeight) {  
            return true;  
        } else {  
            return false;
        } 
    },
    //判断距离页面底部 n 时返回true
    isPageScroll(n) {
        onScrollAjax.init();
        if ( (scrollHeight - scrollTop - clientHeight) <= n) {  
            return true;  
        } else {  
            return false;
        } 
    }
    
};

export default onScrollAjax