import React from 'react';
import $ from '../../../node_modules/jquery/dist/jquery.min.js'
import store from '../common/lib/store'
import Header from '../common/header'
import DetailBanner from './banner'


var arr = [],
    obj = {};
var Detail = React.createClass({
    getInitialState() {
        return {
          data: [],
          Genre : [],
          Director : [],
          Role : []
        };
    },
    componentDidMount() {
        var self = this,
            id   = this.props.params.id;

        store.getDetail(id, (code, result) => {
            if (code == null && result && self.isMounted()) {
                var data = result.Directory || result.Video;
                this.setState({ 
                    data : data['@attributes'], 
                    Genre : data['Genre'],
                    Director : data['Director'] || [{'@attributes':{'tag':'暂无'}}], 
                    Role : data['Role']
                });
            } else {
                console.log(code)
            }
        })
    },
    render() {
        return (
            <div className="mv-container">
                <Header />

                <div className="mv-content">
                    <DetailBanner 
                        data={this.state.data} 
                        Genre={this.state.Genre}  
                        Director={this.state.Director}
                        Role={this.state.Role}/> 
                </div>
            </div>
        );
    }
});


export default Detail;
