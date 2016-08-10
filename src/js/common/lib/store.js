var store = {};
export default store

var serverDomain = window.serverDoamin;

store.getCategoryList = (id, pageSize, callback) => {
    var apiUrl = serverDoamin  + '/mall.php?r=media/media-with-cate-key&key='+ id +'&offset='+ pageSize +'&limit=20';
    $.ajax({
        url: apiUrl,
        type: 'GET'
    })
    .done(function(result) {
        callback && callback(null,result)
    })
    .fail(function(e) {
        console.log('store.getCategoryList ', e);
        callback && callback(e || 'error');
    });
}


store.getDetail = (id, callback) => {
    var apiUrl = serverDoamin  + '/mall.php?r=media/media-detail-with-rating-key&rkey='+ id;
    $.ajax({
        url: apiUrl,
        type: 'GET'
    })
    .done(function(result) {
        callback && callback(null,result)
    })
    .fail(function(e) {
        console.log('store.getCategoryList ', e);
        callback && callback(e || 'error');
    });
}


