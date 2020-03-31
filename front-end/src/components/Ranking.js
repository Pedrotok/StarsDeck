import React from 'react';

function Ranking(props) {
  const data = [{ "name": "test1" }, { "name": "test2" }];
  const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

  return (
    <div className="Rank">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Ranking;