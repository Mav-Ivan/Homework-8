
// task 1 

// function upperCase (str){

//     let reg = /^[A-Z]/
//     if(reg.test(str)){
//         console.log("String's starts with uppercase character")
//     }else 
//         console.log("String's not starts with uppercase character");

// }
// let str = 'Regexp'
// upperCase(str)

// task 2

// function checkEmail (str) {
//     let reg = /^[A-Za-z0-9]+@[a-z].+[a-z]$/
//     console.log(reg.test(str))

// }

// checkEmail('Qmail2@gmail.com')

// task 3 

// let reg = /d(b+)(d)/i 
// str = 'cdbBdbsbz'
// let arr = reg.exec(str)

// console.log(arr)


// task 4 

// let reg = / /
// let str =  "Java Script"
// let res = str.split(reg)
// console.log(res.reverse().join(' '))

// task 5 

// let reg = /[0-9]{4}-[0-9]{4}-[0-9]{4}/
// let str = '9999-9999-9999-9999'
// console.log(reg.test(str));

// task 6 

// function checkEmail(str) {
//     let reg = /^[A-Za-z0-9_-{1}]+@[a-z].+[a-z]$/
//     if(reg.test(str)){
//         console.log("Email is correct!");
//     }else 
//         console.log("Email is not correct!");
// }
// checkEmail('my_mail@gmail.com')


// task 7 

function checkLogin (str) {
    let reg = /^[a-z}{1}[a-z0-9\.]{2,10}$/ 
    console.log(reg.test(str))
    let reNum = /[0-9\.]+/g
    let res = str.match(reNum)
    console.log('Numbers : ' + res);
}
checkLogin('ee1.1rets4')