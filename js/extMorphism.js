document.addEventListener('DOMContentLoaded', function() {
    // Создаем функцию для создания изображения
    function createImage(emoteName) {
        const img = document.createElement('img');

  
        img.setAttribute('src', `./emotes/${emoteName}.gif`);
       
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
                        const img = createImage(emoteName);
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
        const img = createImage(emoteName);
        emoteElement.appendChild(img);
    });





// Создаем новый элемент div
    var circleDiv = document.createElement('div');

    // Применяем стили для создания круглого div с красным фоном
    circleDiv.style.width = "100px";
    circleDiv.style.height ="100px";
    circleDiv.style.background = 'red';
    circleDiv.style.borderRadius = '50%';
    // Применяем стили Flexbox к mainCircle для выравнивания вложенных элементов по центру
    mainCircle.style.display = 'grid';
    mainCircle.style.justifyContent = 'center';
    mainCircle.style.alignItems = 'center';

    // Добавляем созданный div в элемент с id 'mainCircle'
    document.getElementById('mainCircle').appendChild(circleDiv);

    var circleDiv = document.createElement('div');

    // Применяем стили для создания круглого div с красным фоном
    circleDiv.style.width = "100px";
    circleDiv.style.height ="100px";
    circleDiv.style.background = 'red';
    circleDiv.style.borderRadius = '50%';
    document.getElementById('mainCircle').appendChild(circleDiv);





















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

function createEmote()
{
    const emote = document.createElement('p');
    emote.setAttribute('name', `(${i})`);
    emote.innerHTML = "КУКУ";
    document.body.appendChild(emote);
    i++;

}
;