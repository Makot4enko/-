$(document).ready(FUNCTION() { // Ждём загрузки страницы
$(".image").click(FUNCTION(){    // Событие клика на маленькое изображение
VAR img = $(THIS);    // Получаем изображение, на которое кликнули
VAR src = img.attr('src'); // Достаем из этого изображения путь до картинки
$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
"<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
"<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
"</div>");
$(".popup").fadeIn(800); // Медленно выводим изображение
$(".popup_bg").click(FUNCTION(){    // Событие клика на затемненный фон      
$(".popup").fadeOut(800);    // Медленно убираем всплывающее окно
setTimeout(FUNCTION() {    // Выставляем таймер
$(".popup").remove(); // Удаляем разметку всплывающего окна
}, 800);
});
});
});
