export function InputBox({label , placeHolder , onChange}){

    return <div>
        <div className="  text-left text-lg  font-semibold from-stone-800  pt-4  ">
            {label}
    </div>          
    <div>
        
        <input onChange={onChange} placeholder= {placeHolder} className=" w-full px-2 py-1 border rounded-lg border-slate-500" />
        
    </div>  

    </div>

}