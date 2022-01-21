export default function A(props){
    function sum(){
        return parseInt(props.x) + parseInt(props.y)
        //parseInt in used to convert string to integer
    }
    return(
        <h2>{sum()}</h2>
    )
}