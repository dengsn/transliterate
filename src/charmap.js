// Class that defines a character map
export default class Charmap
{
  // Constructor
  constructor(chars)
  {
    this.chars = chars;
  }

  // Render the charmap
  render(elm)
  {
    if (this.chars.length === 0)
      return;

    for (const char of this.chars)
    {
      if (char === ' ')
        elm.append('<br>');
      else
      {
        let button = $('<button class="button is-primary is-light is-small">')
          .css("width","2rem")
          .css("margin","0.25rem")
          .text(char);

        button.on('click',function()
        {
          var selStart = $('#from').prop('selectionStart');
          var selEnd = $('#from').prop('selectionEnd');
          var v = $('#from').val();
          var ins = $(this).text();
          var textBefore = v.substring(0, selStart);
          var textAfter  = v.substring(selEnd, v.length);
          $('#from').val(textBefore + ins + textAfter);

          $('#from').trigger('input');
          $('#from').focus();
          $('#from').prop('selectionStart', selStart + ins.length);
          $('#from').prop('selectionEnd', selStart + ins.length);
        });

        elm.append(button);
      }
    }
  }
}
