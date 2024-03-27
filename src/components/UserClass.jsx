import react from "react";
// Whenever a class component is mounted on dom or is being invoked that means you are creating an instance of that class component and whenever the instance of a class is created , its constructor is invoked and there is the place where you can write your state variables. Unlike functional components , the class components have this one big object this.state for all the state variables .
class UserClass extends react.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constructor of child is called");
    this.state = {
      email: "shivani78076@gmail.com",
      exp : 2,
      userInfo:{
        name:"",
        location:"",
        avatar_url:"dummy",
        login : "dummy",
        url :"dummy"
        
      }
    };
  }

  async componentDidMount() {
    
    const data = await fetch("https://api.github.com/users/shivaniii2");
    const json = await data.json();
    // have to update this info in the local state variable to use it 
    
    this.setState({
      ...this.state,
      userInfo: json
    })
    
    console.log(this.props.name + "componentDidMount of child is called ");
    // Refer to classComponent.txt for details.
  }
  
  componentDidUpdate(){
    console.log("component Did update");
  }
  
  componentWillUnmount(){
    console.log("component unmounted ");
  }

  render() {
    console.log( this.props.name + "render of child id called");
    const { exp, email } = this.state;
    const {avatar_url,login,url,name,location} = this.state.userInfo;
    return (
      <div className="p-4">
        <img src = {avatar_url}></img>
        <h2 className="text-lg font-bold">experience: {exp + " yrs"}</h2>
        <button className="border border-solid border-gray-800 bg-slate-500 text-red-200"
          onClick={() => {
            this.setState({ exp: this.state.exp + 1 });
          }}
        >
          Increase Experience{" "}
        </button>

        {/*         
       this.setState: It's a global method used in class components to update the component's state. When you call this.setState, React merges the object you provide into the current state. The component then re-renders with the updated state.
       
       It takes updated state object as an argument .
        */}

        <h2 className="text-lg font-bold">email : {email}</h2>
        <h2 className="text-lg font-bold" >Name :{name}</h2>
        <h2 className="text-lg font-bold"> Location : {location}</h2>
        <h2 className="text-lg font-bold" > Contact : 8219040840</h2>
        <h2 className="text-lg font-bold"> user name : {login}</h2>
        <h2 className="text-lg font-bold"> url : {url}</h2>
      </div>
    );
  }
}
export default UserClass;






