import React from 'react'
import countSize from '../common/lib/countSize'
import Type from './type'


var DetailBanner = React.createClass({
    mixins: [countSize],
    render() {
        var itemStyle = this.count(4),
            bannerImgUrl = {'backgroundImage':'url(http://120.76.204.135/mall.php?r=media/img-art&mediakey=' + this.props.data.ratingKey+')'}
        return (
            <div className="mv-detail-content">

                <div className="mv-detail-banner" style={bannerImgUrl}>
                    <div className="mv-background"></div>
                    <div className="content">
                        <div className="mv-pic">
                            <img src={'http://120.76.204.135/mall.php?r=media/img-thumb&mediakey=' + this.props.data.ratingKey}/>
                        </div>
                        <div className="mv-title">
                            <a href="">{this.props.data.title}</a>
                            <p>{this.props.data.year}</p>
                        </div>
                    </div>
                </div>

                <div className="mv-detail-txt">

                    <ul className="detail-album clearfix">
                        <li>
                            <a href="">
                                <img src="1.jpg" style={itemStyle}/>
                                <p className="title">Season 1</p>
                                <p className="count">10 集</p>
                                <span>10</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="1.jpg" style={itemStyle}/>
                                <p className="title">Season 1</p>
                                <p className="count">10 集</p>
                                <span>10</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="1.jpg" style={itemStyle}/>
                                <p className="title">Season 1</p>
                                <p className="count">10 集</p>
                                <span>10</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="1.jpg" style={itemStyle}/>
                                <p className="title">Season 1</p>
                                <p className="count">10 集</p>
                                <span>10</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="1.jpg" style={itemStyle}/>
                                <p className="title">Season 1</p>
                                <p className="count">10 集</p>
                                <span>10</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="1.jpg" style={itemStyle}/>
                                <p className="title">Season 1</p>
                                <p className="count">10 集</p>
                                <span>10</span>
                            </a>
                        </li>
                    </ul>

                    <div className="time-bar clearfix">
                        <div className="time">
                            <i className="fa fa-clock-o"></i>
                            3hr16min
                        </div>
                        <a className="comment">
                            <i className="fa fa-star"></i>  
                            68%
                            <i className="fa fa-chevron-circle-right"></i>
                        </a>
                    </div>

                    <div className="detail-brief">
                        <p>{this.props.data.summary}</p>
                    </div>
                </div>

                <div className="mv-detail-type">
                    <Type data={this.props.Genre} title="电影类型" />
                    <Type data={this.props.Director} title="导演"/> 
                    <Type data={this.props.Role} title="队列"/>
                </div>

                <div className="mv-detail-relation"> 
                    <a href="">相关的</a>
                </div>

            </div>
        )
    }
});


export default DetailBanner;