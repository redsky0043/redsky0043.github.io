
function copytext(elem) {
    var value = $("<input>");
    $("body").append(value);
    value.val($(elem).text()).select();
    document.execCommand("copy");
    value.remove();
}

