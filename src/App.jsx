import React from "react";

// State 
// 1. 일종의 변수 = 문자형, 정수형, 논리형, 객체, 클래스, 펑션 등등을 저장 가능 
// 2. 해당 파일에서만 사용이 가능하다. (단, props로 전달은 가능하다.)
// 3. 값을 수정하려면, setState 함수를 사용해야 한다. (예외 없음)
// 4. state의 값이 변하면, 영향을 받고있는 component가 re-rendering 된다.

class App extends React.Component{

    //가장 먼저 실행되는 애
    //자바스크립트 에서 {} == 객체

    constructor(props) {
        super(props);

        this.state = {
            num: 0, 
        };
    };

    /////// HANDLER ///////
    
    _minusHandler = () => {
        //alert("-");

        this.setState((prevState) => {
            const nextValue = prevState.num - 1;

            return {
                num: nextValue,
            };
        });

    };

    _plusHandler = () => {
        //alert("+");

        this.setState((prevState) => {
            const nextValue = prevState.num + 1;

            return {
                num: nextValue,
            };
        });

    };

    // 5씩 증가하고, 5씩 감소하는 버튼을 만들어서
    // 작동 시키세요! 단, 기존의 버튼을 유지하세요.

    _5minusHandler = () => {
        //alert("-");

        this.setState((prevState) => {
            const nextValue = prevState.num - 5;

            return {
                num: nextValue,
            };
        });

    };

    _5plusHandler = () => {
        //alert("+");

        this.setState((prevState) => {
            const nextValue = prevState.num + 5;

            return {
                num: nextValue,
            };
        });

    };

    render() {
        return (
            <div>
                <p>{this.state.num}</p>

                <button onClick={() => this._plusHandler()}>+</button>
                <button onClick={() => this._minusHandler()}>-</button>
                <button onClick={() => this._5plusHandler()}>+5</button>
                <button onClick={() => this._5minusHandler()}>-5</button>
            </div>
        );
    };
};

export default App;