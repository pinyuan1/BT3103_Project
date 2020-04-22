import Home from './components/Home.vue' 
import AddItem from './components/AddItem.vue' //same name as the create new task file
import Dashboard from './components/Dashboard.vue' //Same name as the dashboard file
import Task from './components/Task.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

export default [
    {path: '/', component: Login},
    {path: '/add', component: AddItem}, //change here
    {path: '/dashboard', component: Dashboard}, //change here
    {path: '/task/:id', component:Task},
    {path: '/home', component: Home},
    {path: '/signup', component: Signup}
]