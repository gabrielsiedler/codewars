// http://www.codewars.com/kata/react-with-jsx/solutions/javascript/me

let React = require('react')

var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>; 

var CodewarsLink = React.createClass({
  render: function() {
    return <a href={ 'http://www.codewars.com/users/' + this.props.user }>{ this.props.user }</a>;
  }
});

var Leaderboard = React.createClass({
  render: function() {
    return <div>
      { this.props.leaders.map(function(leader, index) { 
          return <CodewarsLink key={index} user={leader}></CodewarsLink>; 
        }) 
      } 
    </div>;
  }
});