function initLocalClock() {
  // Get the local time using JS
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  //Create an object with each hand it's angle in degrees

  let hands = [
    {
      hand: "hours",
      angle: hours * 30 + minutes / 2
    },
    {
      hand: "minutes",
      angle: minutes * 6
    },
    {
      hand: "seconds",
      angle: seconds * 6
    }
  ];

  // Loop through each of these hands to set their angle

  for (let i = 0; i < hands.length; i++) {
    let elements = document.querySelectorAll("." + hands[i].hand);
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.webKitTransform = "rotateZ(" + hands[i].angle + "deg)";
      elements[j].style.transform = "rotateZ(" + hands[i].angle + "deg)";
      // if this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[i].hand === "minutes") {
        elements[j].parentNode.setAttribute(
          "data-second-angle",
          hand[i + 1].angle
        );
      }
    }
  }
}
