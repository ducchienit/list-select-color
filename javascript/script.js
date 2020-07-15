function selectColor(color){
    var selectedValue = document.getElementsByTagName('select')[color].value;
    document.getElementsByTagName('select')[color].style.backgroundColor = selectedValue;
    var selectList = document.getElementsByTagName('select');
	var optionList = document.getElementsByTagName('option');
    var tempIndex = 0;
    if (selectedValue) {
        for (var i = 0; i < optionList.length; i++) {
            if (optionList[i].value == selectedValue) {
                if (tempIndex != color) {
                    optionList[i].disabled = true;
                }
                tempIndex++;
            }
        }
    }
    else {
        var arrSelected = [];

        for (var i = 0; i < selectList.length; i++) {
            arrSelected.push(selectList[i].value);
        }
        for (var i = 0; i < optionList.length; i++) {
            if (!arrSelected.includes(optionList[i].value) && optionList[i].getAttribute("disabled") != null) {
                optionList[i].disabled = false;
            }
        }
    }
}