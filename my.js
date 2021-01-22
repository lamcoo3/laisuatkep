let money = prompt('Nhập số tiền muốn gửi: ');
let year = prompt('Nhập số năm muốn gửi: ');
let interest = prompt('Nhập lãi suất: ');
goclai = money * Math.pow(1 + (interest/12), 12 * year)
laikep = goclai - money;
document.write('Lãi kép sau' + year + 'năm là: ', +laikep);
document.write('Số tiền có được sau' + year + 'năm là: ', +goclai);