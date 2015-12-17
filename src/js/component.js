
var liDatas = [
    {imgSrc:"src/img/travel-1.jpg"},
    {imgSrc:"src/img/travel-2.jpg"}
];

var Header = React.createClass({
    render: function(){
        return (
            <div className="header">
                <div className="header_wrap">
                    <a className="logo"></a>
                    <ul className="menu">
                        <li><a>Java</a></li>
                        <li><a>C++</a></li>
                        <li><a>basic</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

var Banner = React.createClass({
    render:function(){
        return (
            <div className="banner">
                <img src="src/img/banner-1.png"></img>
            </div>
        );
    }
});

var TravelList = React.createClass({
    render:function(){
        var _liNode = this.props.data.map(function(liData) {
            return (
                <li>
                    <div>
                        <a>
                            <img src={liData.imgSrc}></img>
                        </a>
                    </div>
                </li>
            );
        });

        return (
            <div className="travelList">
            {_liNode}
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render:function(){
        return (
            <div>
                <Header />
                <Banner />
                <TravelList data={liDatas}/>
            </div>
        );
    }
});



ReactDOM.render(
    <CommentBox/>,
    document.getElementById('wrap')
);
