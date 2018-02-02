new Maplace({
    map_div: '#gmap-styled',
    locations: [
    	{
    	    lat: 36.7854513,
    	    lon: -119.9346453,
    	    zoom: 6,
    	    title: 'California',
    	    html: "<a href=\"https://www.facebook.com/groups/726774217377766/\">Socialist Rifle Association of California</a>"
    	},
    	{
    	    lat: 41.5173992,
    	    lon: -73.3179298,
    	    zoom: 6,
    	    title: "Connecticut",
    	    html: "<a href=\"https://www.facebook.com/groups/886013348077782/\">Socialist Rifle Association of Connecticut</a>"
    	},
    	{
    	    lat: 38.9269959,
    	    lon: -77.3122119,
    	    zoom: 6,
    	    title: 'Greater Washington',
    	    html: "<a href=\"https://www.facebook.com/Socialist-Rifle-Association-Greater-Washington-319672751546278/\">Socialist Rifle Association of Greater Washington</a>"
    	},
    	{
    	    lat: 47.7481925,
    	    lon: -122.5424672,
    	    zoom: 6,
    	    title: 'Greater Seattle',
    	    html: "<a href=\"https://www.facebook.com/groups/1503313489907581/\">Socialist Rifle Association of Greater Seattle</a>"
    	},
        {
            lat: 29.8168824,
            lon: -95.6814787,
            zoom: 6,
            title: 'Houston',
            html: "<a href=\"https://www.facebook.com/groups/381339518683960/\">Socialist Rifle Association of Houston</a>"
        },
        {
            lat: 38.1887218,
            lon: -85.8168542,
            zoom: 6,
            title: 'Louisville',
            html: "<a href=\"https://www.facebook.com/groups/1506289306280023/\">Socialist Rifle Association of Louisville</a>"
        },
    	{
    	    lat: 40.705311,
    	    lon: -74.2581857,
    	    zoom: 6,
    	    title: 'New York',
    	    html: "<a href=\"https://www.facebook.com/groups/1382459212049950/\">Socialist Rifle Association of New York</a>"
    	},
        {
            lat: 36.1524972,
            lon: -96.0180949,
            zoom: 6,
            title: 'Tulsa',
            html: "<a href=\"https://www.facebook.com/SocialistRATulsa/\">Socialist Rifle Association of Oklahoma</a>"
        },
    	{
    	    lat: 44.9867938,
    	    lon: -91.3625065,
    	    zoom: 6,
    	    title: 'Northwoods',
    	    html: "<a href=\"https://www.facebook.com/groups/NorthwoodsWISRA/\">Socialist Rifle Association of Wisconsin</a>"
    	},
        {
            lat: 40.431478,
            lon: -80.0505404,
            zoom: 6,
            title: 'Pittsburgh',
            html: "<a href=\"https://www.reddit.com/r/PittsburghSRA/\">Socialist Rifle Association of Pennsylvania</a>"
        },
        {
            lat: 45.5433229,
            lon: -122.7945048,
            zoom: 6,
            title: 'Portland',
            html: "<a href=\"https://www.reddit.com/r/PortlandSRA/\">Socialist Rifle Association of Portland</a>"
        }
    ],
    start: 0,
    map_options: {
        zoom: 4,
        disableDefaultUI: true,
        mapTypeId: 'terrain',
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e10011"},{"visibility":"on"}]}]
    }
}).Load();