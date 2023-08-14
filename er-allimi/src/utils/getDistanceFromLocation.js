const getRadian = (degrees) => {
  return (degrees * Math.PI) / 180;
};

const getDistanceFromLocation = (myLon, myLat, erLon, erLat) => {
  const myLonRadian = getRadian(myLon);
  const myLatRadian = getRadian(myLat);
  const erLonRadian = getRadian(erLon);
  const erLatRadian = getRadian(erLat);
  return (
    6371 *
    Math.acos(
      Math.cos(myLatRadian) *
        Math.cos(erLatRadian) *
        Math.cos(erLonRadian - myLonRadian) +
        Math.sin(myLatRadian) * Math.sin(erLatRadian)
    )
  );
};

export { getDistanceFromLocation };
