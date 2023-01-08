
  fetch(`${BASE_URL}articles/popular?limit=3`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        contentHTML += `
        <a href="detail.html?id=${article.id}"
            class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="w-100 justify-content-between">
                <img src="${article.thumb}" alt="" class="img-fluid float-left">
                <h5 class="mb-1">${article.title}</h5>
                <small>${pubDate}</small>
            </div>
        </a>`;
    }); 
    document.getElementById('post-group').innerHTML = contentHTML;
  });

  fetch(`${BASE_URL}articles/popular?limit=3`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        contentHTML += `
        <a href="detail.html?id=${article.id}" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="w-100 justify-content-between">
                <img src="${article.thumb}" alt="" class="img-fluid float-left">
                <h5 class="mb-1">${article.title}</h5>
                <span class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
            </div>
        </a>`;
    }); 
    document.getElementById('popular-posts').innerHTML = contentHTML;
  });