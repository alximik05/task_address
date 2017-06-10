/**
 * Created by stas on 09/06/17.
 */

var MapGoogle = React.createClass({
    componentDidMount() {
        const moscow = {lat: 55.75222, lng: 37.61556};
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: moscow
        });
        fetch('http://localhost:8181/loadAllAddresses')
            .then(response => {
                return response.json();
            })
            .then(arr => {
                arr.map(coordinate => {
                    let latlng = new google.maps.LatLng(coordinate.latitude, coordinate.longitude);
                    new google.maps.Marker({
                        position: latlng,
                        map: map
                    });
                })
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
                <form action="saveAddress" method="post">
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

