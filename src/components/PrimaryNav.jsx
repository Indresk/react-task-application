import { NavLink } from 'react-router-dom'
import Button from './Button'
export default function PrimaryNav(){
    return(
        <div className='flex justify-between p-2 border-b-2 border-red-700 items-center'>
            <div>LOGO</div>
            <nav>
                <ul className='flex gap-2 list-none'>
                    <li><NavLink to={'/'} className={({isActive})=>isActive?"text-red-500":"text-black"}>Home</NavLink></li>
                    <li><NavLink to={'task'} className={({isActive})=>isActive?"text-red-500":"text-black"}>Task</NavLink></li>
                </ul>
            </nav>
            <NavLink to={'auth/login'}>
            {({isActive})=><Button active={isActive}>Login</Button>}
            </NavLink>
        </div>
    )
}