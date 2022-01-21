export default function M1(props){
    function printUpperCase(){
        //gets data and change to uppercase
        return props.data.toUpperCase()
    }
    return(
        <h2>{printUpperCase()}</h2>
    )
}