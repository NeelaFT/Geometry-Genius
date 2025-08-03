function showArea(areaField, area){
    const parentId = document.getElementById(areaField);
    const p = document.createElement('p');
    p.innerText = 'Area is: ';
    
    const span1 = document.createElement('span');
    span1.innerText = area;
    p.appendChild(span1);

    const span2 = document.createElement('span');
    span2.innerText = 'cm'
    p.appendChild(span2);

    const superScrpt= document.createElement('sup');
    superScrpt.innerText = '2';
    p.appendChild(superScrpt);

    parentId.appendChild(p);

}