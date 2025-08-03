function rectangleAreaCal(){
    const width = getInputField('rectangle-width');
    const length = getInputField('rectangle-length');

    //calculate area
    const area = width * length;
    console.log(area);
    showArea('area-show', area);
}