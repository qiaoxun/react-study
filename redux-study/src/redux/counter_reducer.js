
const initState = 0
export default function counterReducer(preState=initState, action) {
    const {type, data} = action
    console.log(type)
    console.log(data);

    switch(type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState + data
        default:
            return preState
    }
}