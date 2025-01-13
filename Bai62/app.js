//1. Xác định điểm dừng
//2.logic handle => Tạo ra điểm dừng

function countDown(num) {
    if(num > 0) {
        console.log(num);
        return countDown(num -1)
    }
    return num;
}

countDown(10);

