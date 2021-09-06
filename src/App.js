import React from 'react';
import Upcal from './Upcal';
import Calci from './Calci';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            language:[]
        }
    }
    handleLanguage = (langValue) => {
        this.setState({ language: langValue});
    }
    render(){
        return (
            <>
                <Upcal/>
                <Calci onSelectLanguage={this.handleLanguage}
                pass={this.state.language}/>
            </>
        )
    }
}

export default App
