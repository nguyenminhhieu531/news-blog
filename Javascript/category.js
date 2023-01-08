
const categoryId = getQueryParam('id');
    

renderArticles();
function renderArticles(page = 1){
    fetch(`${BASE_URL}categories_news/${categoryId}/articles?limit=9&page=${page}`)
    .then((response) => response.json())
    .then((res) => {
      const articles = res.data;
      const totalPage = res.meta.last_page;

      let contentHTML = '';
      articles.forEach((article) => {
          const pubDate = dayjs(article.publish_date).fromNow();
          document.querySelector('.active').innerHTML = article.category.name;

          document.getElementById('search-title').innerHTML = article.category.name;

          const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
          
          contentHTML += `    
          <div class="col-md-4 col-xs-12 mb-1">
                <div class="pitem item-w1 item-h1 portfolio">
                    <div class="blog-box">
                        <div class="post-media">
                            <a href="detail.html?id=${article.id}" title="">
                                <img src="${article.thumb}" alt="" class="img-fluid">
                                <div class="hovereffect">
                                    <span></span>
                                </div>
                            </a>
                        </div>
                        <div class="blog-meta">
                            <span class="bg-grey"><a href="detail.html?id=${article.id}">${article.category.name}</a></span>
                            <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a></h4>
                            <small><a href="" title="">${article.author}</a></small>
                            <small><a href="" title="">${pubDate}</a></small>
                        </div>
                    </div>
                </div>
                <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>
            </div>`
        });
        document.getElementById('category').innerHTML = contentHTML;
        renderPagination(page, totalPage);
    })
    .catch((error) => {
        window.location.href = '404.html';
      });
}

