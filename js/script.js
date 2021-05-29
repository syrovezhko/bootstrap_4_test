function copytext(el) {
    let $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
    let URL = prompt('Код успешно скорирован. Нажам на кнопку "ОК", Вы сможете продолжить регистрацию на mos.ru. Если не сработало, нажмите кнопку "Записаться на mos.ru"', 'https://www.mos.ru/pgu/ru/application/dogm/077060701');
	let newTab = window.open(URL);
	newTab.location.href = url;
}