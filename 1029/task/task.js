const table = document.getElementById("scoretable")
const cells = table.querySelectorAll('td')

const original ={
    width : getComputedStyle(table).width,
    border : getComputedStyle(table).border,
    borderSpacing : getComputedStyle(table).borderSpacing,
    tdbg : getComputedStyle(cells[cells.length - 1]).backgroundColor
}

// 改table width
document.getElementById('w200').addEventListener('click', function(){
    table.style.width ='200px'
});
document.getElementById('w500').addEventListener('click', function(){
    table.style.width ='500px'
});

//改table border and border spacing
document.querySelectorAll('.bd').forEach(b =>{
    b.addEventListener('click',()=>{
        const text = b.textContent;
        if(text === '1px'){
        table.style.border = '1px black solid';
        table.style.borderSpacing = '1px'
    }
    else if(text === '10px'){
        table.style.border = '10px black solid';
        table.style.borderSpacing = '10px'
    }    
    else if(text === '20px'){
        table.style.border = '20px black solid';
        table.style.borderSpacing = '20px'
    }
    })
})

document.querySelectorAll('.g, .o, .b, .p').forEach(color =>{
    color.addEventListener('click',()=>{
        const c = window.getComputedStyle(color).backgroundColor;
        table.querySelectorAll('td').forEach(ttd =>{
            ttd.style.backgroundColor = c;
        })
    })
})

document.getElementById('reset').addEventListener('click',()=>{
    table.style.width = original.width;
    table.style.border = original.border;
    table.style.borderSpacing = original.borderSpacing;

    cells.forEach(cell =>{
        cell.style.backgroundColor = original.tdbg;
    })
})