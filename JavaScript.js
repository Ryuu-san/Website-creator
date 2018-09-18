//Задаем главные блоки
function define_a_global_variable() {
    var global = window || this;
    global.blok = document.getElementById("blok-1");
}
//Регуляторы ширины и высоты блока
document.getElementById('adjuster-width').oninput = adjuster_width;
document.getElementById('adjuster-height').oninput = adjuster_height;
document.getElementById('adjuster-color').oninput = adjuster_color;
//Изменение ширины ползунком и поле которое показывает параметр
function adjuster_width() {
    var width_slider = document.getElementById('width-slider');
    blok.style.width = this.value + 'px';
    width_slider.value = this.value + 'px';
}
// Изменение высоты ползунком и поле которое показывает параметр
function adjuster_height() {
    var height_slider = document.getElementById('height-slider');
    blok.style.height = this.value + 'px';
    height_slider.value = this.value + 'px';
}
// изменение цвета ползунком на рандом
function adjuster_color() {
    var color = Math.floor(Math.random() * 999999);
    var znak = document.getElementById('color-slider');
    color = "#" + color;
    blok.style.backgroundColor = color;
    znak.value = color;
    color_calling_the_color_bar();
}

// считываем и задаем цвет иконке цвета
var color_calling_the_color_bar = function() {
    var color = document.getElementById('calling-the-color-bar');
    var style = getComputedStyle(blok);
    color.style.background = style.background;
}

//Цвет и его строчное изменение
function color_input() {
    var color_input = document.getElementById('color-slider').value;
    blok.style.background = "#" + color_input;
    blok.style.background = color_input;
    color_calling_the_color_bar();
}
//Ширина и ее строчное изменение
function width_input() {
    var width_slider = document.getElementById('width-slider').value;
    blok.style.width = width_slider + 'px';
    blok.style.width = width_slider;
}
//Высота и ее строчное изменение
function height_input() {
    var height_slider = document.getElementById('height-slider').value;
    blok.style.height = height_slider + 'px';
    blok.style.height = height_slider;
}
// Двигаем блок мышкой
$(function() {
    $("#blok-1").draggable();
});

var block2 = document.getElementById('primary_block');
block2.ondragstart = function() {
    return false;
};
// sav_name();
//Создаем блок БЕТА
// function create_blok() {
//     var menu_blok = document.getElementById('menu_blok');
//     var new_blok = document.createElement('div');
//     new_blok.id = 'blok-1';
//     menu_blok.appendChild(new_blok);
// }
//Создаем блок и добавляем ему функцию перетаскивания
$('#header-control-panel-create-blok').on('click', function() {
    $("#menu_blok").append('<div class="blok-1" id="blok-1"></div>');
    document.getElementById('item-size-menu').style.display = "block";
    $(function() {
        $(".blok-1").draggable({});
    });
    define_a_global_variable();
});
//Прячем меню изменения размеров
function hide_resizing() {
    document.getElementById('item-size-menu').style.display = "none";
    document.getElementById('panel_menu_color').style.display = "none";
}
//Редактор цвета и все прочее с ним связанное

// Код отвечающий за выбор цвета для блока
function color_selection_1() {
    blok.style.background = "#ffffff";
}

function color_selection_2() {
    blok.style.background = "#e5e5e5";
}

function color_selection_3() {
    blok.style.background = "#cccccc";
}

function color_selection_4() {
    blok.style.background = "#b2b2b2";
}

function color_selection_5() {
    blok.style.background = "#999999";
}

function color_selection_6() {
    blok.style.background = "#7f7f7f";
}

function color_selection_7() {
    blok.style.background = "#666666";
}

function color_selection_8() {
    blok.style.background = "#4c4c4c";
}

function color_selection_9() {
    blok.style.background = "#333333";
}

function color_selection_10() {
    blok.style.background = "#191919";
}

function color_selection_11() {
    blok.style.background = "#000000";
}

function color_selection_12() {
    blok.style.background = "#000000";
}

function color_selection_13() {
    blok.style.background = "#7f0000";
}

function color_selection_14() {
    blok.style.background = "#7f3f00";
}

function color_selection_15() {
    blok.style.background = "#7f7f00";
}

function color_selection_16() {
    blok.style.background = "#3f7f00";
}

function color_selection_17() {
    blok.style.background = "#007f00";
}

function color_selection_18() {
    blok.style.background = "#007f3f";
}

function color_selection_19() {
    blok.style.background = "#007f7f";
}

function color_selection_20() {
    blok.style.background = "#003f7f";
}

function color_selection_21() {
    blok.style.background = "#00007f";
}

function color_selection_22() {
    blok.style.background = "#3f007f";
}

function color_selection_23() {
    blok.style.background = "#7f007f";
}

function color_selection_24() {
    blok.style.background = "#7f003f";
}

function color_selection_25() {
    blok.style.background = "#bf0000";
}

function color_selection_26() {
    blok.style.background = "#bf5f00";
}

function color_selection_27() {
    blok.style.background = "#bfbf00";
}

function color_selection_28() {
    blok.style.background = "#5fbf00";
}

function color_selection_29() {
    blok.style.background = "#00bf00";
}

function color_selection_30() {
    blok.style.background = "#00bf5f";
}

function color_selection_31() {
    blok.style.background = "#00bfbf";
}

function color_selection_32() {
    blok.style.background = "#005fbf";
}

function color_selection_33() {
    blok.style.background = "#0000bf";
}

function color_selection_34() {
    blok.style.background = "#5f00bf";
}

function color_selection_35() {
    blok.style.background = "#bf00bf";
}

function color_selection_36() {
    blok.style.background = "#bf005f";
}

function color_selection_37() {
    blok.style.background = "#ff0000";
}

function color_selection_38() {
    blok.style.background = "#ff7f00";
}

function color_selection_39() {
    blok.style.background = "#ffff00";
}

function color_selection_40() {
    blok.style.background = "#7fff00";
}

function color_selection_41() {
    blok.style.background = "#00ff00";
}

function color_selection_42() {
    blok.style.background = "#00ff7f";
}

function color_selection_43() {
    blok.style.background = "#00ffff";
}

function color_selection_44() {
    blok.style.background = "#007fff";
}

function color_selection_45() {
    blok.style.background = "#0000ff";
}

function color_selection_46() {
    blok.style.background = "#7f00ff";
}

function color_selection_47() {
    blok.style.background = "#ff00ff";
}

function color_selection_48() {
    blok.style.background = "#ff007f";
}

function color_selection_49() {
    blok.style.background = "#ff5656";
}

function color_selection_50() {
    blok.style.background = "#ffaa56";
}

function color_selection_51() {
    blok.style.background = "#ffff56";
}

function color_selection_52() {
    blok.style.background = "#aaff56";
}

function color_selection_53() {
    blok.style.background = "#56ff56";
}

function color_selection_54() {
    blok.style.background = "#56ffaa";
}

function color_selection_55() {
    blok.style.background = "#56ffff";
}

function color_selection_56() {
    blok.style.background = "#56aaff";
}

function color_selection_57() {
    blok.style.background = "#aa56ff";
}

function color_selection_58() {
    blok.style.background = "#ff56ff";
}

function color_selection_59() {
    blok.style.background = "#ff56aa";
}

function color_selection_60() {
    blok.style.background = "#ffaaaa";
}

function color_selection_61() {
    blok.style.background = "#ffd4aa";
}

function color_selection_62() {
    blok.style.background = "#ffffaa";
}

function color_selection_63() {
    blok.style.background = "#d4ffaa";
}

function color_selection_64() {
    blok.style.background = "#aaffaa";
}

function color_selection_65() {
    blok.style.background = "#aaffd4";
}

function color_selection_66() {
    blok.style.background = "#aaffff";
}

function color_selection_67() {
    blok.style.background = "#aad4ff";
}

function color_selection_68() {
    blok.style.background = "#aaaaff";
}

function color_selection_69() {
    blok.style.background = "#d4aaff";
}

function color_selection_70() {
    blok.style.background = "#ffaaff";
}

function color_selection_71() {
    blok.style.background = "#ffaad4";
}

function color_selection_72() {
    blok.style.background = "#ffaad4";
}
// Прячем и показываем панельку цветов 
var open_menu = document.getElementById('calling-the-color-bar');

open_menu.onclick = function() {
    var menu_color = document.getElementById('panel_menu_color');
    if (menu_color.style.display != 'block') {
        menu_color.style.display = 'block';
    } else {
        menu_color.style.display = 'none';
    }
};
//Считываем значение и применяем к тексту
function applying_a_font_from_the_list() {
    var text = document.getElementById('text_test');
    var font_text = document.getElementById('font-menu').value;
    text.style.fontFamily = font_text;
}
// Массив шрифтов
var array_font = ['Стандарт', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Franklin Gothic Medium', 'Georgia', 'Impact', 'Lucida Console', 'Lucida Sans Unicode', 'Microsoft Sans Serif', 'Palatino Linotype', 'Sylfaen', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana'];
var index = 0;
// Переключаем шрифт вперед и визуализуем это
function forward() {
    var text = document.getElementById('text_test');
    var font_text = document.getElementById('font-menu');
    if (index >= array_font.length) {
        index = 0;
    } else {
        font_text.value = array_font[index];
        text.style.fontFamily = array_font[index++];
    }
}
// Переключаем шрифт назад и визуализуем это
function back() {
    var text = document.getElementById('text_test');
    var font_text = document.getElementById('font-menu');
    if (index <= 0) {
        index = array_font.length - 0;
    } else {
        text.style.fontFamily = array_font[--index];
        font_text.value = array_font[index];
    }
}
//Шрифт пользователя
function custom_font() {
    var custom_font = document.getElementById('user-supplied-font').value;
    var text = document.getElementById('text_test');
    text.style.fontFamily = custom_font;
}
//Размер текста
function text_size() {
    var text = document.getElementById('text_test');
    var text_size = document.getElementById('text-size').value;
    text.style.fontSize = text_size + 'px';
    text.style.fontSize = text_size;
}