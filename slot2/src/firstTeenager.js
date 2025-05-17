import React from 'react';
import people from './People';
function FirstTeenager() {
  

  // Tìm người đầu tiên có tuổi từ 13 đến 19
  const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {firstTeenager ? (
        <div>
          <p>Name: {firstTeenager.name}</p>
          <p>Age: {firstTeenager.age}</p>
          <p>Occupation: {firstTeenager.occupation}</p>
        </div>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
