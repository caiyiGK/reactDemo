import React from 'react'
import $ from '../../../node_modules/jquery/dist/jquery.min.js'
import store from '../common/lib/store'
import onScrollAjax from '../common/lib/onScrollAjax' 
import Header from '../common/header'
import LoadMore from '../common/loadMore'
import Menu from '../menu'
import ListItem from './listItem'

 

 
var Index = React.createClass({ 
    mixins: [onScrollAjax,store], 
    getInitialState() {
        return {
          data      : [],       // 数据
          pageSize  : 0,        // 每页第几条
          isGetDate : true,     // 加载数据
          isLoad    : false
        };
    },
    componentDidMount() {
        var self = this,
            id   = this.props.params.id,
            pageSize = this.state.pageSize;
        store.getCategoryList(id, pageSize, (code, result) => {
            if (code == null && result && self.isMounted()) {
                var data = result.Directory || result.Video;
                self.setState({
                    data : data,
                    pageSize : self.state.pageSize + 20
                });
            } else {
                console.log(code)
            }
        })

        window.addEventListener('scroll',this._onscroll);
    },
    componentWillUnmount(){
        window.removeEventListener('scroll',this._onscroll);
    },
    _onscroll() {
        if ( onScrollAjax.isPageScroll(300) && this.state.isGetDate ) {
            var id       = this.props.params.id,
                pageSize = this.state.pageSize;
            this.setState({isGetDate : false,isLoad : true});
            store.getCategoryList(id, pageSize, (code, result) => {
                if (code == null && result && this.isMounted()) {
                    var data = result.Directory || result.Video;
                    this.setState({
                        data      : this.state.data.concat(data),
                        pageSize  : this.state.pageSize + 20,
                        isGetDate : true,
                        isLoad    : false
                    });
                } else {
                    console.log(code)
                }
            })
        }
    },
    render() {
        return (
            <div className="mv-container">
                <Header/>
                <div className="mv-content">
                    <ListItem   
                        data={this.state.data}
                        key={this.state.data.id}/>
                    <LoadMore data={this.state.isLoad}/>
                </div>
            </div>
        );
    }
});


export default Index;
