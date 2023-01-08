

// Tổng hợp
fetch(`${BASE_URL}articles?limit=1`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';

        const pubDate = dayjs(article.publish_date).fromNow();
        contentHTML += `
            <div class="masonry-box post-media">
                <img src="${article.thumb}" alt="" class="img-fluid">
                <div class="shadoweffect">
                    <div class="shadow-desc">
                        <div class="blog-meta">
                            <span class="bg-aqua"><a href="category.html?id=${article.id}"
                                    title="">${article.category.name}</a></span>
                            <h4><a href="detail.html?id=${article.id}" title="">T${article.title}</a></h4>
                            <small><a href="detail.html?id=${article.id}" title="">${pubDate}</a></small>
                            <small><a href="blog-author.html" title="">${article.author}</a></small>
                        </div>
                    </div>
                    <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>
                </div>
            </div>`;
    }); 
    document.getElementById('articles-left').innerHTML = contentHTML;
  });

  fetch(`${BASE_URL}articles/popular?limit=1`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
        contentHTML += `
            <img src="${article.thumb}" alt="" class="img-fluid">
            <div class="shadoweffect">
            <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>
                <div class="shadow-desc">
                    <div class="blog-meta">
                        <span class="bg-green"><a href="detail.html?id=${article.id}"
                                title="">${article.category.name}</a></span>
                        <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a></h4>
                        <small><a href="detail.html?id=${article.id}" title="">${pubDate}</a></small>
                        <small><a href="blog-author.html" title="">${article.author}</a></small>
                    </div>
                </div>
            </div>`;
    }); 
    document.querySelector('.masonry-box-top').innerHTML = contentHTML;
  });

  fetch(`${BASE_URL}articles/popular?limit=1`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
        contentHTML += `
        <img src="${article.thumb}" alt="" class="img-fluid">
        <div class="shadoweffect">
            <div class="shadow-desc">
                <div class="blog-meta">
                    <span class="bg-green"><a href="detail.html?id=${article.id}"
                            title="">${article.category.name}</a></span>
                    <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a>
                    </h4>
                </div><!-- end meta -->
            </div><!-- end shadow-desc -->
        </div><!-- end shadow -->
        <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>`;
    }); 
    document.querySelector('.small-box-1').innerHTML = contentHTML;
  });

  fetch(`${BASE_URL}articles/popular?limit=1`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
        contentHTML += `
        <img src="${article.thumb}" alt="" class="img-fluid">
        <div class="shadoweffect">
            <div class="shadow-desc">
                <div class="blog-meta">
                    <span class="bg-green"><a href="detail.html?id=${article.id}"
                            title="">${article.category.name}</a></span>
                    <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a>
                    </h4>
                </div><!-- end meta -->
            </div><!-- end shadow-desc -->
        </div><!-- end shadow -->
        <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>`;
    }); 
    document.querySelector('.small-box-2').innerHTML = contentHTML;
  });

  fetch(`${BASE_URL}articles/popular?limit=1`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
        contentHTML += `
        <div class="masonry-box post-media">
            <img src="${article.thumb}" alt="" class="img-fluid">
            <div class="shadoweffect">
                <div class="shadow-desc">
                    <div class="blog-meta">
                        <span class="bg-aqua"><a href="detail.html?id=${article.id}"
                                title="">${article.category.name}</a></span>
                        <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a></h4>
                        <small><a href="detail.html?id=${article.id}" title="">${pubDate}</a></small>
                        <small><a href="blog-author.html" title="">${article.author}</a></small>
                    </div>
                </div>
                <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>
            </div>
        </div>`;
    }); 
    document.querySelector('.right-side').innerHTML = contentHTML;
  });

  fetch(`${BASE_URL}articles/popular?limit=2`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
        contentHTML += `
        <div class="blog-box">
            <div class="post-media">
                <a href="detail.html?id=${article.id}" title="">
                    <img src="${article.thumb}" alt="" class="img-fluid">
                    <div class="hovereffect">
                        <span></span>
                    </div><!-- end hover -->
                </a>
                <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>
            </div><!-- end media -->
            <div class="blog-meta big-meta">
                <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a></h4>
                <p>${article.description}</p>
                <small><a href="detail.html?id=${article.id}" title="">${article.category.name}</a></small>
                <small><a href="detail.html?id=${article.id}" title="">${pubDate}</a></small>
                <small><a href="blog-author.html" title="">${article.author}</a></small>
            </div>
        </div>`;
    }); 
    document.getElementById('articles-new').innerHTML = contentHTML;
  });

  
  fetch(`${BASE_URL}articles?limit=4&page=2`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        console.log(article);
        const pubDate = dayjs(article.publish_date).fromNow();
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
        contentHTML += `
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="blog-box">
            <div class="post-media">
                <a href="detail.html?id=${article.id}" title="">
                    <img src="${article.thumb}" alt="" class="img-fluid">
                    <div class="hovereffect">
                        <span></span>
                    </div><!-- end hover -->
                </a>
            </div><!-- end media -->
            <div class="blog-meta">
                <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a></h4>
                <small><a href="detail.html?id=${article.id}" title="">${article.category.name}</a></small>
                <small><a href="detail.html?id=${article.id}" title="">${pubDate}</a></small>
            </div><!-- end meta -->
        </div>
        <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i><!-- end blog-box -->
    </div>`;
    }); 
    document.getElementById('articles-new-right').innerHTML = contentHTML;
  });


  fetch(`${BASE_URL}articles/popular?limit=6`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
        contentHTML += `
            <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="detail.html?id=${article.id}" title="">
                            <img src="${article.thumb}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                    <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a></h4>
                    <p>${article.description}</p>
                    <small><a href="detail.html?id=${article.id}" title="">${article.category.name}</a></small>
                    <small><a href="detail.html?id=${article.id}" title="">${pubDate}</a></small>
                    <small><a href="blog-author.html" title="">${article.author}</a></small>
                </div>
            </div>
            <hr class="invis">`;
    }); 
    document.getElementById('articles-blog-list').innerHTML = contentHTML;
  });

  
  fetch(`${BASE_URL}articles/popular?limit=6`)
  .then((response) => response.json())
  .then((res) => {
    const articles = res.data;
    console.log('articles', articles);

    let contentHTML = '';

    articles.forEach((article, index) => {
        const pubDate = dayjs(article.publish_date).fromNow();
        const liked = ARTICLES_LIKED.includes(article.id) ? 'liked' : '';
        contentHTML += `
        <div class="blog-box">
            <div class="post-media">
                <a href="detail.html?id=${article.id}" title="">
                    <img src="${article.thumb}" alt="" class="img-fluid">
                    <div class="hovereffect">
                        <span class="videohover"></span>
                    </div><!-- end hover -->
                </a>
                <i class="fa fa-heart icon-like ${liked}" aria-hidden="true" data-id=${article.id} data-title="${article.title}"></i>
            </div>
            
            <div class="blog-meta">
                <h4><a href="detail.html?id=${article.id}" title="">${article.title}</a></h4>
                <small><a href="detail.html?id=${article.id}" title="">${article.category.name}</a></small>
                <small><a href="detail.html?id=${article.id}" title="">${pubDate}</a></small>
            </div>
        </div><!-- end blog-box -->`;
    }); 
    document.getElementById('articles-blog-box').innerHTML = contentHTML;
  });

