<template>
  <div id="wrapper">
    <div id="header">
      <div class="wrap">
        <h1>全日本一人呑み協会　公式ライター募集ページ</h1>
        <p class="logo non-over">
          <a href="index.html"
            ><img
              src="shared/img/shared/logo.png"
              alt="全日本 一人呑み協会"
              width="348"
              height="226"
          /></a>
        </p>
        <div class="search-box">
          <div class="search-row">
            <div class="search-col">
              <div class="search-block" data="area">
                <div class="search-caption">
                  <div class="search-name">エリア</div>
                  <div class="search-icon">&times;</div>
                </div>
                <div class="search-list">
                  <ul>
                    <li data="p-hokkaido-touhoku">北海道・東北</li>
                    <li data="p-kantou">関東</li>
                    <li data="p-toukai">東海</li>
                    <li data="p-kansai">関西</li>
                    <li data="p-shikoku">四国</li>
                    <li data="p-chugoku">中国</li>
                    <li data="p-kyushu">九州</li>
                    <li data="p-koushinetsu">甲信越・北陸</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="search-col">
              <div class="search-block" data="category">
                <div class="search-caption">
                  <div class="search-name">お酒</div>
                  <div class="search-icon">&times;</div>
                </div>
                <div class="search-list">
                  <ul>
                    <li data="">ワイワイ</li>
                    <li data="">しっとり</li>
                    <li data="">出会いあるかも</li>
                    <li data="">料理充実</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="search-row">
            <div class="search-col">
              <div class="search-block" data="cost">
                <div class="search-caption">
                  <div class="search-name">一人呑みご予算</div>
                  <div class="search-icon">&times;</div>
                </div>
                <div class="search-list">
                  <ul>
                    <li data="">1,000 円</li>
                    <li data="">2,000 円</li>
                    <li data="">3,000 円</li>
                    <li data="">4,000 円</li>
                    <li data="">5,000 円</li>
                    <li data="">6,000 円</li>
                    <li data="">7,000 円</li>
                    <li data="">8,000 円</li>
                    <li data="">9,000 円</li>
                    <li data="">10,000 円</li>
                    <li data="">15,000 円</li>
                    <li data="">20,000 円</li>
                    <li data="">30,000 円</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="search-col">
              <div class="search-block" data="scene">
                <div class="search-caption">
                  <div class="search-name">シーン</div>
                  <div class="search-icon">&times;</div>
                </div>
                <div class="search-list">
                  <ul>
                    <li data="">ビール</li>
                    <li data="">日本酒</li>
                    <li data="">焼酎</li>
                    <li data="">ウィスキー</li>
                    <li data="">カクテル</li>
                    <li data="">ワイン</li>
                    <li data="">ノンアルコール</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="search-row">
            <div class="search-col">
              <input
                type="text"
                name="s-key"
                placeholder="フリーワード　【例　お店の名前　駅名】"
              />
            </div>
          </div>
          <div class="search-submit">
            <div class="search-button">
              <img
                src="shared/img/shared/head_search.png"
                alt="この条件で検索する"
                class="over"
              />
            </div>
          </div>
        </div>
        <div id="key"></div>
      </div>
      <div id="nav">
        <div class="wrap">
          <div id="btn_home">
            <a class="fnt-mincho" href="index.html">HOME</a>
          </div>
          <ul class="nav nav-fl">
            <li>
              <a href="concept.html"
                ><img
                  src="shared/img/shared/nav_01.png"
                  alt="協会コンセプト"
                  class="btn"
                  width="139"
                  height="200"
              /></a>
            </li>
            <li>
              <a href="entry.html"
                ><img
                  src="shared/img/shared/nav_02.png"
                  alt="協会に参加する"
                  class="btn"
                  width="166"
                  height="200"
              /></a>
            </li>
            <li>
              <a href="members/blog/"
                ><img
                  src="shared/img/shared/nav_07.png"
                  alt="一人呑み潜入レポ"
                  class="btn"
                  width="182"
                  height="200"
              /></a>
            </li>
            <li>
              <a href="members/"
                ><img
                  src="shared/img/shared/nav_03.png"
                  alt="お店を探す"
                  class="btn"
                  width="127"
                  height="200"
              /></a>
            </li>
            <li>
              <a href="writer.html"
                ><img
                  src="shared/img/shared/nav_04_on.png"
                  alt="ライター応募"
                  width="136"
                  height="200"
              /></a>
            </li>
            <li>
              <a href="sponsorship.html"
                ><img
                  src="shared/img/shared/nav_05.png"
                  alt="協賛企業"
                  class="btn"
                  width="112"
                  height="200"
              /></a>
            </li>
            <li>
              <a href="contact.html"
                ><img
                  src="shared/img/shared/nav_06.png"
                  alt="お問い合わせ"
                  class="btn"
                  width="135"
                  height="200"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div id="humburger">
        <p class="navBtn"><span></span> <span></span> <span></span> MENU</p>
        <div id="menu_toggle" class="menu_toggle">
          <ul>
            <li>
              <a href="index.html">トップページ <span>TOP</span></a>
            </li>
            <li>
              <a href="members/">お店を探す <span>SEARCH</span></a>
            </li>
            <li>
              <a href="concept.html">協会コンセプト <span>CONCEPT</span></a>
            </li>
            <li>
              <a href="entry.html">協会に参加する <span>ENTRY</span></a>
            </li>
            <li>
              <a href="writer.html">ライター応募 <span>WANTED WRITERS</span></a>
            </li>
            <li>
              <a href="sponsorship.html">協賛企業 <span>SPONSORS</span></a>
            </li>
            <li>
              <a href="/members/blog/">潜入レポ一覧 <span>BLOG</span></a>
            </li>
            <li>
              <a href="contact.html">お問い合わせ <span>MAIL</span></a>
            </li>
          </ul>
          <div class="close_btn">閉じる<span>×</span></div>
        </div>
      </div>
      <div id="navFix">
        <a href="popup.html" target="_blank">
          <div id="button-popup-sp">
            <img
              src="shared/img/shared/popup-sp.png"
              alt="一人呑み協会様"
              width="100%"
            />
          </div>
        </a>
        <a href="entry.html"
          ><img
            src="shared/img/shared/navfix_01.png"
            alt="ENTRY"
            class="over"
            width="160"
            height="131"
        /></a>
        <a href="members/"
          ><img
            src="shared/img/shared/navfix_02.png"
            alt="SEARCH"
            class="over"
            width="160"
            height="131"
        /></a>
        <a href="writer.html"
          ><img
            src="shared/img/shared/navfix_03.png"
            alt="WANTED WRITERS"
            class="over"
            width="160"
            height="131"
        /></a>
        <a href="contact.html"
          ><img
            src="shared/img/shared/navfix_04.png"
            alt="MAIL"
            class="over"
            width="160"
            height="131"
        /></a>
      </div>
    </div>
    <div id="container">
      <div id="sec01">
        <div class="wrap">
          <h2>
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="shared/img/writer/sec1_h2sp.png"
              />
              <source srcset="shared/img/writer/sec1_h2.png" />
              <img
                src="shared/img/writer/sec1_h2.png"
                alt="全日本一人呑み協会"
              />
            </picture>
          </h2>
          <p class="txtbig fnt-mincho">
            全日本一人呑み協会では、公式ライターを募集しております。
          </p>
          <p class="txt">
            一人飲みが好き、飲食業界を盛り上げたい、情報発信がしたい方、<br />下記フォームにご入力をお願い致します。
          </p>
          <p class="note">
            ※１　全て必須項目です。<br />
            ※２　有料ライティングの募集は締め切りました。<br />
            無料ライティングが可能な方はご応募お願いします。
          </p>
        </div>
      </div>
      <div id="sec02">
        <div class="wrap mailform">
          <div
            class="fc-form"
            data-display="slide"
            data-debug="false"
            data-keep="false"
            data-multiple="writer"
          >
            <div class="main">
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="lastname">ニックネーム</span>
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="必須"
                        width="36"
                        height="16"
                    /></span>
                  </div>
                  <div class="input form-value">
                    <input
                      type="text"
                      name="lastname"
                      value=""
                      class="require"
                      placeholder="一人呑み太郎"
                    />
                  </div>
                  <div class="error">必須項目です</div>
                </div>
              </div>
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="prefecture">都道府県</span>
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="必須"
                        width="36"
                        height="16"
                    /></span>
                  </div>
                  <div class="input form-value">
                    <select name="prefecture" class="w138 require">
                      <option value="" selected>都道府県</option>
                      <option value="北海道">北海道</option>
                      <option value="青森県">青森県</option>
                      <option value="岩手県">岩手県</option>
                      <option value="宮城県">宮城県</option>
                      <option value="秋田県">秋田県</option>
                      <option value="山形県">山形県</option>
                      <option value="福島県">福島県</option>
                      <option value="茨城県">茨城県</option>
                      <option value="栃木県">栃木県</option>
                      <option value="群馬県">群馬県</option>
                      <option value="埼玉県">埼玉県</option>
                      <option value="千葉県">千葉県</option>
                      <option value="東京都">東京都</option>
                      <option value="神奈川県">神奈川県</option>
                      <option value="新潟県">新潟県</option>
                      <option value="富山県">富山県</option>
                      <option value="石川県">石川県</option>
                      <option value="福井県">福井県</option>
                      <option value="山梨県">山梨県</option>
                      <option value="長野県">長野県</option>
                      <option value="岐阜県">岐阜県</option>
                      <option value="静岡県">静岡県</option>
                      <option value="愛知県">愛知県</option>
                      <option value="三重県">三重県</option>
                      <option value="滋賀県">滋賀県</option>
                      <option value="京都府">京都府</option>
                      <option value="大阪府">大阪府</option>
                      <option value="兵庫県">兵庫県</option>
                      <option value="奈良県">奈良県</option>
                      <option value="和歌山県">和歌山県</option>
                      <option value="鳥取県">鳥取県</option>
                      <option value="島根県">島根県</option>
                      <option value="岡山県">岡山県</option>
                      <option value="広島県">広島県</option>
                      <option value="山口県">山口県</option>
                      <option value="徳島県">徳島県</option>
                      <option value="香川県">香川県</option>
                      <option value="愛媛県">愛媛県</option>
                      <option value="高知県">高知県</option>
                      <option value="福岡県">福岡県</option>
                      <option value="佐賀県">佐賀県</option>
                      <option value="長崎県">長崎県</option>
                      <option value="熊本県">熊本県</option>
                      <option value="大分県">大分県</option>
                      <option value="宮崎県">宮崎県</option>
                      <option value="鹿児島県">鹿児島県</option>
                      <option value="沖縄県">沖縄県</option>
                    </select>
                  </div>
                  <div class="error">必須項目です</div>
                </div>
              </div>
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="gender">性別</span>
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="性別"
                        width="36"
                        height="16"
                    /></span>
                  </div>
                  <div class="input form-value">
                    <label
                      ><input type="radio" name="gender" value="男" /> 男</label
                    >
                    <label
                      ><input type="radio" name="gender" value="女" /> 女</label
                    >
                  </div>
                  <div class="error">必須項目です</div>
                </div>
              </div>
              <!--								<div class="row">
									<div class="form-row">
										<div class="caption"><span data-for="person">一人呑み予算</span> <span class="mark-require"><img src="shared/img/writer/mark-require.jpg" alt="必須" width="36" height="16" /></span></div>
										<div class="input form-value">
											<select name="person" class="w180 require">
												<option>下限なし</option>
												<option value="2000">2,000</option>
												<option value="3000">3,000</option>
												<option value="4000">4,000</option>
												<option value="5000">5,000</option>
												<option value="7000">7,000</option>
												<option value="10000">10,000</option>
												<option value="20000">20,000</option>
												<option value="30000">30,000</option>
											</select><span class="nore"> ～ </span>
											<select name="person" class="w180 require">
												<option>上限なし</option>
												<option value="2000">2,000</option>
												<option value="3000">3,000</option>
												<option value="4000">4,000</option>
												<option value="5000">5,000</option>
												<option value="7000">7,000</option>
												<option value="10000">10,000</option>
												<option value="20000">20,000</option>
												<option value="30000">30,000</option>
											</select>
										</div>
										<div class="error">必須項目です</div>
									</div>
								</div>
-->
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="birthday">誕生日年</span>
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="必須"
                        width="36"
                        height="16"
                    /></span>
                  </div>
                  <div class="input form-value">
                    <div
                      class="form-parse-date w180"
                      data-name="birthday"
                      data-date-start="monday"
                      data-date-format="Y/m/d"
                      data-date-weeks="false"
                      data-date-min="1900/01/01"
                      data-date-active="2000/01/01"
                      data-require="true"
                      data-inline="false"
                    ></div>
                    <span class="nore">年</span>
                  </div>
                  <div class="error">必須項目です</div>
                </div>
              </div>
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="email">メールアドレス</span>
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="必須"
                        width="36"
                        height="16"
                    /></span>
                  </div>
                  <div class="input form-value">
                    <input
                      type="text"
                      name="email"
                      value=""
                      class="require check-email"
                      placeholder="○○○○○○@○○○.com"
                    />
                  </div>
                  <div class="error">必須項目です</div>
                  <div class="error-email">正しい形式で入力してください</div>
                </div>
              </div>
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="confirm-email"
                      >メールアドレス（確認用）</span
                    >
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="必須"
                        width="36"
                        height="16"
                    /></span>
                  </div>
                  <div class="input form-value" data-match="email">
                    <input
                      type="text"
                      name="confirm-email"
                      value=""
                      class="require check-email"
                      placeholder="○○○○○○@○○○.com"
                    />
                  </div>
                  <div class="error">必須項目です</div>
                  <div class="error-email">正しい形式で入力してください</div>
                  <div class="error-match">メールアドレスが一致しません</div>
                </div>
              </div>
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="facebook">FacebookのURL</span>
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="必須"
                        width="36"
                        height="16"
                    /></span>
                  </div>
                  <div class="input form-value">
                    <input
                      type="text"
                      name="facebook"
                      class="require"
                      value=""
                      placeholder="https://www.facebook.com/○○○○○"
                    />
                  </div>
                  <div class="error">必須項目です</div>
                </div>
              </div>
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="instagram">InstagramのURL</span>
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="必須"
                        width="36"
                        height="16"
                    /></span>
                  </div>
                  <div class="input form-value">
                    <input
                      type="text"
                      name="instagram"
                      value=""
                      class="require"
                      placeholder="https://www.instagram.com/○○○○○"
                    />
                  </div>
                  <div class="error">必須項目です</div>
                </div>
              </div>
              <div class="row">
                <div class="form-row">
                  <div class="caption">
                    <span data-for="messages">フリースペース</span>
                    <span class="mark-require"
                      ><img
                        src="shared/img/writer/mark-require.jpg"
                        alt="必須"
                        width="36"
                        height="16" /></span
                    ><br /><font
                      >※一人呑みに対する思いを<br />
                      ご記入ください。</font
                    >
                  </div>
                  <div class="input form-value">
                    <textarea
                      name="messages"
                      class="require"
                      placeholder="例：よく一人呑みをしており、おすすめのお店をいくつか知っております。"
                    ></textarea>
                  </div>
                  <div class="error">必須項目です</div>
                </div>
              </div>
              <div class="confirm-hide">
                <p class="end">
                  下記プライバシーポリシーをご確認いただき、宜しければ「個人情報の取扱いについて同意する」にチェックをして、内容を送信して下さい。
                </p>
                <div class="rule">
                  <dl>
                    <dt>１．組織の名称又は氏名</dt>
                    <dd>株式会社フードコネクション</dd>
                  </dl>
                  <dl>
                    <dt>
                      ２．個人情報保護管理者（若しくはその代理人）の氏名又は職名、所属及び連絡先
                    </dt>
                    <dd>
                      平出　冬樹　　管理部　
                      メールアドレス：info@foodconnection.jp　TEL：03-6417-9657
                    </dd>
                  </dl>
                  <dl>
                    <dt>３．個人情報の利用目的</dt>
                    <dd>
                      ・各種お問い合わせ対応のため<br />
                      ・弊社サービスのご案内の為
                    </dd>
                  </dl>
                  <dl>
                    <dt>４．個人情報の取り扱い業務の委託</dt>
                    <dd>
                      個人情報の取扱業務の全部または一部を外部に業務委託する場合があります。<br />
                      その際、弊社は、個人情報を適切に保護できる管理体制を敷き実行していることを条件として<br />
                      委託先を厳選したうえで、機密保持契約を委託先と締結し、お客様の個人情報を厳密に管理させます。
                    </dd>
                  </dl>
                  <dl>
                    <dt>５．個人情報の開示等の請求</dt>
                    <dd>
                      お客様は、弊社に対してご自身の個人情報の開示等（利用目的の通知、開示、<br />
                      内容の訂正・追加・削除、利用の停止または消去、第三者への提供の停止）に関して、<br />
                      当社問合わせ窓口に申し出ることができます。<br />
                      その際、弊社はお客様ご本人を確認させていただいたうえで、合理的な期間内に対応いたします。<br />
                      なお、個人情報に関する弊社問合わせ先は、次の通りです。<br />
                      株式会社フードコネクション　個人情報問合せ窓口<br />
                      〒153－0063　東京都目黒区目黒1－24－12オリックス目黒ビル２F<br />
                      メールアドレス：info@foodconnection.jp　TEL：03-6417-9657<br />
                      （受付時間　10:00～19:00
                      ※土・日・祝、年末年始、GW、夏期休暇を除く)
                    </dd>
                  </dl>
                  <dl>
                    <dt>６．個人情報を提供されることの任意性について</dt>
                    <dd>
                      お客様がご自身の個人情報を弊社に提供されるか否かは、お客様のご判断によりますが、<br />
                      もしご提供されない場合には、
                      適切なサービスが提供できない場合がありますので予めご了承ください。
                    </dd>
                  </dl>
                </div>
                <div id="privacy_checkbox_box" class="form-value">
                  <div>
                    <input
                      id="privacy_checkbox"
                      type="checkbox"
                      class="require"
                    />
                    <label for="privacy_checkbox" class="text"
                      >個人情報の取扱いについて同意する</label
                    >
                    <div class="error">必須項目です</div>
                  </div>
                </div>
              </div>
              <!-- submit -->
              <div class="row fuild">
                <div class="col submit submit-confirm">
                  <button type="submit" class="form-submit">送信</button>
                  <button type="button" class="form-back">戻る</button>
                </div>
                <div class="col submit submit-form">
                  <button type="submit" class="form-submit">送信する</button>
                  <!-- <button type="reset" class="form-back">リセット</button> -->
                </div>
              </div>
            </div>
          </div>
          <p class="note">
            ※１　ライターとして承認させていただいた方に弊社よりご連絡差し上げます。<br />
            ご連絡は登録後1ヶ月前後になります。
          </p>
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="btn-footer">
        <p>
          <a href="concept.html"
            ><img
              src="shared/img/shared/footer_btn_01.png"
              alt="協会コンセプト"
              width="300"
              height="96"
              class="over"
          /></a>
        </p>
        <p>
          <a href="sponsorship.html"
            ><img
              src="shared/img/shared/footer_btn_02.png"
              alt="協賛企業"
              width="300"
              height="96"
              class="over"
          /></a>
        </p>
      </div>
      <div class="wrap">
        <ul class="clearfix">
          <li><a href="index.html">全国一人呑み協会トップページ </a> |</li>
          <li><a href="concept.html">協会コンセプト</a> |</li>
          <li><a href="/members/blog">一人呑み潜入レポ</a> |</li>
          <li><a href="entry.html">参加方法</a> |</li>
          <li><a href="members/all/">協会加盟店</a> |</li>
          <li><a href="writer.html">ライター応募</a> |</li>
          <li><a href="sponsorship.html">協賛企業</a> |</li>
          <li><a href="contact.html">お問い合わせ</a> |</li>
          <li>
            <a href="shared/img/shared/privacy.pdf" target="_blank"
              >個人情報保護方針</a
            >
          </li>
        </ul>
        <div class="clearfix">
          <div class="footer_l">
            <div class="box_footer">
              <p>【 運営会社 】</p>
              <p>株式会社フードコネクション（全日本 一人呑み協会事務局）</p>
              <p>〒153-0063　東京都目黒区目黒1-24-12 オリックス目黒ビル2F</p>
              <p>TEL 03-6417-9657 FAX 03-6417-9658</p>
            </div>
          </div>
          <div class="footer_r">
            <h5>LINKS</h5>
            <p>
              <a href="http://www.kojijob.com/" target="_blank" rel="nofollow"
                ><img
                  src="shared/img/shared/bnr_kojijob.jpg"
                  width="240"
                  height="65"
                  alt="個人店のミカタjob"
                  class="over"
              /></a>
            </p>
          </div>
        </div>
        <address>Copyright © 全日本 一人呑み協会. All Rights Reserved.</address>
      </div>
    </div>
    <!--   open popup-->
    <p class="off-popup">
      <img
        src="shared/img/shared/button_close.jpg"
        alt="一人呑み協会様"
        width="100%"
      />
    </p>
    <a href="#popup" class="inline unsmooth on-popup"
      ><div id="button-popup">
        <img
          src="shared/img/shared/button.jpg"
          alt="一人呑み協会様"
          width="100%"
        /></div
    ></a>
    <!--<p class="interview_btn">
	<a href="interview_001.html" onclick="ga('send', 'event', 'Links', 'click', 'sidebtn_interview202005');"><img src="shared/img/shared/interview_btn.jpg" width="100%"></a>
	</p>-->
    <div class="sec_ct">
      <div id="popup">
        <h2>
          <img
            src="shared/img/shared/popup-h2.png"
            alt="毎月「11日」は"
            width="100%"
          />
        </h2>
        <div class="info">
          <ul class="link clearfix">
            <li>
              <a
                href="https://www.instagram.com/explore/tags/%E3%83%92%E3%83%88%E3%83%AA%E3%83%8E%E3%83%9F%E3%83%8E%E6%97%A5/"
                target="_blank"
                ><img
                  src="shared/img/shared/popup-tit1.png"
                  width="100%"
                  alt="Instagram（＃ヒトリノミノ日"
              /></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/explore/tags/ヒトリノミノ日/"
                target="_blank"
                ><img
                  src="shared/img/shared/popup-tit2.png"
                  width="100%"
                  alt="一人呑み協会Instagram"
              /></a>
            </li>
          </ul>
          <div id="instagram">
            <ul id="instafeed" class="clearfix"></ul>
          </div>
        </div>
        <h3>
          <picture>
            <source
              srcset="shared/img/shared/sp-popup-h3.png"
              width="100%"
              media="(max-width: 490px)"
            />
            <source srcset="shared/img/shared/popup-h3.png" />
            <img
              src="shared/img/shared/popup-h3.png"
              width="100%"
              alt="style"
            />
          </picture>
        </h3>
        <div class="menu clearfix">
          <div class="list">
            <div class="row stt1">
              <p class="txt">Instagramをインストール</p>
              <ul class="clearfix">
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;hl=ja"
                    target="_blank"
                    ><img
                      src="shared/img/shared/link_01.png"
                      width="100%"
                      alt="googlePlay"
                  /></a>
                </li>
                <li>
                  <a
                    href="https://itunes.apple.com/jp/app/instagram/id389801252?mt=8"
                    target="_blank"
                    ><img
                      src="shared/img/shared/link_02.png"
                      width="100%"
                      alt="appstore"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="row stt2">
              <p class="txt">
                一人呑み協会の<br />
                Instagramを<br />
                フォロー
              </p>
              <p class="qr">
                <img
                  src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://www.instagram.com/hitori_nomi/"
                  width="100%"
                  alt="qr"
                />
              </p>
            </div>
          </div>
          <div class="list">
            <div class="row stt3">
              <p class="txt">
                ドリンク・おつまみ写真を <br />
                「＃ヒトリノミノ日」をつけて投稿
              </p>
            </div>
            <div class="row stt4">
              <p class="txt">
                一人呑み協会Instagramでお店の情報をシェア
                特設ページにも画像が表示されます
              </p>
            </div>
          </div>
        </div>
        <p class="button">
          <a href="contact.html"
            ><img
              src="shared/img/shared/popup-btn.png"
              width="100%"
              alt="ヒトリノミノ日に関するご質問はこちら"
          /></a>
        </p>
      </div>
    </div>
    <!-- end popup-->
    <!--end footer-->
  </div>
</template>

<script>
export default {};
</script>
