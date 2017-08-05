let template = '';

for (var i = 0; i < customers.results.length; i++) {

 template +=
`
<article>
  <div class="people">
    <img src=${customers.results[i].picture.large}>
      <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
        <h4>${customers.results[i].email}</h4>
        <p>${customers.results[i].location.street}</p>
        <p>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
        <p>${customers.results[i].phone}</p>
        <p class="blur">${customers.results[i].id.value}</p>
  <div>
</article>
`;
}
document.querySelector('.container').innerHTML = template;

let hey = getElementsByTagName('body');
let title = document.createElement("h1");
h1.textcontent = "Internal Company Directory";
let child = body.prependChild();
