import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Dashboard from './components/Dashboard.vue'

export default[
    {path:'/', component: Login},
    {path:'/signup', component: Signup},
    {path: '/dashboard', component: Dashboard},
]