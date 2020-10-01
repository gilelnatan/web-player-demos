const playerInstance = jwplayer('player').setup({
  playlist: 'https://cdn.jwplayer.com/v2/media/jumBvHdL',
  skin: {
    name: 'practiceplayer',
    url: 'https://s3.us-east-2.amazonaws.com/hadarshemesh.com/assets/practiceplayer.css'
  }
});

playerInstance.on('ready', function() {
  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector('.jw-button-container');
  const spacer = buttonContainer.querySelector('.jw-spacer');
  const timeSlider = playerContainer.querySelector('.jw-slider-time');
  buttonContainer.replaceChild(timeSlider, spacer);
});
