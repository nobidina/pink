<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>

<!--header-->

    <header class="main-header">

<!--menu-->

      <nav class="main-menu">
        <ul class="main-menu__list">
          <li class="main-menu__item">
            <a class="main-menu__link" href="index.html"></a>
          </li>
        </ul>
        <button class="main-menu__toggle  main-menu__toggle_no-js" type="button"></button>
      </nav>

<!--logo-->

      <div class="main-header__logo">
        <a href="index.html">
          <picture>
            <source media="(min-width: 1200px)" srcset="img/logo-sedona-desktop.svg">
            <source media="(min-width: 768px)" srcset="img/logo-sedona-tablet.svg">
            <img src="img/logo-sedona-mobile.svg" width="100" height="85" alt="City of Sedona">
          </picture>
        </a>
      </div>

    </header>

<!--main-->

    <main>

      <section class="feedback">
        <form class="form" action="#" method="post">

<!--input-text-->

          <fieldset class="form__group">
            <h2 class="form__title"></h2>
            <div class="form__input-wrapper">
              <label class="form__label" for="name"></label>
              <input class="form__input" type="text" name="name" placeholder="Петр" id="name">
            </div>
          </fieldset>

<!--input-phone-->

          <fieldset class="form__group">
            <h2 class="form__title"></h2>
            <div class="form__phone-wrapper">
              <label class="form__label" for="phone"></label>
              <input class="form__input" type="tel" name="phone" pattern="7-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="Введите телефон" id="phone">
            </div>
          </fieldset>

<!--input-email-->

          <fieldset class="form__group">
            <div class="form__email-wrapper">
              <label class="form__label" for="email"></label>
              <input class="form__input" type="email" name="email" placeholder="Введите e-mail" id="email">
            </div>
          </fieldset>

<!--radio-->

          <fieldset class="form__group">
            <div class="form__content-wrapper">
              <h2 class="form__title"></h2>
              <div class="form__radio-wrapper">
                <input class="form__radio" type="radio" name="impression" value="positive" checked id="positive">
                <label class="form__label form__label_radio  form__label_strong" for="positive"></label>
              </div>
              <div class="form__radio-wrapper">
                <input class="form__radio" type="radio" name="impression" value="negative" id="negative">
                <label class="form__label  form__label_radio  form__label_strong" for="negative"></label>
              </div>
            </fieldset>

<!--checkbox-->

            <fieldset class="form__group">
              <div class="form__content-wrapper">
                <h2 class="form__title"></h2>
                <div class="form__checkbox-main-wrapper">
                  <div class="form__checkbox-wrapper">
                    <input class="form__checkbox" type="checkbox" name="devils-bridge" checked id="devils-bridge">
                    <label class="form__label  form__label_strong  form__label_checkbox" for="devils-bridge"></label>
                  </div>
                  <div class="form__checkbox-wrapper">
                    <input class="form__checkbox" type="checkbox" name="slide-park" checked id="slide-park">
                    <label class="form__label  form__label_strong  form__label_checkbox" for="slide-park">Слайд-парк</label>
                  </div>
                </div>
              </div>
            </fieldset>

<!--textarea-->

            <fieldset class="form__group">
              <div class="form__content-wrapper">
                <h2 class="form__title"></h2>
                <textarea class="form__textarea" name="emotions" placeholder="Опишите подробно все свои восторги"></textarea>
                <input class="btn  btn_submit" type="submit" value="Отправить отзыв">
              </div>
            </fieldset>

          </form>
        </section>
      </main>

<!--footer-->

      <footer class="main-footer">
        <div class="social-links">
          <a class="social-links__item" href="#"></a>
          <a class="social-links__item" href="#"></a>
          <a class="social-links__item" href="#"></a>
        </div>
        <div class="main-footer__copyright"></div>
      </footer>

<!--slider-->

html,
body {
margin: 0;
padding: 0;
font-family: "Open Sans", sans-serif;
color: #333333;
background-color: #f5f5f5;
}

section {
width: 450px;
margin: 40px auto;
background-color: white;
box-shadow: 0 0 3px #cccccc;
}

h1 {
margin: 0;
padding: 10px 0;
font-size: 28px;
font-weight: normal;
text-align: center;
}

.slider {
position: relative;
}

.slider input[type=radio] {
display: none;
}

.slider-inner {
overflow: hidden;
}

.slider-slides {
width: 300%;
transition: transform 0.8s ease;
}

.slider-slides img {
float: left;
width: 450px;
height: 320px;
}

.slider-controls {
margin-bottom: 10px;
text-align: center;
}

.slider-controls label {
display: inline-block;
width: 10px;
height: 10px;
margin: 0 3px;
background-color: #cccccc;
border: 4px solid white;
border-radius: 50%;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
transition: background-color 0.2s;
cursor: pointer;
}

#btn-1:checked ~ .slider-controls label[for="btn-1"],
#btn-2:checked ~ .slider-controls label[for="btn-2"],
#btn-3:checked ~ .slider-controls label[for="btn-3"] {
background-color: #666666;
}

#btn-1:checked ~ .slider-inner .slider-slides {
transform: translate(0);
}

#btn-2:checked ~ .slider-inner .slider-slides {
transform: translate(-450px);
}

#btn-3:checked ~ .slider-inner .slider-slides {
transform: translate(-900px);
}

  </body>
</html>

карусель

<div class="carousel-wrapper" style="height: 400px;">
  <span id="target-item-1"></span>
  <span id="target-item-2"></span>
  <span id="target-item-3"></span>
  <div class="carousel-item item-1">
    <h2>Item 1</h2>
    <p>Content goes here.</p>
    <a class="arrow arrow-prev" href="#target-item-3"></a>
    <a class="arrow arrow-next" href="#target-item-2"></a>
  </div>
  <div class="carousel-item item-2 light" style="background-color: royalblue;">
    <h2>Item 2</h2>
    <p>Content goes here.</p>
    <a class="arrow arrow-prev" href="#target-item-1"></a>
    <a class="arrow arrow-next" href="#target-item-3"></a>
  </div>
  <div class="carousel-item item-3">
    <h2>Item 3</h2>
    <p>Content goes here.</p>
    <a class="arrow arrow-prev" href="#target-item-2"></a>
    <a class="arrow arrow-next" href="#target-item-1"></a>
  </div>
</div>

.carousel-wrapper {
  position: relative;
}
.carousel-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px 50px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
}
.arrow {
    position: absolute;
    top: 0;
    display: block;
    width: 50px;
    height: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    background: url("/carousel-arrow-dark.png") 50% 50% / 20px no-repeat;
}
  &.arrow-prev {
      left: 0;
    }
  &.arrow-next {
      right: 0;
      -webkit-transform: rotate(180deg);
              transform: rotate(180deg);
      }
    }
  &.light {
      color: white;
}
.arrow {
      background: url("/carousel-arrow-light.png") 50% 50% / 20px no-repeat;
      }
  }
@media (max-width: 480px) {
      .arrow, &.light .arrow {
        background-size: 10px;
        background-position: 10px 50%;
      }
    }
  }
  [id^="target-item"] {
    display: none;
  }
  .item-1 {
    z-index: 2;
    opacity: 1;
  }
  *:target ~ .item-1 {
    opacity: 0;
  }
  #target-item-1:target ~ .item-1 {
    opacity: 1;
  }
  #target-item-2:target ~ .item-2,
  #target-item-3:target ~ .item-3 {
    z-index: 3;
    opacity: 1;
  }
}
