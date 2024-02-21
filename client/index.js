fetch('http://localhost:4000/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
.then(response => {
  return response.json
}).then((result) => {
    console.log(result); // Outputs: {"key":"value"}
}).catch(error => {
  console.log(error)
});
