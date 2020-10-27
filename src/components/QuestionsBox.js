import React from 'react'


class QuestionBox extends React.Component {

    state = {
        'answer':[]
    }

    componentDidMount(){
        this.setState({answer:this.props.options})
    }
    render(){
         return(
        <div key={this.props.id}>
            <div >{this.props.question}</div>
            {   
                this.state.answer.map((option) => (
                <button 
                onClick={()=>{
                    this.setState({answer:[option]})
                    this.props.selected(option)
                    }}>
                    {option}</button>))
            }
                
        </div>
    )
    }
   
}

export default QuestionBox