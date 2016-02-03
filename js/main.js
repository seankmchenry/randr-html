/**
 * Replace SVG with PNG
 * hat-tip: http://zerosixthree.se/snippets/replace-all-svg-with-png-with-modernizr
 */

if (!Modernizr.svg) {
  $('img[src$=".svg"]').each(function() {
    //Replaces 'logo.svg' with 'logo.png'.
    $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
  });
}