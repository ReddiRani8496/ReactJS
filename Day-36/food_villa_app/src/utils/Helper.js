export function filterData(searchInput, restaurants) {
  console.log("called");
  return restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
}
