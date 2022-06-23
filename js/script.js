const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

select.addEventListener("change", changeURLLangeage);

function changeURLLangeage() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

function chandeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#ru";
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lang-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

chandeLanguage();

