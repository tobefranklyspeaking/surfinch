exports.compileCoordinates = (data) => {
  //this function is to extract & compile the list of lat/long
  //for heat map purposes.
  var coordinates = [];

  data.forEach((bird) => {
    var loc = [];
    loc.push(bird.lat);
    loc.push(bird.lng);
    coordinates.push(loc);
  })
  return coordinates;
};
