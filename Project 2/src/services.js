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


export async function addFavourite(item) {
  const url = 'https://api.airtable.com/v0/appfDObNRbPpl7fnQ/Favourite';
  const data ={fields:item}
const options = {
  method: 'POST',
  headers: {
    authorization: `Bearer ${TOKEN}`,
    'content-type': 'application/json'
  },
  body: JSON.stringify(data)
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
  
}

export async function getFavourite(item) {  //pulls airtable contents
const url = 'https://api.airtable.com/v0/appfDObNRbPpl7fnQ/Favourite';
const options = {
  method: 'GET',
  headers: {
    authorization: `Bearer ${TOKEN}`
  }
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
} catch (error) {
  console.error(error);
}
  
}

export async function deleteFavourite(itemId) {
  const url = `https://api.airtable.com/v0/appfDObNRbPpl7fnQ/Favourite/${itemId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${TOKEN}`,
        "content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}