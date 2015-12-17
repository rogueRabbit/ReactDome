
var Header = React.createClass({
    displayName:'Header',
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


ReactDOM.render(
    <Header/>,
    document.getElementById('wrap')
);
