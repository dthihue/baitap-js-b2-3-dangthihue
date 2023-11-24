/* bài1:
mô hình 3 khối:
Khối1:
input: tiền lương 1 ngày 100.000 : number
      - số ngày làm: number

Khối 2:
Khối 3:

*/

function Tinhtongluong() {
  var tienluong1ngay = document.getElementById("luong1ngay").value;
  var songaylam = document.getElementById("songaylam").value;
  //kiểm tra
  console.log("tiền lương 1 ngày", tienluong1ngay);
  console.log("số ngày làm", songaylam);
  var tongluong = 0;
  tongluong = tienluong1ngay * songaylam;
  document.getElementById("tongluong").innerHTML = tongluong;
}



// *bài 2
/*
mô hình 3 khối:
input:
-nhập 5 giá trị
-tính toán
output: 
tính giá trị trung bình và xuất ra màn hình  
*/
function Nhaplieu() {
  var so1 = Number (document.getElementById("number1").value);
  var so2 = Number (document.getElementById("number2").value);
  var so3 = Number (document.getElementById("number3").value);
  var so4 = Number (document.getElementById("number4").value);
  var so5 = Number (document.getElementById("number5").value);
  var Giatri = 5;

  console.log("so1", so1);
  console.log("so2", so2);
  console.log("so3", so3);
  console.log("so4", so4);
  console.log("so5", so5);
  console.log("giá trị", Giatri);

  var Tong = ((so1) + (so2) + (so3) + (so4) + (so5)) / 5;
  console.log("tong", Tong);
  document.getElementById("Trungbinh").innerHTML = Tong;
}

// --bài 3--//
function trans() {
  var usd = document.getElementById("usd").value;
  var vnd = document.getElementById("vnd").value;
  console.log("usd", usd);
  console.log("vnd", vnd);
  var tongchuyendoi = usd * vnd;
  console.log("tongchuyendoi", tongchuyendoi);
  document.getElementById("Xuat").innerHTML = tongchuyendoi;
}

// bài 4 //

function HCN() {
  var dai = Number (document.getElementById("dai").value);
  var rong = Number (document.getElementById("rong").value);
  console.log("dai", dai);
  console.log("rong", rong);
  var dientich = dai * rong;
  var chuvi = (dai + rong)*2;
  console.log("dientich", dientich);
  console.log("chuvi", chuvi);
  document.getElementById("tongDT").innerHTML = dientich;
  document.getElementById("tongCV").innerHTML = chuvi;
}

// ----bài 5----

function Tongkiso() {
  var socohaichuso = document.getElementById("so2chuso").value;
  
  var hangchuc = Math.floor((socohaichuso) / 10);
  var hangdonvi = Math.floor((socohaichuso) % 10);

  var tongkyso = hangchuc + hangdonvi;
  console.log("tongkyso", tongkyso);

  document.getElementById('tongKS').innerHTML = tongkyso;

}
