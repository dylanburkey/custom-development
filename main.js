/// @author:  Dylan Burkey
/// @purpose: Fetch API for IP Addresses
/// @date:    June 13, 2019 - 2:46 PM
    

function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('ip');
  const url = 'https://api.myip.com/';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let ips = data.results;
    return ips.map(function(ip) {
        span = createNode('span');
      span.innerHTML = `${ip} ${cc} ${country}`;
    })
  })
  .catch(function(error) {
    console.log(error);
  });   
