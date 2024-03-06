
export const redirectToGoogleMap = (latitude, longitude) => {
    let googleMapUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;
    
    // Open the Google Maps URL in a new tab
    window.open(googleMapUrl, '_blank');
}