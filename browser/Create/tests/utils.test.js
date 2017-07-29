import { expect } from 'chai';
import { deleteNodeAtPath, addSubinput, findQuestionAndUpdate } from '../utils';

describe('Utilities', () => {
  describe('deleteNodeAtPath', () => {
    let state;
    beforeEach('setinitialstate',() =>{
      state = {questions:[{key:'hey',questions:[{key:'test'},{key:'testTwo'}]}]}
    });
    it('returns an array', () => {
      expect(deleteNodeAtPath(state,['hey'])).to.be.a('array');
    });
    it('deletes the correct question', () => {
      let expectedResult = [{key:'hey',questions:[{key:'testTwo'}]}]
      expect(deleteNodeAtPath(state,['hey','test'])).to.deep.equal(expectedResult);
    });
  });
  describe('addSubinput', () => {
    let state;
    beforeEach('setinitialstate',() =>{
      state = {questions:[{key:1,questions:[{key:2},{key:3}]}]}
    });
    it('returns an array', () => {
      expect(addSubinput(state,['hey'],4)).to.be.a('array');
    });
    it('adds the correct new question object at the passed in location', () => {
      let expectedResult = [{key:1,questions:[{key:2,questions:[{question: '', type: '', comparator: '', comparatorValue: '', key: 4 }]},{key:3}]}]
      expect(addSubinput(state,[1,2], 4)).to.deep.equal(expectedResult);
    });
  });
  describe('findQuestionAndUpdate', () => {
    let state;
    beforeEach('setinitialstate',() =>{
      state = {questions: [{key:1,questions:[{key:2, questions:[{question: '', type: '', comparator: '', comparatorValue: '', key: 4 }]},{key:3}]}]}
    });
    it('returns an array', () => {
      expect (findQuestionAndUpdate(state,'why?','question', [1,2])).to.be.a('array');
    });
    it('updates the correct nested property', () => {
      let expectedResult = [{key:1,questions:[{key:2, questions:[{question: 'why?', type: '', comparator: '', comparatorValue: '', key: 4 }]},{key:3}]}]
      expect (findQuestionAndUpdate(state,'why?','question', [1,2,4])).to.deep.equal(expectedResult);
    });
  });
});