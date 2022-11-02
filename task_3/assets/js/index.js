
window.onload=function(){
    var jelek = document.getElementById("jelek");
    var bagus = document.getElementById("bagus");

    if(jelek){
        jelek.addEventListener("mouseover", hjelek, false);
        jelek.addEventListener("mouseout", outjelek, false);
    }

    function hjelek(){
        document.activeElement.blur();
        bagus.style.left  = '120px';
        jelek.style.left  = '20px';
    }

    function outjelek(){
        document.activeElement.blur();
        bagus.style.left = '20px';
        jelek.style.left = '120px';
    }

    document.getElementById('kliktang').addEventListener('click', function(e){ 
       e.preventDefault();
       var frmt = document.getElementById('tanggapan');
       var awal = document.getElementById('box');
       
       frmt.style.display = 'block';
       awal.style.display = 'none';

    });

    document.getElementById('kembalitang').addEventListener('click', function(e){ 
        e.preventDefault();
        var frmt = document.getElementById('tanggapan');
        var awal = document.getElementById('box');
        
        frmt.style.display = 'none';
        awal.style.display = 'block';
 
    });

    document.getElementById('kembalilist').addEventListener('click', function(e){ 
        e.preventDefault();
        document.getElementById('box-list').style.display = 'none';
        var awal = document.getElementById('box');
        
        awal.style.display = 'block';
 
    });

    document.getElementById('lihatT').addEventListener('click', function(e){ 
        e.preventDefault();
        var frmt = document.getElementById('box-list');
        var awal = document.getElementById('box');
        var tanggapan = document.getElementById('tanggapan');
        
        frmt.style.display = 'block';
        awal.style.display = 'none';
        tanggapan.style.display = 'none';
 
    });
}

function ubah_nama(){
    var inputNama = document.getElementById("inpnama");
    if(inputNama.value != ''){
        var lab = document.getElementById('lab-nama');
        lab.style.display = 'block';
    }else{
        var lab = document.getElementById('lab-nama');
        lab.style.display = 'none';
    }
}

function ubah_tang(){
    var inputTang = document.getElementById("inptang");
    if(inputTang.value != ''){
        var lab = document.getElementById('lab-tanggapan');
        lab.style.display = 'block';
    }else{
        var lab = document.getElementById('lab-tanggapan');
        lab.style.display = 'none';
    }
}

var dataP;

const request = new XMLHttpRequest();
request.open('GET', './assets/json/data_tanggapan.json');
request.responseText = 'json';

request.onload = function () {
    // Convert JSON data to an object 
    let data = JSON.parse(this.responseText).data;
    tab = document.getElementById('tablebodi');
    jum = data.length;
    
    dataP = data;

    for (i = 0; i < jum; i++) {
        console.log(data[i]);
        n = i + 1;

        tab.innerHTML += `
        <tr align='center'>
            <td>`+ n +`</td>
            <td>`+ data[i].nama +`</td>
            <td>`+ data[i].tanggapan +`</td>
            <td>`+ data[i].keterangan +`</td>
        </tr>`;

    }
}
request.send();