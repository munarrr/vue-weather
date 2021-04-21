   const btn = document.querySelector('#btn'),
    out = document.querySelector('#out'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    range = document.querySelector('#range'),
        doal = document.querySelector('#doal'),
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 500;
    kg = 5,
    kub = 100,
    km = 2;
 // range slider
    range.onchange = function(){
      const rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
    }
  // Basic function  
      btn.onclick = function(){
        
        if (weight.value != '' && vol.value != '') {
            if (load.checked){ 
                load.value = 100; }
              else 
              {
                load.value = 0;
            }
            if (del.checked){ 
                del.value = 100; }
              else 
              {
                del.value = 0;
            }
             if (doal.checked) {
                  doal.value = 100;
             }
             else {
                  doal.value = 0;
             }
            if (frag.checked){ 
                frag.value = 100; }
              else 
              {
                frag.value = 0;
            }
          
             const sum = (weight.value * kg) + (vol.value * kub) + Number(load.value)  + Number(del.value) + Number(frag.value) + Number(doal.value) + (range.value * km);
if (isNaN(sum)) {
      alert('Введите числовое значение');
    }else{
      out.innerHTML = sum;
      }
  
        }else{
      alert('Введите вес и объем груза');
    }
     
    }
