var LoadMore = React.createClass({ 
    render() {
        return (
            <div className={this.props.data ? "loadMore db" : 'loadMore hide' }>
                <i className="fa fa-circle-o-notch fa-spin"></i>
                <span>加载更多</span>
            </div>
        );
    }
});




export default LoadMore;