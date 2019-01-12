import { Component } from '@angular/core';
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();  // set up
  });

  afterEach(() => {
    // tear down
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
