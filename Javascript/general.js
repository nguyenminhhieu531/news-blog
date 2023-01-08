

const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';

const title = document.querySelector('title');

dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');

let ARTICLES_LIKED = JSON.parse(localStorage.getItem('ARTICLES_LIKED')) || [];
console.log(ARTICLES_LIKED);

document.addEventListener('click', function(e){
    const el = e.target;
    const title = el.dataset.title;
    if(el.classList.contains('icon-like')){
        const id = parseInt(el.dataset.id);
        if(ARTICLES_LIKED.includes(id)){
            el.classList.remove('liked');
            ARTICLES_LIKED = ARTICLES_LIKED.filter((articleId) => articleId !== id);
            if(el.classList.contains('remove-liked')){
                el.closest('.article-item-favorite').remove();
            }
            Toastify({
                text: `Đã bỏ bài viết yêu thích "${title}"`,
                duration: 3000,
                close: true,
            }).showToast();
        }
        else{
            el.classList.add('liked');
            ARTICLES_LIKED.push(id);
            Toastify({
                text: `Đã thêm bài viết yêu thích "${title}"`,
                duration: 3000,
                close: true,
            }).showToast();
        }
        localStorage.setItem('ARTICLES_LIKED', JSON.stringify(ARTICLES_LIKED));
    }
});

function getQueryParam(key){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
}





