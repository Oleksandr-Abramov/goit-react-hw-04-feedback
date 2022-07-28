import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerFeedback = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGood(ps => ps + 1);
        break;
      case 'neutral':
        setNeutral(ps => ps + 1);
        break;
      case 'bad':
        setBad(ps => ps + 1);
        break;
      default:
        return;
    }
  };

  const stateKeys = ['good', 'neutral', 'bad'];
  const total = () => good + neutral + bad;
  const positiveFeedback = () => Math.round((good * 100) / total());

  return (
    <div style={{ padding: '30px' }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handlerFeedback={handlerFeedback}
          options={stateKeys}
        />
      </Section>
      {total() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positiveFeedback={positiveFeedback()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

// export class App extends Component {
//   state = { good: 0, neutral: 0, bad: 0 };

//   handlerFeedback = evt => {
//     const { name } = evt.target;
//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 };
//     });
//   };

//   render() {
//     const { good } = this.state;
//     const { neutral } = this.state;
//     const { bad } = this.state;
//     const stateKeys = Object.keys(this.state);
//     const total = good + neutral + bad;
//     const positiveFeedback = Math.round((good * 100) / total);

//     return (
//       <div style={{ padding: '30px' }}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             handlerFeedback={this.handlerFeedback}
//             options={stateKeys}
//           />
//         </Section>
//         {total ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positiveFeedback={positiveFeedback}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }
