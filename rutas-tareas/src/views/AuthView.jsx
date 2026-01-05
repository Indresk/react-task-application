import { Outlet, NavLink } from "react-router-dom";
import Button from '../components/Button'

export default function AuthView(){
    return(
        <>  
            <title>Auth - My Store</title>
            <meta name="description" content={`Details about Auth`} />
            <h1>AuthView</h1>
            <Outlet/>
            <div className="flex gap-2 w-1/2 lg:w-2/3 m-auto">
                <NavLink to={'login'} className={'w-full'}>{({isActive})=><Button active={isActive}>Login</Button>}</NavLink>
                <NavLink to={'registro'} className={'w-full'}>{({isActive})=><Button active={isActive}>Registro</Button>}</NavLink>
            </div>
        </>
    )
}