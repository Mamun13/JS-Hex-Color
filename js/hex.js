const color =['red','blue','orange','green'];
const btn =document.getElementById('btn');

btn.addEventListener('click',function(){
    // alert('wrongg');
    // console.log(Math.floor(Math.random()*color.length));
    let changeColor = color[Math.floor(Math.random()*color.length)];
    console.log(changeColor);
    document.body.style.background = changeColor;
});



// const body = document.queryselector('body'); 
// const button = document.queryselector('button'); 
// const colors =['Red','DarkRed','Gold','Fuchsia','Indigo','Green',
//                 'DarkGreen','Blue','DeepSkyBlue'];

// body.style.backgroundcolor='Red';

// button.addEventListener('click', function(){
//     alart('Something is wrong')
//     // const colorIndex=parseInt(Math.random()*colors.length);
//     // body.style.backgroundcolor = colors[colorIndex];
// })  