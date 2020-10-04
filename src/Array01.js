import React from "react";

export default function Array01() {

  const names = [{
    name: 'Scott',
    id: 1
  }, {
    name: 'Dave',
    id: 2
  }, {
    name: 'Bob',
    id: 3
  }]

  return (
    <>
      <div>{[1,2,3]}</div>
      
      <div>{[1,2,3].join(',')}</div>
      
      <div>{[1,2,3].reverse()}</div>
      
      <div>{[1,2,3].reverse().join(',')}</div>
      
      <ul>{ [1,2,3].map(e => <li key={e}>{e}</li>) }</ul>

      <ul>{[<li key='a'>a</li>, <li key='b'>b</li>, <li key='c'>c</li>]}</ul>

      <ul>{ names.map(e => <li key={e.id}>{e.name} - {e.id}</li>) }</ul>

    </>
  );
};

