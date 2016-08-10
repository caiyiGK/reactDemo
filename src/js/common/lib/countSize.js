var countSize = {
    getInitialState() {
        return({
            width : 0
        })
    },
    componentDidMount() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.setState({'width': width > 640 ? 640 : width});
    },
    count(type) {
        var width = this.state.width,
            w     = 0,
            h     = 0;
        switch(type) {
            case 2:
                w = (width-30)/2;
                break;
            case 3: 
                w = (width-40)/3;
                break;
            case 4: 
                w = (width-50)/4;
        }
        h = 3/2*w;
        return {'width': w, 'height': h}
    }
}

export default countSize;