function Start(){
    const userName="Imran ali";
    let x=10;
    let y=30;
    return(
        <>
        <h1>{userName}</h1>
        <h1>{10+20+30}</h1>
        <h1>{x+y}</h1>
         <button onClick={()=>alert("hello")}>Click</button>        
        </>
    )
}
export default Start;