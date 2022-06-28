function dienTich(){
    let radi = +document.getElementById("radius").value
    let s = Math.PI * radi * radi;
document.getElementById("ketQua").value=s;

}
function chuVi(){
let chVi = +document.getElementById("radius").value
    let p = Math.PI * 2 * chVi;
document.getElementById("ketQua").value=p;
}
function reload(){
    window.location.reload()
}