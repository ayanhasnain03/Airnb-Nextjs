import countries from "world-countries";

//Convert the countries array to our required format
const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

//Hook to use in other components
//Basically a function that exports two utility functins :)

const useCountries = () => {
  //Returns all the countries
  const getAll = () => formattedCountries;

  //Returns specific country based on the input
  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return { getAll, getByValue };
};

export default useCountries;
