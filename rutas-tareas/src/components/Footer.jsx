import { NavLink } from 'react-router-dom'
import Button from './Button'
export default function Footer(){
    return(
        <footer className='flex justify-between p-2 border-t-2 border-red-700 items-center'>
            <div>LOGO</div>
            <div>
                <ul className='flex gap-2 list-none'>
                    <li><NavLink to={'/'} className={({isActive})=>isActive?"text-red-500":"text-black"}>Home</NavLink></li>
                    <li><NavLink to={'task'} className={({isActive})=>isActive?"text-red-500":"text-black"}>Task</NavLink></li>
                </ul>
            </div>
            <NavLink to={'auth/login'}>
            {({isActive})=><Button active={isActive}>Login</Button>}
            </NavLink>
        </footer>
    )
}