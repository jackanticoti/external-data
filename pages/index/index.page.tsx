import React from 'react';


function Page() {

  const response = fetch('https://external-data-video.firebaseio.com/hero_names/hero-1.json')
  console.log(response)

  return (
    <div>
      <h1>Hi!</h1>
    </div>
  );
}

export { Page };