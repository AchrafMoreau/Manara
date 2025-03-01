'use client'

import { GoogleMap } from "@react-google-maps/api";

const defaultMapContainerStyle = {
    width: '100%',
    height: '50vh',
    borderRadius: '15px 15px 15px 15px',
};

const defaultMapCenter = {
    lat: 35.8799866,
    lng: 76.5048004
}

const defaultMapZoom = 18

//Map options
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
};

const MapComponent = () => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
            </GoogleMap>
        </div>
    )
};

export { MapComponent };
