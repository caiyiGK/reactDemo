import React from 'react';
import $ from '../../../node_modules/jquery/dist/jquery.min.js'

// var ListItemLi = React.createClass({
//   render: function() {
//     return <li>{this.props.data.text}</li>;
//   }
// });

var Comment = React.createClass({
  render: function() {
      return (
        <ul>
          {this.props.results.map((comment) => {
            var item = comment['@attributes'] 
            return <li key={item.key}><a href={'#/category/' + item.key}>{item.title}</a></li>;
          })}
        </ul>
      )
  }
});


var Mneu = React.createClass({
    getInitialState() {
        return {
          data: []
        };
    },
    componentDidMount() {

        $.get('http://localhost:8080/src/data/cat.json', (result) => {
            if (result && this.isMounted()) {
                console.log(result.Directory);
                this.setState({data: result.Directory})
            }
        }.bind(this));

    },
    render() {
        return (
            <div className="mv-menu">
                <div className="mv-menu-content">
                    <div className="menu-list">
                      <Comment results={this.state.data}/>
                    </div>
                </div>
            </div>
        );
    }
});


export default Mneu;
