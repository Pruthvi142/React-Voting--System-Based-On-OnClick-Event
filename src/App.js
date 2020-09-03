import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "JavaScript", votes: 0},
				{name: " Rubby", votes: 0},
				{name: "C++", votes: 0},
				{name: "Python", votes: 0}
			]
		}
	}

	handlevote =(i) =>{
    let newLanguages =this.state.languages;
    console.log(newLanguages)
		newLanguages[i].votes++;

		this.setState({languages: newLanguages});
		
	}

	render(){
		return(
			      <div className="container">
					  <div className="row">
					 
						  <div className="col-md-4"></div>
					 

				<div className="col-md-4">
				<h1>Vote Your Language!</h1>
			   
				   <div className="table">
					   <table>
						   <thead className="thead-dark">
							   <tr>
							   <th >Languages</th>
							   <th>Number of Votes</th>
							   <th >Action</th>
							   	</tr>
						   </thead>
						   <tbody>
							   {
								   this.state.languages.map((ele,i)=>{
									   return(
										     <tr>
												 <td>{ele.name}</td>
									             <td >{ele.votes}</td>
												 <td><button type="button" class="btn btn-primary" onClick={()=>{this.handlevote(i)}}>Vote</button></td>
											 </tr>
									   )
								   })
							   }
						   </tbody>
					   </table>
				   </div>
				   </div>
				   </div>
				   </div>
			
				
		
		);
	}
}
export default App;