/**
 * Created by stas on 09/06/17.
 */

var MapGoogle = React.createClass({
    componentDidMount() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        fetch('http://localhost:8181/loadAllAddresses')
            .then(response => {
                console.log(response);
                let a = response.json();
                console.log(a);
                return a;
            })
            .then(arr => {
                console.log(arr);
            });

        var uluru = {lat: -25.363, lng: 131.044};
        new google.maps.Marker({
            position: uluru,
            map: map
        });
    },
    render(){
        return (
            <div id="map">
            </div>
        )
    }

});


var Application = React.createClass({
    render() {
        return (
            <div>
                <h3>My Google Maps Demo</h3>
                <form className="login" action="#" method="post">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" autoFocus="true"/>
                    <input type="submit" value="Add"/>
                </form>
                <MapGoogle/>
            </div>
        )


    }
});

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);

