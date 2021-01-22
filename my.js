let money = prompt('Nhập số tiền muốn gửi: ');
let year = prompt('Nhập số năm muốn gửi: ');
let interest = prompt('Nhập lãi suất: ');
gocvalai = money * Math.pow(1 + (interest/12), 12 * year)
laikep = gocvalai - money;
document.write('Lãi kép sau' + year + 'năm là: ', +laikep);
document.write('Số tiền có được sau' + year + 'năm là: ', +gocvalai);