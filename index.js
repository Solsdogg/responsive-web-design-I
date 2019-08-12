// alert("hello")
const docWidth = document.documentElement.offsetWidth;
console.log (docWidth);
[1,2].forEach.call(document.querySelectorAll('*'), (el) => {
 if (el.offsetWidth > docWidth) {
   console.log(el);
 }
});