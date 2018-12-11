import React, { Component } from 'react';
import {
  Map, TileLayer, Popup,
  CircleMarker, GeoJSON
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

//const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

//const points = {[60.21916,	20.72675],
//60.11003	20.68214
//60.11145	20.51089
//60.11763	20.29668
//60.1626921	20.3927480
//60.1854808	21.5858297
//59.9455971	20.8917824
//60.0313030	20.8251714
//60.0647341	20.8073747
//60.0317802	20.3858259
//60.0665811	20.2675505
//60.2242177	20.4136621
//60.3183138	20.7513513
//60.2904026	20.7901287
//60.3174626	20.9959478
//60.3568842	21.0388434}



const points_json = {
  "type": "FeatureCollection",
  "features": [



    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [60.11763, 20.29668]
      },
      "properties": {
        "id": 4,
        "name": "Långnäs"
      }
    }

  ]
}

class MapTest extends Component {
  state = {
    lat: 60.10,
    lng: 21.00,
    zoom: 8,
    sodrajson: {"type":"GeometryCollection","geometries":[{"type":"MultiLineString","coordinates":[[[20.8073747,60.0647341,0],[20.8078372,60.0634645,0],[20.8071828,60.0625543,0],[20.8017325,60.0611621,0],[20.7828927,60.0585919,0],[20.7815196,60.0542655,0],[20.7885268,60.0486064,0],[20.7910243,60.0369224,0],[20.8011559,60.0251313,0],[20.8041143,60.0253854,0],[20.8098636,60.0262196,0],[20.8235536,60.0255121,0],[20.823618,60.0306361,0],[20.8250786,60.0312659,0]]]},{"type":"MultiLineString","coordinates":[[[20.8917824,59.9455971,0],[20.890304,59.9458556,0],[20.8904756,59.946221,0],[20.8924225,59.9465493,0],[20.8940318,59.9471027,0],[20.8953407,59.9476287,0],[20.8956583,59.9484142,0],[20.8948687,59.9493722,0],[20.8921864,59.9520702,0],[20.889942,59.9544151,0],[20.8889893,59.9558783,0],[20.8884099,59.9580634,0],[20.8881814,59.9612704,0],[20.8884528,59.9628746,0],[20.889633,59.9636839,0],[20.8915331,59.9641436,0],[20.901748,59.9645738,0],[20.9151901,59.9650936,0],[20.9269211,59.9653546,0],[20.9399633,59.9655577,0],[20.9485504,59.965891,0],[20.9570476,59.9664576,0],[20.9621996,59.966747,0],[20.9646136,59.9670654,0],[20.9678408,59.9676819,0],[20.9744198,59.9687579,0],[20.9769003,59.9690774,0],[20.9798596,59.9691349,0],[20.9916631,59.9687654,0],[20.9975704,59.9687198,0],[21.001377,59.9689652,0],[21.0167772,59.9704724,0],[21.0300305,59.9716766,0],[21.037883,59.9723499,0],[21.0443525,59.9724729,0],[21.0515333,59.9724299,0],[21.053516,59.9727826,0],[21.0546149,59.9733263,0],[21.0638607,59.9806079,0],[21.0683464,59.983613,0],[21.0712895,59.9852532,0],[21.0771815,59.9880561,0],[21.1244003,60.0290056,0],[21.1278614,60.0311162,0],[21.206846,60.0715985,0],[21.2203558,60.0781262,0],[21.2325513,60.0840671,0],[21.248917,60.0920378,0],[21.2640779,60.0992513,0],[21.2721632,60.1032297,0],[21.2826753,60.1083063,0],[21.2904913,60.1121275,0],[21.2993522,60.1161867,0],[21.3081992,60.1202512,0],[21.3181019,60.1246011,0],[21.3270884,60.1284578,0],[21.3397699,60.1339505,0],[21.3541691,60.1400914,0],[21.3708417,60.147187,0],[21.3813194,60.1516114,0],[21.3886708,60.1548936,0],[21.3979202,60.1586559,0],[21.4116445,60.1643305,0],[21.4210161,60.1683479,0],[21.4354357,60.1742678,0],[21.4408248,60.1763707,0],[21.4453277,60.1775739,0],[21.4580918,60.1796713,0],[21.4660118,60.1810019,0],[21.4702561,60.1817573,0],[21.4746271,60.1827699,0],[21.4810064,60.1851555,0],[21.4892397,60.1882589,0],[21.4937673,60.1898195,0],[21.4979043,60.1906302,0],[21.5104163,60.191347,0],[21.5184844,60.1916745,0],[21.527443,60.1930142,0],[21.5420342,60.1956049,0],[21.5460189,60.196088,0],[21.5485938,60.1956486,0],[21.5540441,60.193779,0],[21.5617602,60.19101,0],[21.5655168,60.1900032,0],[21.5711523,60.189235,0],[21.5789049,60.1883047,0],[21.581512,60.1876711,0],[21.5834108,60.1864102,0],[21.5841271,60.1858236,0],[21.584739,60.1853635,0],[21.5854149,60.1850835,0],[21.5865524,60.1846737,0]]]},{"type":"MultiLineString","coordinates":[[[20.2965061,60.1176075,0],[20.296268,60.1185314,0],[20.2967012,60.1191926,0],[20.2975448,60.1193522,0],[20.2984569,60.1191242,0],[20.3027264,60.1178248,0],[20.3089491,60.1160672,0],[20.3140647,60.1146602,0],[20.3195578,60.1138904,0],[20.3231026,60.1136252,0],[20.3334624,60.1134627,0],[20.3437621,60.1136338,0],[20.3537184,60.1144036,0],[20.3634431,60.1153359,0],[20.3692795,60.1152504,0],[20.3779227,60.1143181,0],[20.3859307,60.1127699,0],[20.3947455,60.1109821,0],[20.4105383,60.1069613,0],[20.4224946,60.1039583,0],[20.4310776,60.1026748,0],[20.4372574,60.1021614,0],[20.4502996,60.1015393,0],[20.4552212,60.1019623,0],[20.4583371,60.1026344,0],[20.4614237,60.103714,0],[20.4815414,60.1139846,0],[20.501759,60.1157535,0],[20.5047204,60.1151862,0],[20.5060937,60.1144806,0],[20.5092073,60.1118327,0],[20.5096666,60.1114869,0],[20.5106347,60.1115177,0]]]},{"type":"MultiLineString","coordinates":[[[20.5106347,60.1115177,0],[20.5102712,60.1118169,0],[20.5101691,60.1120733,0],[20.5100763,60.1123846,0],[20.5100538,60.1128522,0],[20.5104556,60.1135236,0],[20.5113722,60.1140957,0],[20.5218415,60.1157247,0],[20.535048,60.116259,0],[20.58542,60.1260053,0],[20.6717787,60.0967685,0],[20.6902252,60.0965176,0],[20.699041,60.0995944,0],[20.7008435,60.1005784,0],[20.7029034,60.1031026,0],[20.7031609,60.1047283,0],[20.7021309,60.1061828,0],[20.6976678,60.1072522,0],[20.6907771,60.1085079,0],[20.6827497,60.1088443,0],[20.6823206,60.1100751,0]]]},{"type":"MultiLineString","coordinates":[[[20.6823206,60.1100751,0],[20.6830227,60.1091831,0],[20.6909445,60.1090148,0],[20.7193995,60.1056333,0],[20.7488286,60.0950868,0],[20.7714318,60.069322,0],[20.778635,60.0671655,0],[20.783053,60.0658955,0],[20.7908806,60.0635231,0],[20.796163,60.0619653,0],[20.8001696,60.0618319,0],[20.8036457,60.062453,0],[20.8052336,60.0629242,0],[20.8064352,60.063738,0],[20.8073747,60.0647341,0]]]},{"type":"MultiLineString","coordinates":[[[20.8250786,60.0312659,0],[20.824599,60.0305605,0],[20.8246414,60.0250325,0],[20.8138402,60.0254631,0],[20.8101373,60.0255895,0],[20.8047645,60.0243457,0],[20.7985139,60.0195368,0],[20.7982403,60.0105233,0],[20.8286244,59.9818526,0],[20.8893901,59.9633281,0],[20.8925478,59.9524114,0],[20.8971004,59.9487205,0],[20.8959632,59.947277,0],[20.8901231,59.9463403,0],[20.8899228,59.9457099,0],[20.8917824,59.9455971,0]]]}]} ,
    points: points_json,
    style: {
      color: "red",
      linejoin: "round",
      weight: 7,
      opacity: 0.9
    }
  }

  //const t = [1, 2, 3, 4]
  //const m1 = t.map((luku) => luku * 2)


  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div className="map-container">
        <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />


          <CircleMarker center={[60.21916, 20.72675]} color="black" radius={5}>
            <Popup>Snäckö</Popup>
          </CircleMarker>

          <CircleMarker center={[60.11003, 20.68214]} color="black" radius={5}>
            <Popup>Sottunga</Popup>
          </CircleMarker>

          <CircleMarker center={[60.11145, 20.51089]} color="black" radius={5}>
            <Popup>Överö</Popup>
          </CircleMarker>

          <CircleMarker center={[60.11763, 20.29668]} color="black" radius={5}>
            <Popup>Långnäs</Popup>
          </CircleMarker>

          <CircleMarker center={[60.1626921, 20.3927480]} color="black" radius={5}>
            <Popup>Bergö</Popup>
          </CircleMarker>

          <CircleMarker center={[60.1854808, 21.5858297]} color="black" radius={5}>
            <Popup>Galtby</Popup>
          </CircleMarker>

          <CircleMarker center={[59.9455971, 20.8917824]} color="black" radius={5}>
            <Popup>Kökar</Popup>
          </CircleMarker>

          <CircleMarker center={[60.0313030, 20.8251714]} color="black" radius={5}>
            <Popup>Kyrkogårdsö</Popup>
          </CircleMarker>

          <CircleMarker center={[60.0647341, 20.8073747]} color="black" radius={5}>
            <Popup>Husö</Popup>
          </CircleMarker>

          <CircleMarker center={[60.0317802, 20.3858259]} color="black" radius={5}>
            <Popup>Degerby</Popup>
          </CircleMarker>

          <CircleMarker center={[60.0665811, 20.2675505]} color="black" radius={5}>
            <Popup>Svinö</Popup>
          </CircleMarker>

          <CircleMarker center={[60.2242177, 20.4136621]} color="black" radius={5}>
            <Popup>Hummelvik</Popup>
          </CircleMarker>

          <CircleMarker center={[60.3183138, 20.7513513]} color="black" radius={5}>
            <Popup>Enklinge</Popup>
          </CircleMarker>

          <CircleMarker center={[60.2904026, 20.7901287]} color="black" radius={5}>
            <Popup>Kumlinge</Popup>
          </CircleMarker>

          <CircleMarker center={[60.3174626, 20.9959478]} color="black" radius={5}>
            <Popup>Lappo</Popup>
          </CircleMarker>

          <CircleMarker center={[60.3568842, 21.0388434]} color="black" radius={5}>
            <Popup>Torsholma</Popup>
          </CircleMarker>

          <GeoJSON data={this.state.sodrajson} style={this.state.style}></GeoJSON>

        </Map>
      </div>
    )
  }
}

export default MapTest
