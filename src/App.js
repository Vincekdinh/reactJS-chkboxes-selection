import "./styles.css";
import React from "react";
import Checkbox from "./Checkbox";

const header = "Selected Value";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [
        { id: 2, value: "Kosher", isChecked: false },
        { id: 3, value: "No Celery", isChecked: false },
        { id: 4, value: "No Egg", isChecked: false }
      ],
    };
    this.myRef = React.createRef();
  }

  handleAllCheckboxes = (e) => {
    console.log("handleAllCheckboxes(e):", e);
    let choices = this.state.choices;
    let isCheckedAll = e.target.checked;
    choices.forEach((choice)=>{
        choice.isChecked = isCheckedAll;
        console.log(choice.value, choice);
    })
    this.setState({choices:choices})
    console.log("setState frm allChk:", choices)
    };

  handleCheckboxChange = (e) => {
   console.log("handleCheckboxChange(e):", e);
   let choices = this.state.choices
   choices.forEach(choice => {
    if(choice.value === e.target.value){
      choice.isChecked = e.target.checked
      console.log(`${choice.value}: ` + choice.isChecked);
    }
  })
   this.setState({choices: choices})
   console.log("setState frm chkBtn:", choices);
  }

  handleButtonClear = (e) => {
    console.log("handleButtonClear(e):", e)
    const node = this.myRef.current
    let choices = this.state.choices
    choices.forEach(choice => {
      choice.isChecked = false
      node.checked = false
    })
    this.setState({choices:choices})
    console.log("setState frm clearBtn:", choices);
  }
  
  render() {
    return (
      <section className="app-container">
        <header>
        <h2>{header}: {this.state.choices.filter(choice => choice.isChecked).map(choice => choice.value).join(", ")}</h2>
        </header>
        <div className='food-container'>
          <div className='flexbox'>
            <input
              ref={this.myRef}
              id="1"
              type="checkbox"
              onChange={this.handleAllCheckboxes}
              value="checkedall"
              defaultChecked={false}
            />
            <label>Select All</label>
          </div>
          {this.state.choices.map((choice) => {
            return (
              <div className='flexbox' key={choice.id}>
                <Checkbox
                  onChange={this.handleCheckboxChange}
                  {...choice}
                />
              </div>
            );
          })}
          <hr/>
          <button onClick={this.handleButtonClear}>Clear All</button>
        </div>
      </section>
    );
  }
}

export default App;
