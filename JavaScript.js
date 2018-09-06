//Регуляторы ширины и высоты блока
document.getElementById('adjuster-width').oninput = adjuster_width;
document.getElementById('adjuster-height').oninput = adjuster_height;
document.getElementById('adjuster-color').oninput = adjuster_color;
//Изменение ширины ползунком и поле которое показывает параметр
function adjuster_width() {
    var blok = document.getElementById("blok-1");
    var width_slider = document.getElementById('width-slider');
    blok.style.width = this.value + 'px';
    width_slider.value = this.value + 'px';
}
// Изменение высоты ползунком и поле которое показывает параметр
function adjuster_height() {
    var blok = document.getElementById('blok-1');
    var height_slider = document.getElementById('height-slider');
    blok.style.height = this.value + 'px';
    height_slider.value = this.value + 'px';
}
// изменение цвета ползунком на рандом
function adjuster_color() {
    var color = Math.floor(Math.random() * 999999);
    var elem = document.getElementById('blok-1');
    var znak = document.getElementById('color-slider');
    color = "#" + color;
    elem.style.backgroundColor = color;
    znak.value = color;
    color_calling_the_color_bar();
}
// считываем и задаем цвет иконке цвета
var color_calling_the_color_bar = function() {
    var elem = document.getElementById('blok-1');
    var color = document.getElementById('calling-the-color-bar');
    var style = getComputedStyle(elem);
    color.style.background = style.background;
}

//Цвет и его строчное изменение
function color_input() {
    var blok = document.getElementById('blok-1');
    var color_input = document.getElementById('color-slider').value;
    blok.style.background = "#" + color_input;
    blok.style.background = color_input;
    color_calling_the_color_bar();
}
//Ширина и ее строчное изменение
function width_input() {
    var blok = document.getElementById('blok-1');
    var width_slider = document.getElementById('width-slider').value;
    blok.style.width = width_slider + 'px';
    blok.style.width = width_slider;
}
//Высота и ее строчное изменение
function height_input() {
    var blok = document.getElementById('blok-1');
    var height_slider = document.getElementById('height-slider').value;
    blok.style.height = height_slider + 'px';
    blok.style.height = height_slider;
}
//Двигаем блок мышкой
// $(function() {
//     $("#blok-1").draggable();
// });
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
});
//Прячем меню изменения размеров
function hide_resizing() {
    document.getElementById('item-size-menu').style.display = "none";
    document.getElementById('menu-color').style.display = "none";
}
// Код отвечающий за выбор цвета для блока
function color_selection_1() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffffff";
}

function color_selection_2() {
    var block = document.getElementById('blok-1');
    block.style.background = "#e5e5e5";
}

function color_selection_3() {
    var block = document.getElementById('blok-1');
    block.style.background = "#cccccc";
}

function color_selection_4() {
    var block = document.getElementById('blok-1');
    block.style.background = "#b2b2b2";
}

function color_selection_5() {
    var block = document.getElementById('blok-1');
    block.style.background = "#999999";
}

function color_selection_6() {
    var block = document.getElementById('blok-1');
    block.style.background = "#7f7f7f";
}

function color_selection_7() {
    var block = document.getElementById('blok-1');
    block.style.background = "#666666";
}

function color_selection_8() {
    var block = document.getElementById('blok-1');
    block.style.background = "#4c4c4c";
}

function color_selection_9() {
    var block = document.getElementById('blok-1');
    block.style.background = "#333333";
}

function color_selection_10() {
    var block = document.getElementById('blok-1');
    block.style.background = "#191919";
}

function color_selection_11() {
    var block = document.getElementById('blok-1');
    block.style.background = "#000000";
}

function color_selection_12() {
    var block = document.getElementById('blok-1');
    block.style.background = "#000000";
}

function color_selection_13() {
    var block = document.getElementById('blok-1');
    block.style.background = "#7f0000";
}

function color_selection_14() {
    var block = document.getElementById('blok-1');
    block.style.background = "#7f3f00";
}

function color_selection_15() {
    var block = document.getElementById('blok-1');
    block.style.background = "#7f7f00";
}

function color_selection_16() {
    var block = document.getElementById('blok-1');
    block.style.background = "#3f7f00";
}

function color_selection_17() {
    var block = document.getElementById('blok-1');
    block.style.background = "#007f00";
}

function color_selection_18() {
    var block = document.getElementById('blok-1');
    block.style.background = "#007f3f";
}

function color_selection_19() {
    var block = document.getElementById('blok-1');
    block.style.background = "#007f7f";
}

function color_selection_20() {
    var block = document.getElementById('blok-1');
    block.style.background = "#003f7f";
}

function color_selection_21() {
    var block = document.getElementById('blok-1');
    block.style.background = "#00007f";
}

function color_selection_22() {
    var block = document.getElementById('blok-1');
    block.style.background = "#3f007f";
}

function color_selection_23() {
    var block = document.getElementById('blok-1');
    block.style.background = "#7f007f";
}

function color_selection_24() {
    var block = document.getElementById('blok-1');
    block.style.background = "#7f003f";
}

function color_selection_25() {
    var block = document.getElementById('blok-1');
    block.style.background = "#bf0000";
}

function color_selection_26() {
    var block = document.getElementById('blok-1');
    block.style.background = "#bf5f00";
}

function color_selection_27() {
    var block = document.getElementById('blok-1');
    block.style.background = "#bfbf00";
}

function color_selection_28() {
    var block = document.getElementById('blok-1');
    block.style.background = "#5fbf00";
}

function color_selection_29() {
    var block = document.getElementById('blok-1');
    block.style.background = "#00bf00";
}

function color_selection_30() {
    var block = document.getElementById('blok-1');
    block.style.background = "#00bf5f";
}

function color_selection_31() {
    var block = document.getElementById('blok-1');
    block.style.background = "#00bfbf";
}

function color_selection_32() {
    var block = document.getElementById('blok-1');
    block.style.background = "#005fbf";
}

function color_selection_33() {
    var block = document.getElementById('blok-1');
    block.style.background = "#0000bf";
}

function color_selection_34() {
    var block = document.getElementById('blok-1');
    block.style.background = "#5f00bf";
}

function color_selection_35() {
    var block = document.getElementById('blok-1');
    block.style.background = "#bf00bf";
}

function color_selection_36() {
    var block = document.getElementById('blok-1');
    block.style.background = "#bf005f";
}

function color_selection_37() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ff0000";
}

function color_selection_38() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ff7f00";
}

function color_selection_39() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffff00";
}

function color_selection_40() {
    var block = document.getElementById('blok-1');
    block.style.background = "#7fff00";
}

function color_selection_41() {
    var block = document.getElementById('blok-1');
    block.style.background = "#00ff00";
}

function color_selection_42() {
    var block = document.getElementById('blok-1');
    block.style.background = "#00ff7f";
}

function color_selection_43() {
    var block = document.getElementById('blok-1');
    block.style.background = "#00ffff";
}

function color_selection_44() {
    var block = document.getElementById('blok-1');
    block.style.background = "#007fff";
}

function color_selection_45() {
    var block = document.getElementById('blok-1');
    block.style.background = "#0000ff";
}

function color_selection_46() {
    var block = document.getElementById('blok-1');
    block.style.background = "#7f00ff";
}

function color_selection_47() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ff00ff";
}

function color_selection_48() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ff007f";
}

function color_selection_49() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ff5656";
}

function color_selection_50() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffaa56";
}

function color_selection_51() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffff56";
}

function color_selection_52() {
    var block = document.getElementById('blok-1');
    block.style.background = "#aaff56";
}

function color_selection_53() {
    var block = document.getElementById('blok-1');
    block.style.background = "#56ff56";
}

function color_selection_54() {
    var block = document.getElementById('blok-1');
    block.style.background = "#56ffaa";
}

function color_selection_55() {
    var block = document.getElementById('blok-1');
    block.style.background = "#56ffff";
}

function color_selection_56() {
    var block = document.getElementById('blok-1');
    block.style.background = "#56aaff";
}

function color_selection_57() {
    var block = document.getElementById('blok-1');
    block.style.background = "#aa56ff";
}

function color_selection_58() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ff56ff";
}

function color_selection_59() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ff56aa";
}

function color_selection_60() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffaaaa";
}

function color_selection_61() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffd4aa";
}

function color_selection_62() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffffaa";
}

function color_selection_63() {
    var block = document.getElementById('blok-1');
    block.style.background = "#d4ffaa";
}

function color_selection_64() {
    var block = document.getElementById('blok-1');
    block.style.background = "#aaffaa";
}

function color_selection_65() {
    var block = document.getElementById('blok-1');
    block.style.background = "#aaffd4";
}

function color_selection_66() {
    var block = document.getElementById('blok-1');
    block.style.background = "#aaffff";
}

function color_selection_67() {
    var block = document.getElementById('blok-1');
    block.style.background = "#aad4ff";
}

function color_selection_68() {
    var block = document.getElementById('blok-1');
    block.style.background = "#aaaaff";
}

function color_selection_69() {
    var block = document.getElementById('blok-1');
    block.style.background = "#d4aaff";
}

function color_selection_70() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffaaff";
}

function color_selection_71() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffaad4";
}

function color_selection_72() {
    var block = document.getElementById('blok-1');
    block.style.background = "#ffaad4";
}
// Прячем и показываем панельку цветов 
var open_menu = document.getElementById('calling-the-color-bar'); // Assumes element with id='button'

open_menu.onclick = function() {
    var menu_color = document.getElementById('menu-color');
    if (menu_color.style.display !== 'block') {
        menu_color.style.display = 'block';
    } else {
        menu_color.style.display = 'none';
    }
};