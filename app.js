let colorNum = 0;

function changingColors(){
    let colors = ['red', 'grey', 'blue', 'yellow', 'green', 'burlywood', 'brown'];

    document.getElementsByTagName("body")[0].style.backgroundColor = colors[colorNum++];

    if (colorNum > colors.length - 1) {
        colorNum = 0;
    }
}