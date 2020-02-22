const models = require('./models'); 

// function createAccelerator(data) { 
//     return models.Accelerometer.create({
//         time: body[1],
//         x: body[10],
//         y: body[11],
//         z: body[12],
//     });
// }

function test(msg) {
    i = 0;
    while(i < 96) {
        console.log(((msg[i] ) | (msg[i + 1] << 8) | (msg[i + 2] << 16) | (msg[i + 3] << 24)))
        i+=4;
    }
}
// console.log(`1     :  ${((msg[0] ) | (msg[1] << 8) | (msg[2] << 16) | (msg[3] << 24))}`)
// console.log(`2     :  ${((msg[4] ) | (msg[5] << 8) | (msg[6] << 16) | (msg[7] << 24))}`)
// console.log(`123   :  ${((msg[8] ) | (msg[9] << 8) | (msg[10] << 16) | (msg[11] << 24))}`)
// console.log(`321   :  ${((msg[12] ) | (msg[13] << 8) | (msg[14] << 16) | (msg[15] << 24))}`) // 65
// console.log(`222   :  ${((msg[16] ) | (msg[17] << 8) | (msg[18] << 16) | (msg[19] << 24))}`)
// console.log(`126   :  ${((msg[20] ) | (msg[21] << 8) | (msg[22] << 16) | (msg[23] << 24))}`)
// console.log(`432   :  ${((msg[24] ) | (msg[25] << 8) | (msg[26] << 16) | (msg[27] << 24))}`) // 176
// console.log(`232   :  ${((msg[28] ) | (msg[29] << 8) | (msg[30] << 16) | (msg[31] << 24))}`)
// console.log(`22    :  ${((msg[32] ) | (msg[33] << 8) | (msg[34] << 16) | (msg[35] << 24))}`)
// console.log(`223   :  ${((msg[36] ) | (msg[37] << 8) | (msg[38] << 16) | (msg[39] << 24))}`)
// console.log(`565   :  ${((msg[40] ) | (msg[41] << 8) | (msg[42] << 16) | (msg[43] << 24))}`) // 53
// console.log(`455   :  ${((msg[44] ) | (msg[45] << 8) | (msg[46] << 16) | (msg[47] << 24))}`) // 199 
// console.log(`654   :  ${((msg[48] ) | (msg[49] << 8) | (msg[50] << 16) | (msg[51] << 24))}`) // 142
// console.log(`78    :  ${((msg[52] ) | (msg[53] << 8) | (msg[54] << 16) | (msg[55] << 24))}`)
// console.log(`87    :  ${((msg[56] ) | (msg[57] << 8) | (msg[58] << 16) | (msg[59] << 24))}`)
// console.log(`34    :  ${((msg[60] ) | (msg[61] << 8) | (msg[62] << 16) | (msg[63] << 24))}`) 
// console.log(`3     :  ${((msg[64] ) | (msg[65] << 8) | (msg[66] << 16) | (msg[67] << 24))}`)
// console.log(`5     :  ${((msg[68] ) | (msg[69] << 8) | (msg[70] << 16) | (msg[71] << 24))}`)
// console.log(`123   :  ${((msg[72] ) | (msg[73] << 8) | (msg[74] << 16) | (msg[75] << 24))}`)
// console.log(`45355 :  ${((msg[76] ) | (msg[77] << 8) | (msg[78] << 16) | (msg[79] << 24))}`) // 43
// console.log(`3454  :  ${((msg[80] ) | (msg[81] << 8) | (msg[82] << 16) | (msg[83] << 24))}`) // 126
// console.log(`32423 :  ${((msg[84] ) | (msg[85] << 8) | (msg[86] << 16) | (msg[87] << 24))}`) // 167
// console.log(`43424 :  ${((msg[88] ) | (msg[89] << 8) | (msg[90] << 16) | (msg[91] << 24))}`) // 160
// console.log(`324   :  ${((msg[92] ) | (msg[93] << 8) | (msg[94] << 16) | (msg[95] << 24))}`) // 68



module.exports = {
    test,
};