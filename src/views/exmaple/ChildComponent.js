import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowHide() {
    this.setState({
      showJob: !this.state.showJob,
    });
  }
  render() {
    let { arrJobs } = this.props;
    let { showJob } = this.state;
    return (
      <>
        {showJob === false ? (
          <>
            <div>
              <button onClick={() => this.handleShowHide()}>Show</button>
            </div>
          </>
        ) : (
          <>
            <div className="job-titles">
              {arrJobs.map((item, index) => {
                if (item.salary >= 500) {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}$
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
