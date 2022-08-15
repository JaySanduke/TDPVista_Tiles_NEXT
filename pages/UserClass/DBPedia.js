import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Ques:</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Topic:</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Rollno.:</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class DBPedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    const endpoint = encodeURI('https://dbpedia.org');
    const query = encodeURI(`
    select * where {
    ?x rdfs:label"${search}"@en.
    ?x rdfs:comment ?comment.
    FILTER (lang(?comment) = 'en')
    } LIMIT 100
  `);

    const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=%0A++++++select+*+where+%7B%0A++++++%3Fx+rdfs%3Alabel+%22${search}%22%40en+.%0A++++++%3Fx+rdfs%3Acomment+%3Fcomment+.%0A++++++FILTER+(lang(%3Fcomment)+%3D+%27en%27)%0A++++++%7D+LIMIT+100%0A++++&format=json`;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);

    function readyStateChange() {
      if (this.readyState === 4) {
        const data = JSON.parse(this.responseText);
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          self.setState({ loading: false, result: bindings[0].comment.value });
        } else {
          self.setState({ loading: false, result: 'Not found.' });
        }
      }
    }

    xhr.open('GET', queryUrl);
    xhr.send();
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div className="dbpedia">
        {loading ? <Loading /> : result}
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            {
              !trigger &&
              <button
                onClick={() => this.triggetNext()}
              >
                Search Again
              </button>
            }
          </div>
        }
      </div>
    );
  }
}

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

const ExampleDBPedia = () => (
  <ChatBot
    steps={[
      {
        id: '1',
        message: 'Hii, I am a bot!!. How can I help you??',
        trigger: '2',
      },
      {
        id: '2',
        message: 'Select one option',
        trigger: '3',
      },
      {
        id: '3',
        options: [
          { value: 1, label: 'Search', trigger: '5' },
          { value: 2, label: 'Ask to Mentor', trigger: '15' },
          { value: 3, label: 'Number 3', trigger: '4' },
        ],
      },
      {
        id: '4',
        message: 'Wrong option, try again.',
        trigger: '2',
      },
      {
        id: '5',
        message: 'Search by keyword. Ex-: (HTML,CSS)',
        trigger: 'search',
      },
      {
        id: 'search',
        user: true,
        trigger: '6',
      },
      {
        id: '6',
        component: <DBPedia />,
        waitAction: true,
        trigger: '5',
      },

      {
        id: '15',
        message: 'Okay!!',
        trigger: '7',
      },
      {
        id: '7',
        message: 'Type your question?',
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: '9',
      },
      {
        id: '9',
        message: 'Have you studied this topic before??',
        trigger: 'gender',
      },
      {
        id: 'gender',
        options: [
          { value: 'yes', label: 'Yes', trigger: '11' },
          { value: 'no', label: 'No', trigger: '16' },
        ],
      },
      {
        id: '16',
        message: 'Padhke aa phle *****',
        trigger: 'Back-to-options',
      },
      {
        id: '11',
        message: 'What is your rollno.?',
        trigger: 'age',
      },
      {
        id: 'age',
        user: true,
        trigger: '13',
        validator: (value) => {
          if (isNaN(value)) {
            return 'value must be a number';
          } else if (value < 0) {
            return 'value must be positive';
          } else if (value > 120) {
            return `${value}? Come on!`;
          }

          return true;
        },
      },
      {
        id: '13',
        message: 'Great! Check out your summary',
        trigger: 'review',
      },
      {
        id: 'review',
        component: <Review />,
        asMessage: true,
        trigger: 'update',
      },
      {
        id: 'update',
        message: 'Would you like to update some field?',
        trigger: 'update-question',
      },
      {
        id: 'update-question',
        options: [
          { value: 'yes', label: 'Yes', trigger: 'update-yes' },
          { value: 'no', label: 'No', trigger: 'end-message' },
        ],
      },
      {
        id: 'update-yes',
        message: 'What field would you like to update?',
        trigger: 'update-fields',
      },
      {
        id: 'update-fields',
        options: [
          { value: 'name', label: 'Question', trigger: 'update-name' },
          { value: 'gender', label: 'Topic', trigger: 'update-gender' },
          { value: 'age', label: 'Rollno.', trigger: 'update-age' },
        ],
      },
      {
        id: 'update-name',
        update: 'name',
        trigger: '13',
      },
      {
        id: 'update-gender',
        update: 'gender',
        trigger: '13',
      },
      {
        id: 'update-age',
        update: 'age',
        trigger: '13',
      },
      {
        id: 'end-message',
        message: 'Thanks! Your data was submitted successfully!. We will clear your doubt as soon as possible',
        end: true,
      },
      {
        id: 'Back-to-options',
        message: 'Back to options',
        trigger: '17',
      },
      {
        id: '17',
        options: [
          { value: 'yes', label: 'Yes', trigger: '3' },
          { value: 'no', label: 'No', trigger: '18' },
        ],
      },
      {
        id: '18',
        message: 'Want to end the chat?',
        trigger: '19',
      },
      {
        id: '19',
        options: [
          { value: 'yes', label: 'Yes', trigger: '20' },
          { value: 'no', label: 'No', trigger: 'Back-to-options' },
        ],
      },
      {
        id: '20',
        message: 'Thanks!',
        end: true,
      },
    ]}
  />
);

export default ExampleDBPedia;