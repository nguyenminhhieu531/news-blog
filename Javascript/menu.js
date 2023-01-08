// Nav Menu
fetch(`${BASE_URL}categories_news`)
  .then((response) => response.json())
  .then((res) => {
    const categories = res.data;

    // Duyệt categories
    let contentHTML = '';
    categories.forEach((category, index) =>{
        contentHTML += `
        <li class="nav-item">
            <a class="nav-link color-pink-hover" href="category.html?id=${category.id}">${category.name}</a>
        </li>`
    });

    document.getElementById('cloapediamenu-ul').innerHTML = contentHTML;
  });