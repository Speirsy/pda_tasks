import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })
// ---------------------------------------------------------
  it('should add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const add = container.find('#operator_add');
    const button4 = container.find('#number4');
    const equals = container.find('#operator-equals');
    button1.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');

  })
// --------------------------------------------------------
  it('should subtract 4 from 7 and get 3', () => {
    const button4 = container.find('#number4');
    const subtract = container.find('#operator-subtract');
    const button7 = container.find('#number7');
    const equals = container.find('#operator-equals');
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');


  })
//   //----------------------------------------------------
  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const multiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const equals = container.find('#operator-equals');
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  }) 

//   // ---------------------------------------------------
  it('should divide 21 by 7 and get 3', () => {
  const button2 = container.find('#number2');
  const button1 = container.find('#number1');
  const divide = container.find('#operator-divide');
  const button7 = container.find('#number7');
  const equals = container.find('#operator-equals');
  button2.simulate('click');
  button1.simulate('click');
  divide.simulate('click');
  button7.simulate('click');
  equals.simulate('click');
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('3');

  })
//   // -------------------------------------------------
  it('should concatenate multiple number button clicks', () => {
  const button2 = container.find('#number2');
  const button1 = container.find('#number1');
  const button7 = container.find('#number7');
  const equals = container.find('#operator-equals');
  button2.simulate('click');
  button1.simulate('click');
  button7.simulate('click');
  button1.simulate('click');
  // equals.simulate('click');
  const runningTotal = container.find('#running-total');
  expect(runningTotal.text()).toEqual('2171');

  })
//   // -------------------------------------------------
  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const subtract = container.find('#operator-subtract');
    const multiply = container.find('#operator-multiply');
    const add = container.find('#operator_add');

    const equals = container.find('#operator-equals');
    button2.simulate('click');
    subtract.simulate('click');
    button1.simulate('click');
    add.simulate('click');
    button7.simulate('click');
    multiply.simulate('click');
    button2.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('16');

  })




})

