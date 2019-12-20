import React from 'react';
import './App.css';

const quotes = [
    [ ["Be yourself; everyone else is already taken."], ["Oscar Wilde"]], 
    [ ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."], ["Albert Einstein "]],
    [ ["So many books, so little time."], [" Frank Zappa "]],
    [ ["A room without books is like a body without a soul."], ["Marcus Tullius Cicero"]],
    [ ["The way get started is to quit talking and begin doing."], ["Walt Disney"]],
    [ ["The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty."], ["Winston Churchill"]],
    [ ["Don’t let yesterday take up too much of today."], ["Will Rogers"]],
    [ ["You learn more from failure than from success. Don’t let it stop you. Failure builds character."], ["Unknown"]],
    [ ["It’s not whether you get knocked down, it’s whether you get up."], ["Inspirational Quote by Vince Lombardi"]],
    [ ["If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you."], ["Steve Jobs"]],
    [ ["People who are crazy enough to think they can change the world, are the ones who do."], ["Rob Siltanen"]],
    [ ["Failure will never overtake me if my determination to succeed is strong enough."], ["Og Mandino"]],
    [ ["Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur."], ["Mohnish Pabrai"]],
    [ ["We may encounter many defeats but we must not be defeated."], ["Maya Angelou"]],
    [ ["Knowing is not enough; we must apply. Wishing is not enough; we must do."], ["Johann Wolfgang Von Goethe"]],
    [ ["Imagine your life is perfect in every respect; what would it look like?"], ["Brian Tracy"]],
    [ ["We generate fears while we sit. We overcome them by action."], ["Dr. Henry Link"]],
    [ ["Whether you think you can or think you can’t, you’re right."], ["Quote by Henry Ford"]],
    [ ["Security is mostly a superstition. Life is either a daring adventure or nothing."], ["Life Quote by Helen Keller"]],
    [ ["The man who has confidence in himself gains the confidence of others."], ["Hasidic Proverb"]],
    [ ["The only limit to our realization of tomorrow will be our doubts of today."], ["Motivational Quote by Franklin D. Roosevelt"]],
    [ ["Creativity is intelligence having fun."], ["Albert Einstein"]],
    [ ["What you lack in talent can be made up with desire, hustle and giving 110% all the time."], ["Don Zimmer"]],
    [ ["Do what you can with all you have, wherever you are."], ["Theodore Roosevelt"]],
    [ ["Develop an ‘Attitude of Gratitude’. Say thank you to everyone you meet for everything they do for you."], ["Encouraging Quote by Brian Tracy"]],
    [ ["You are never too old to set another goal or to dream a new dream."], ["C.S. Lewis"]],
    [ ["To see what is right and not do it is a lack of courage."], ["Confucius"]],
    [ ["Reading is to the mind, as exercise is to the body."], ["Brian Tracy"]],
    [ ["Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality."], ["Brian Tracy"]],
    [ ["The future belongs to the competent. Get good, get better, be the best!"], ["Success Quote by Brian Tracy"]],
    [ ["For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded."], ["Jack Canfield"]],
    [ ["Things work out best for those who make the best of how things work out."], ["Positive Quote by John Wooden"]],
    [ ["A room without books is like a body without a soul."], ["Marcus Tullius Cicero"]],
    [ ["I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time."], ["Michael Phelps"]],
    [ ["One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals."], ["Michelle Obama"]],
    [ ["Today’s accomplishments were yesterday’s impossibilities."], ["Robert H. Schuller"]],
    [ ["The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle."], ["Steve Jobs"]],
    [ ["You don’t have to be great to start, but you have to start to be great."], ["Zig Ziglar"]],
    [ ["A clear vision, backed by definite plans, gives you a tremendous feeling of confidence and personal power."], ["Brian Tracy"]],
    [ ["There are no limits to what you can accomplish, except the limits you place on your own thinking."], ["Brian Tracy"]],
    [ ["When you want to succeed as bad as you want to breathe, then you’ll be successful."], ["Eric Thomas"]],
    [ ["The most important thing is this: To be able at any moment, to sacrifice what you are, for what you will become!"], ["Eric Thomas"]],
    [ ["I’m intoxicated on success!"], ["Eric Thomas"]],
    [ ["Money and success don't change people; they merely amplify what is already there."], ["Will Smith"]],
    [ ["In my mind, I've always been an A-list Hollywood superstar. Y'all just didn't know yet."], ["Will Smith"]],
    [ ["People don't buy what you do; they buy why you do it."], [" Simon Sinek"]],
    [ ["If your actions inspire others to dream more, learn more, do more and become more, you are a leader."], ["Simon Sinek"]],
    [ ["Strength does not come from winning. Your struggles develop your strengths."], ["Arnold Schwarzenegger"]],
    [ ["Live as if you were to die tomorrow. Learn as if you were to live forever."], ["Mahatma Gandhi"]],
    [ ["That which does not kill us makes us stronger."], ["Friedrich Nietzsche"]],
    [ ["Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind."], ["Bernard M. Baruch"]],
    [ ["We must not allow other people’s limited perceptions to define us."], ["Virginia Satir"]],
    [ ["Do what you can, with what you have, where you are."], ["Theodore Roosevelt"]],
    [ ["This above all: to thine own self be true."], ["William Shakespeare"]],
    [ ["If you cannot do great things, do small things in a great way."], ["Napoleon Hill"]],
    [ ["If opportunity doesn’t knock, build a door."], ["Milton Berle"]],
    [ ["Wise men speak because they have something to say; fools because they have to say something."], ["Plato"]],
    [ ["Strive not to be a success, but rather to be of value."], ["Albert Einstein"]],
    [ ["Do not let what you cannot do interfere with what you can do."], ["John Wooden"]],
    [ ["Whenever you find yourself on the side of the majority, it is time to pause and reflect."], ["Mark Twain"]],
    [ ["I haven’t failed. I’ve just found 10,000 ways that won’t work"], ["Thomas Edison"]],

    ]
  
  
  
  class Pocetna extends React.Component {
    constructor(props){
      super(props);
      this.newQuote = this.newQuote.bind(this);
      this.state = {
        quote: '',
        author: ''
      }
    }
    
    newQuote(){
      let random = Math.floor((Math.random() * 15)+6);
      
      this.setState( ()=> {
        return {
          quote: quotes[random][0],
          author: quotes[random][1]
          //set state to quote and author
        }
      })
      console.log(quotes.length)
    }
    
    componentDidMount(){
      this.newQuote();
    }
    
    //as soon as component loads, it runs new Quote method
    
    render(){
      return (
        
        
      <div className="quote-section">
          <div className="Quote-wrapper">
              <div className="content">content </div>
          <h3>"{this.state.quote}"</h3>
                <div className="content"> content</div>
          </div>
          <div className="Author-wrapper">
              <div className="content">content</div>
          <h4>-{this.state.author}</h4>
                <div className="content">Content</div>
          </div>
         
          
        </div>
        
        
          
      )
    }
  
  }
  //end component Quote
  
  
  class Quotes extends React.Component {
    render(){
      return(
      <div className="Quote">
          {/*<h1>Random Naruto Quote Generator</h1>*/}
          <Pocetna />
          
          
          
        </div>
      )
    }
  }
  
  export default Quotes;
