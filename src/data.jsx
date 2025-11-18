const apiKey = "Tirumala08";

const fetchData = async () => {
  try {
    const response = await fetch(`http://api.geonames.org/searchJSON?formatted=true&country=IN&username=${apiKey}&style=full`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.geonames;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Rethrow the error for handling
  }
};

// Exporting the function to fetch cities
export const getCities = async () => {
  try {
    const citiesData = await fetchData();
    const cities=[]
    for(var obj of citiesData){
        if(obj['name']=='India')continue
        if(obj['name']=='Delhi'){
            cities.push('Delhi')
            continue
        }
        cities.push(obj['name']+","+obj["adminName1"])
    }

    return cities;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};
