import React, { useEffect, useState } from "react";
import CardList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'
import './App.css'

function App()  {
    const [robots, setRobots] = useState([])
    const [searchfield, setsearchfield] = useState("")
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    //         return response.json();
    //     }).then(users => {
    //         this.setState({robots: users})
    //     })
        
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            setRobots(users)
            
        });
        
    }, [])

    const onSearchChange = (event)=> {
        setsearchfield( event.target.value)
           
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            
    })
    
    return !robots.length ?
    <h1 className="f1 tc">Loading</h1> :
    (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots= {filteredRobots} />
            </Scroll>
                    
        </div>
                
    )
        
        
        
    
}

export default App;