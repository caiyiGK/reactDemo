import React from 'react'
import countSize from '../common/lib/countSize'

var ListItem = React.createClass({
    mixins: [countSize], 
    render() {
        var itemStyle = this.count(3);     // 计算图片item 高宽
        return (
            <ul className="mv-list clearfix">
 
               {this.props.data.map(function(results) {  
                    var result = results['@attributes'];
                    return (
                        <li className="mv-list-item" key={result.id}>
                            <a href={"#/detail/" + result.ratingKey}>
                                <div className="pic">
                                    <img src={"http://120.76.204.135/mall.php?r=media/img-thumb&mediakey=" + result.ratingKey} style={itemStyle}/>
                                </div> 
                                <p className="title">{result.title}</p>
                                <p className="date">{result.year}</p>
                            </a>
                        </li>
                    ) 
                })}

            </ul>
        )
    }
})

export default ListItem;