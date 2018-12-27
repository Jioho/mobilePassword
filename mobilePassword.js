class mobilePassword {
  constructor(config) {
    this.size = config.size || 6;
    this.title = config.title || '请输入密码';
    this.forget = config.forget || 'show';
    this.callback = config.callback;
    this.forgetAction = config.forgetAction;

    this.password = [];
    // 初始化
    this.init();
    // 绑定事件
    this.bindEvent();
    return this;
  }


  init() {
    // 引入页面
    let psw_list = '';
    for (let i = 0; i < this.size; i++) {
      psw_list += `<li class="password_item"></li>`;
    }

    $("body").append(
      `<div class="mobilePassword-mask"></div>
      <div class="mobilePassword">
        <div class="title">
          <span>${this.title}</span>
          <div class="close pasw"></div>
        </div>
        <ul class="password_list">
          ${psw_list}
        </ul>
        <div class="forget ${this.forget}">忘记密码？</div>
        <div class="keyboard_content">
          <ul class="keyboard">
            <li data-value="1" class="keyboard_item">1</li>
            <li data-value="2" class="keyboard_item">2</li>
            <li data-value="3" class="keyboard_item">3</li>
          </ul>
          <ul class="keyboard">
            <li data-value="4" class="keyboard_item">4</li>
            <li data-value="5" class="keyboard_item">5</li>
            <li data-value="6" class="keyboard_item">6</li>
          </ul>
          <ul class="keyboard">
            <li data-value="7" class="keyboard_item">7</li>
            <li data-value="8" class="keyboard_item">8</li>
            <li data-value="9" class="keyboard_item">9</li>
          </ul>
          <ul class="keyboard">
            <li data-value="" class="keyboard_item empty"></li>
            <li data-value="0" class="keyboard_item">0</li>
            <li data-value="back" class="keyboard_item back">
              <img src="data:image/png;base64,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" +
                alt="回退">
            </li>
          </ul>
        </div>
      </div>`
    );
  }

  // 显示键盘
  rise() {
    $(".mobilePassword-mask").show();
    $(".mobilePassword").slideDown();
  }

  // 隐藏
  drop() {
    $(".mobilePassword-mask").hide();
    $(".mobilePassword").slideUp();

    // 清空已输入内容
    this.password = [];
    $(".active").removeClass('active');
  }

  bindEvent() {

    var self = this;
    $("body").on('click', '.mobilePassword .close.pasw', () => {
      self.drop();
    })

    $("body").on('click', '.mobilePassword-mask', function() {
      self.drop();
    })


    $("body").on('click', '.keyboard_item', function() {
      let value = $(this).data('value');
      switch (value) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
          self.password.push(value);
          $(".password_item").eq($(".password_item.active").length).addClass('active');
          break;
        case '':
          break;
        case 'back':
          self.password.pop(value);
          $(".active:last").removeClass('active');
          break;
      }

      if (self.password.length == self.size) {
        self.callback && self.callback(self.password.join(''));
        self.drop();
      }
    })

    $("body").on('click', '.forget', function() {
      self.forgetAction && self.forgetAction();
    })
  }
}