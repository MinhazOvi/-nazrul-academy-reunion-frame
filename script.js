const canvas=document.getElementById('card'),ctx=canvas.getContext('2d');
const photoInput=document.getElementById('photo'),nameInput=document.getElementById('personName'),batchInput=document.getElementById('batch');
const school=new Image(),logo=new Image();let portrait=null;
school.src='assets/school.jpg';logo.src='assets/logo.jpg';
function cover(img,x,y,w,h){const r=Math.max(w/img.width,h/img.height),sw=w/r,sh=h/r;ctx.drawImage(img,(img.width-sw)/2,(img.height-sh)/2,sw,sh,x,y,w,h)}
function roundRect(x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=4;ctx.stroke()}}
function text(s,x,y,size,color='#123b2c',weight=700,align='center',maxWidth=1100){ctx.font=`${weight} ${size}px "Hind Siliguri", "Noto Sans Bengali", sans-serif`;ctx.textAlign=align;ctx.fillStyle=color;ctx.fillText(s,x,y,maxWidth)}
function draw(){ctx.clearRect(0,0,1200,1200);if(school.complete&&school.naturalWidth)cover(school,0,0,1200,1200);else{ctx.fillStyle='#9ec8b0';ctx.fillRect(0,0,1200,1200)}
let fade=ctx.createLinearGradient(0,620,0,1200);fade.addColorStop(0,'#ffffff00');fade.addColorStop(.4,'#ffffffdd');fade.addColorStop(1,'#ffffff');ctx.fillStyle=fade;ctx.fillRect(0,600,1200,600);
// Blank circular portrait area with plain green border.
ctx.beginPath();ctx.arc(600,440,242,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();ctx.save();ctx.clip();if(portrait)cover(portrait,358,198,484,484);ctx.restore();ctx.beginPath();ctx.arc(600,440,242,0,Math.PI*2);ctx.lineWidth=9;ctx.strokeStyle='#075537';ctx.stroke();
roundRect(230,710,740,72,17,'#fff','#0c573b');text('নাম:',262,760,34,'#123b2c',700,'left');text(nameInput.value.trim()||'..................................................',380,760,33,'#152a20',700,'left',555);
roundRect(230,796,740,72,17,'#fff','#0c573b');text('ব্যাচ:',262,847,34,'#123b2c',700,'left');text(batchInput.value.trim()||'..........................',385,847,33,'#152a20',700,'left',550);
roundRect(415,886,370,64,30,'#075537');text('প্রাক্তন শিক্ষার্থী',600,932,38,'#fff');
text('শেকড়ের টানে, স্মৃতির বন্ধনে, আবারও একসাথে।',600,1005,34,'#08452f');
if(logo.complete&&logo.naturalWidth){ctx.save();ctx.beginPath();ctx.arc(150,1100,82,0,Math.PI*2);ctx.clip();cover(logo,68,1018,164,164);ctx.restore()}
roundRect(267,1034,760,65,24,'#102f82');text('নজরুল একাডেমি',647,1083,54,'#fff');text('পিপুলিয়া বাজার, সদর দক্ষিণ, কুমিল্লা',647,1126,25,'#123b2c');roundRect(380,1140,534,57,24,'#d81825');text('রিইউনিয়ন ২০২৬',647,1182,40,'#fff');}
function update(){document.fonts.ready.then(draw)}school.onload=update;logo.onload=update;nameInput.addEventListener('input',update);batchInput.addEventListener('input',update);photoInput.addEventListener('change',()=>{const f=photoInput.files?.[0];if(!f)return;const u=URL.createObjectURL(f),img=new Image();img.onload=()=>{portrait=img;URL.revokeObjectURL(u);update()};img.src=u});document.getElementById('download').addEventListener('click',()=>{draw();const a=document.createElement('a');a.download='Nazrul-Academy-Reunion-2026.png';a.href=canvas.toDataURL('image/png');a.click()});update();
