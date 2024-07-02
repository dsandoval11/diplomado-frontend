import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = ({ latLong }) => {
  return (
    <MapContainer center={latLong} zoom={13} style={{ height: '400px', width: '700px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLong}>
        <Popup>
          Marker
        </Popup>
      </Marker>
    </MapContainer>
  )
}
