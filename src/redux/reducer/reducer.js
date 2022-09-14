const stateGame = {
    tongTien: 100,
    danhSachCuoc:[
        {ma: 'bau', hinhAnh: './bauCua/bau.PNG', diemCuoc: 0},
        {ma: 'cua', hinhAnh: './bauCua/cua.PNG', diemCuoc: 0},
        {ma: 'tom', hinhAnh: './bauCua/tom.PNG', diemCuoc: 0},
        {ma: 'ca', hinhAnh: './bauCua/ca.PNG', diemCuoc: 0},
        {ma: 'nai', hinhAnh: './bauCua/nai.PNG', diemCuoc: 0},
        {ma: 'ga', hinhAnh: './bauCua/ga.PNG', diemCuoc: 0},
    ],
    xucXac:[
        {ma: 'bau', hinhAnh: './bauCua/bau.PNG'},
        {ma: 'bau', hinhAnh: './bauCua/bau.PNG'},
        {ma: 'bau', hinhAnh: './bauCua/bau.PNG'},

    ]
}
const bauCuaTomCaReducer = (state = stateGame,action) => {
    switch (action.type) {
        case "":
            
            break;
    
        default:
            return {...state}
    }
}
export default bauCuaTomCaReducer