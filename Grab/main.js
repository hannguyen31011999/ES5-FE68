function Grab(_type, _time, _distance) {
    this.type = _type;
    this.time = _time;
    this.distance = _distance;
    this.priceTime = [2000, 3000, 3500];
    this.priceDistance1 = [8000, 9000, 10000];
    this.priceDistance2 = [7500, 8500, 9500];
    this.priceDistance3 = [7000, 8000, 9000];
    this.tienChoDoi = function () {
        if (this.time > 3) {
            return parseFloat((this.time - 3) / 3) * this.priceTime[this.type];
        } else {
            return 0;
        }
    },
        this.tienXe = function () {
            if (this.distance < 2) {
                return parseFloat(this.distance * this.priceDistance1[this.type]);
            } else {
                if (this.distance > 19) {
                    return parseFloat(19 * this.priceDistance2[this.type]) + parseFloat((this.distance - 19) * this.priceDistance3[this.type]);
                } else {
                    return parseFloat(this.distance * this.priceDistance2[this.type]);
                }
            }
        }
    this.tongTien = function () {
        return this.tienXe() + this.tienChoDoi();
    }
}

function getValue(id) {
    return document.getElementById(id).value;
}

function inKQ(id, index, value) {
    document.getElementsByClassName(id)[index].innerHTML = value;
}



function hienThiTongTien() {
    var arr = document.getElementsByClassName('form-check-input');
    var type = Number;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            type = i;
        }
    }
    var distance = parseFloat(getValue('distance'));
    var time = parseFloat(getValue('time'));
    var grab = new Grab(type, time, distance);
    document.getElementById('totalPrice').value = grab.tongTien();
}

function inHoaDon() {
    var arr = document.getElementsByClassName('form-check-input');
    var type = Number;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            type = i;
        }
    }
    var distance = parseFloat(getValue('distance'));
    var time = parseFloat(getValue('time'));
    var grab = new Grab(type, time, distance);
    if (distance < 2) {
        inKQ('useDistance', 0, distance);
        inKQ('unitPrice', 0, grab.priceDistance1[type]);
        inKQ('totalPrice', 0, grab.priceDistance1[type] * distance);
        inKQ('useTime', 0, time);
        inKQ('unitPrice', 3, grab.priceTime[type]);
        inKQ('totalPrice', 3, grab.tienChoDoi());
        document.getElementById('total').innerHTML = grab.tongTien();
    } else {
        if (distance > 19) {
            inKQ('useDistance', 1, 19);
            inKQ('unitPrice', 1, grab.priceDistance2[type]);
            inKQ('totalPrice', 1, grab.priceDistance2[type] * 19);
            inKQ('useDistance', 2, distance - 19);
            inKQ('unitPrice', 2, grab.priceDistance3[type]);
            inKQ('totalPrice', 2, grab.priceDistance3[type] * (distance - 19));
            inKQ('useTime', 0, time);
            inKQ('unitPrice', 3, grab.priceTime[type]);
            inKQ('totalPrice', 3, grab.tienChoDoi());
            document.getElementById('total').innerHTML = grab.tongTien();
        } else {
            inKQ('useDistance', 1, distance);
            inKQ('unitPrice', 1, grab.priceDistance2[type]);
            inKQ('totalPrice', 1, grab.priceDistance2[type] * distance);
            inKQ('useTime', 0, time);
            inKQ('unitPrice', 3, grab.priceTime[type]);
            inKQ('totalPrice', 3, grab.tienChoDoi());
            document.getElementById('total').innerHTML = grab.tongTien();
        }
    }
}