async function getUserAsync(seattle) 
{
  let response = await fetch(`https://geocode.xyz/seattle?json=1/${seattle}`);
  let data = await response.json()
  return data;
}
getUserAsync('seattle')
  .then(data => console.log(data.latt,data.longt)); 
  