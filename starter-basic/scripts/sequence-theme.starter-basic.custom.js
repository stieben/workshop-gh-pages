/**
 * Theme Name: Starter Basic (customized)
 * Version: 1.0.0
 * Theme URL: http://sequencejs.com/themes/starter-basic/
 *
 * This theme is powered by Sequence.js – the
 * responsive CSS animation framework for creating unique sliders,
 * presentations, banners, and other step-based applications.
 *
 * Author: Ian Lunn, Andrej Stieben
 * Author URL: http://ianlunn.co.uk/, https://stieben.de/
 *
 * Theme License: http://sequencejs.com/licenses/#free-theme
 * Sequence.js Licenses: http://sequencejs.com/licenses/
 *
 * Copyright © 2015 Ian Lunn Design Limited
 * Copyright © 2016 Andrej Stieben
 */

// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  cycle: false,
  keyNavigation: true
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);
