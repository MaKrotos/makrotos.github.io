document.addEventListener('DOMContentLoaded', function() {
    // Создаем экземпляр наблюдателя с колбэком, обрабатывающим изменения
    const observer = new MutationObserver((mutationsList, observer) => {
        // Проверяем все изменения в DOM
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Если были добавлены новые узлы, проверяем их на соответствие 'emote'
                mutation.addedNodes.forEach(node => {
                    if(node.nodeName.toLowerCase() === 'emote') {
                        const emoteName = node.getAttribute('name');
                        const img = document.createElement('img');
                        img.style.height = 10;
                        img.style.height = 10;
                        img.setAttribute('src', `./emotes/${emoteName}.gif`);
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
        const img = document.createElement('img');
        img.setAttribute('src', `./emotes/${emoteName}.gif`);
        emoteElement.appendChild(img);
    });
});


let i = 1;

function insertEmote() {
    const img = new Image();
    img.onload = function() {
        const emote = document.createElement('emote');
        emote.setAttribute('name', `(${i})`);
        document.body.appendChild(emote);
        i++;
        insertEmote();
    };
    img.onerror = function() {
        console.log('No more images found.');
    };
    img.src = `./emotes/(${i}).gif`;
}

document.addEventListener('DOMContentLoaded', insertEmote);