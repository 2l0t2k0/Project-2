const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;



export async function getOneItem(x) {
    const url = 'http://prices.runescape.wiki/api/v1/osrs/latest?id=561';
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
    
}