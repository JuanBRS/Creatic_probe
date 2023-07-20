import React from 'react'
// @ts-ignore
import { Switch, Route, Redirect  } from 'react-router-dom';
import { AboutScreen} from '../components/About/AboutScreen'
import { ContactScreen} from '../components/Contact/ContactScreen'
import { RegisterScreen} from '../components/Register/RegisterScreen'
import { HomeScreen} from '../components/home/HomeScreen'
import { Navbar } from '../components/Navbar/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
         <Navbar />
         <div className="">
             <Switch>
                <Route exact path='/about' component={ AboutScreen } />
                <Route exact path='/contact' component={ ContactScreen } />
                <Route exact path='/register' component={ RegisterScreen } />
                <Route exact path='/home' component={ HomeScreen } />

                <Redirect to='/home' />
             </Switch>
         </div>
        </>
    )
}