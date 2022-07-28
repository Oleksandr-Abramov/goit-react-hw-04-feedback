import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handlerFeedback = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const stateKeys = Object.keys(this.state);
    const total = good + neutral + bad;
    const positiveFeedback = Math.round((good * 100) / total);

    return (
      <div style={{ padding: '30px' }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handlerFeedback={this.handlerFeedback}
            options={stateKeys}
          />
        </Section>
        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
