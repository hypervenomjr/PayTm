import {Link} from 'react-router-dom'

export function BelowWarning({label , ButtonText , to}){

    return <div className=' py-2  text-sm flex justify-center '>
        <div  className=' text-base pr-'>
            {label}
    </div>        
    <div>
            <Link className="  font-semibold pl-1 cursor-pointer  underline   text-base"  to={to}> {ButtonText}</Link>
        
        </div>    

    </div>

}