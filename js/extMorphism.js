

document.addEventListener('DOMContentLoaded', function() {
    // Создаем функцию для создания изображения
    function createImage(emoteName, width, height, borderradius) {
        const img = document.createElement('img');
        img.setAttribute('src', `./emotes/${emoteName}.gif`);
    
        img.style.width = width;
        img.style.height = height;
   
        return img;
    }
    
    // Создаем экземпляр наблюдателя с колбэком, обрабатывающим изменения
    const observer = new MutationObserver((mutationsList, observer) => {
        // Проверяем все изменения в DOM
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Если были добавлены новые узлы, проверяем их на соответствие 'emote'
                mutation.addedNodes.forEach(node => {
                    if(node.nodeName.toLowerCase() === 'emote') {
                        const emoteName = node.getAttribute('name');
                        const width = node.style.width;
                        const height = node.style.height;
                        const img = createImage(emoteName, width, height);
                        
                        node.appendChild(img);
                    }
                });
            }
        }
    });
    

    // Начинаем наблюдение за конфигурацией и начальным DOM
    observer.observe(document.body, { childList: true, subtree: true });

    // Обрабатываем все существующие элементы 'emote'
    document.querySelectorAll('emote').forEach(emoteElement => {
        const emoteName = emoteElement.getAttribute('name');
        const width = emoteElement.style.width;
        const height = emoteElement.style.height;
        const img = createImage(emoteName, width, height);
        emoteElement.appendChild(img);
    });





});


let i = 1;

function insertEmote() {
    document.body.style.opacity = "1";
    const img = new Image();
    img.onload = function() {
        const emote = document.createElement('emote');
        emote.setAttribute('name', `(${i})`);
        emote.style.width = "50px";
        
        // Выберите элемент div с классом 'content'
        const contentDiv = document.querySelector('.foxes');
        
        // Добавьте emote в div
        contentDiv.appendChild(emote);
        
        i++;
        insertEmote();
    };
    img.onerror = function() {
        console.log('No more images found.');
    };
    img.src = `./emotes/(${i}).gif`;
}

//document.addEventListener('DOMContentLoaded', insertEmote);

//document.addEventListener('DOMContentLoaded', insertEmote);
function makeFoxes()
{
    console.log("qq");
    insertEmote();
}

function createEmote()
{
    const emote = document.createElement('p');
    emote.setAttribute('name', `(${i})`);
    emote.innerHTML = "КУКУ";
    document.body.appendChild(emote);
    i++;

}
;