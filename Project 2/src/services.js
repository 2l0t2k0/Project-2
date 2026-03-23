const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;


export async function getIDlist() {  //Get's ID list + basic item data
  const url = 'https://prices.runescape.wiki/api/v1/osrs/mapping';
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
} catch (error) {
  console.error(error);
}
  
}


export async function getOneItem(id) { //return 1 item by ID
    const url = `http://prices.runescape.wiki/api/v1/osrs/latest?id=${id}`;
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  return (data);
} catch (error) {
  console.error(error);
}
    
}

export async function getIcon(id) { //Returns Picture by ID
  const url = `https://secure.runescape.com/m=itemdb_oldschool/obj_big.gif?id=${id}`;
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  return(data);
} catch (error) {
  console.error(error);
}
  
}

