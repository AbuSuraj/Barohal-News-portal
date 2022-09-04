const key_api = `e7da1a3226a14bc492f45849e7af459f`;
const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-09-04&sortBy=popularity&apiKey=e7da1a3226a14bc492f45849e7af459f`;
const loadNews = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.articles));
};
const displayNews = (data) => {
  const newsContainer = document.getElementById("news-container");
  console.log(data[0].title);
  data.forEach((element) => {
    console.log(element.urlToImage);
    const div = document.createElement("div");
    div.classList.add("my-5");
    div.classList.add("shadow");
    div.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
    <div class= "col-md-4 ">
    <img src="${
      element.urlToImage
    }" class="img-fluid rounded-start p-1" alt="...">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h2 class="card-title">${element.title}</h2>
    <h4>Source: ${element.source.name}</h4>
    <span class="text-start h5">Author: ${element.author}</span>
    <span class="text-end h6">  published date: ${element.publishedAt.slice(
      0,
      10
    )}</span> 
    <p class="card-text fs-5">${element.description}</p>
    <p class="card-text fs-5">${element.content}</p>
    <a class="btn btn-warning" href="${element.url}">view full news</a> 
    </div>  
    </div>
    </div>
    </div>
    `;

    newsContainer.appendChild(div);
  });
};
loadNews();
