async function fetchData() {
  const response = await fetch("JS/data.txt");
  return await response.text();
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error");
  });
