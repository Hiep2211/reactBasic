import React from "react";

class ChildComponent extends React.Component {
  render() {
    // let name = this.props.name
    // let age = this.props.age
    let { name, age, adress, arrJobs } = this.props;
    console.log(">>check props:", this.props);
    return (
      <>
        <div className="job-lists">
          {arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>

        {/* <div>
          Hello from component: {name} - {age} - {adress}
        </div> */}
      </>
    );
  }
}

export default ChildComponent;
