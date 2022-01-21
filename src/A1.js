export default function A1(props){
    function ComputerGreatest(){
        //checks a/b/c whether which one is greater
        if(props.a > props.b && props.a > props.c){
            return props.a
        }
        else if(props.b > props.c){
            return props.b
        }
        else{
            return props.c
        }
    }
    return(
        <h2>{ComputerGreatest()} is greater!</h2>
    )
}