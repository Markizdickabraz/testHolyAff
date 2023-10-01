const commentsSubmit = document.querySelector('#btn_comments');
const commentsList = document.querySelector('.comments_face');
const commentText = document.querySelector('#comment_text');
const avatar = 'https://robohash.org/YOUR-TEXT.png';

commentsSubmit.addEventListener('click', function () {
    if (commentText.value === ''){
        return;
    }

    commentsList.insertAdjacentHTML('afterbegin' , ` <div class="comments" style="display:block">
              <div class="profile">
                <img src=${avatar}>
              </div>
              <div class="comment-content">
                <p class="name">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Anonim</font>
                  </font>
                </p>
                <p>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">${commentText.value}</font>
                  </font>
                </p>
              </div>
              <div class="clr"></div>
              <div class="comment-status">
                <span>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Curte·comente</font>
                  </font>
                  <img src="./assets/img/3.jpg" width="15px" height="15px">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">29</font>
                  </font>
                </span>
                <font style="vertical-align: inherit;">
                  <small>
                    <font style="vertical-align: inherit;">·</font>
                  </small>
                  <small>
                    <u>
                      <font style="vertical-align: inherit;">1 minutos antes</font>
                    </u>
                  </small>
                </font>
                <small>
                  <font style="vertical-align: inherit;"></font>
                  <u>
                    <font style="vertical-align: inherit;"></font>
                  </u>
                </small>
              </div>
            </div>
    `)
})

