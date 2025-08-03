function parallelogramArea(){
    const base = getInputField('parallelogram-base');
    const height = getInputField('parallelogram-height');
    area = base * height;
    showArea('area-show', area);
}