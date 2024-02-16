var a = document.getElementsByClassName("col1");
a.style.display = "none";
i = 0;
function fun() {
  for (i = 0; i > a.length; i++) {
    console.log(i);
  }
  al = a.length;
  al.style.display = "block";
  console.log(al);
}
