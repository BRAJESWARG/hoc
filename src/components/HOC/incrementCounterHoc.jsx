import React, { useState } from "react";

const IncrementCounterHoc = (Comp) => {
  // class AddedCounterFunc extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counter: 0
  //     };
  //   }
  //   handleChange = () => {
  //     this.setState({
  //       counter: this.state.counter + 1
  //     });
  //   };

  //   render() {
  //     return <comp name="Brajeswar" />;
  //   }
  // }

  //Functional Component

  const AddedCounterFunc = () => {
    const [counter, setCounter] = useState(0);
    return (
      <Comp
        name="Brajeswar"
        counter={counter}
        handleChange={() => setCounter(counter + 1)}
      />
    );
  };

  return AddedCounterFunc;
};

export default IncrementCounterHoc;
