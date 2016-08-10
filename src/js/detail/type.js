/*  
 * 电影详情页面 底部类型组件
 */
import React from 'react'

var Type = React.createClass({
    render() { 
        var result = [];
        // 判断 this.props.data 数据类型是否为单条数据
        this.props.data['@attributes']  != undefined ? result = [this.props.data] : result = this.props.data;
        return (
            <div className="clearfix Genre">
                <label>{this.props.title}</label>
                {result.map(function(results,key) {
                    var result = results['@attributes']; 
                    return (
                        <a  href=""
                            id={result.id} 
                            count={result.count} 
                            key={result.id}>
                            {key == 0 ? '' : ', ' }
                            {result.tag}</a>
                    )
                })}
            </div>
        )
    }
})


export default Type
