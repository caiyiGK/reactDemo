import React from 'react';
var Header = React.createClass({
    go() {
        window.history.go(-1)
    },
    render: function() {
        return (
            <div className="mv-header">
                <div className="content">
                    
                    <div className="mv-hd-left">
                        <a onClick={this.go}>
                            <i className="fa fa-angle-left"></i>
                            返回
                        </a>
                    </div>

                    <div className="mv-hd-title">
                        <span>电影</span>
                    </div>

                    <div className="mv-hd-right">
                        <a href="">
                            <i className="fa fa-search"></i> 
                        </a>
                        <a href="javascript:;" onClick={this.props.handleSubmit}>
                            <i className="fa fa-bars"></i> 
                        </a>
                    </div>

                </div>
            </div>
        );
    }
});


export default Header;
