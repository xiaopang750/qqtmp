function Placeholder(aInput, options) {

    options = options || {};
    this.aInput = aInput;
    this.options = options || {};
    this.index = options.index || 2;
    this.fontSize = options.fontSize || 'inherit';
    this.start();
  }

  Placeholder.prototype = {

    start: function() {

      var _this = this;

      if (("placeholder" in this.aInput.get(0))) {

        var name;

        this.aInput.each(function(i) {

          name = _this.aInput.eq(i).attr('text');

          _this.aInput.eq(i).attr('placeholder', name);

        });

      } else {

        var name,
          left,
          top,
          aText,
          color,
          oFather

        color = this.options.color || '#bbb'

        this.aInput.each(function(i) {

          var oInput = _this.aInput.eq(i);
          var inputPosition = oInput.css('position');
          var inputLeft,inputTop
          oInput.wrap('<span></span>');
          oFather = oInput.parent();
          name = oInput.attr('text');
          left = parseInt(oInput.attr('left')) || 0;
          top = parseInt(oInput.attr('top')) || 0;
          var oSpan = $('<span></span>');

          oSpan.html(name);
          _this.oHolder = oSpan;

          if(inputPosition == 'absolute') {
            inputLeft = oInput.css('left');
            inputTop = oInput.css('top');
          } else {
            oFather.css({
              position:'relative',
              display: 'inline-block'
            });
          }

          oSpan.css({
            display: 'inline-block',
            whiteSpace: 'no-wrap',
            color: color,
            position: 'absolute',
            top: top + 'px',
            left: left + 'px',
            fontSize: _this.fontSize,
            zIndex: _this.index
          });

          if (oInput.val()) {
            oSpan.css({
              visibility: 'hidden'
            })
          }

          oFather.append(oSpan);

          oInput.focus(function() {

            oSpan.css({
              visibility: 'hidden'
            })

          });

          oInput.blur(function() {

            if (!oInput.val()) {
              oSpan.css({
                visibility: 'visible'
              });
            }
          });

          oSpan.click(function() {

            oInput.trigger('focus');

          });

        });

      }

    },
    hide: function() {

      this.oHolder && this.oHolder.css({
        visibility: 'hidden'
      });

    },
    show: function() {

      this.oHolder && this.oHolder.css({
        visibility: 'visible'
      });

    }

  }
