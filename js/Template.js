// -------------------------- HEADER & FOOTER -------------------------------------
export const headerTem =
`<div class="header-wrap">
<div class="header-container mwidth">
  <a href="./home.html" class="logo-wrap">
    <img src="../images/logo.png" alt="">
  </a>
  <div class="header-content-wrap">
    <ul class="header-menu-list ">
      <li class="header-menu-item">
        <p>EM-Ventures</p>
        <ul class="header-submenu-list hide  ">
          <li class="header-submenu-item">
            <a href="./about-us.html"> Về chúng tôi</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href=""> Tầm nhìn</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href=""> Sứ mệnh</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href=""> Giá trị cốt lõi</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href="./strategic-partner.html"> Đối tác chiến lược</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href=""> Ban điều hành</a>
          </li>
        </ul>
      </li>
      <li class="header-menu-item">
        <p>Hoạt động</p>
        <ul class="header-submenu-list hide ">
          <li class="header-submenu-item">
            <a href="./em-trainning.html"> EM-Trainning </a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href="./em-brands.html"> EM-Brands </a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href="./em-retail.html"> EM-Retail </a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href="./em-innovation.html"> EM-Innovation </a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href="./em-voice.html"> EM-Voice </a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href="./em-payday.html"> EM-Payday </a>
          </li>
        </ul>
      </li>
      <li class="header-menu-item">
        <p>Sự kiện</p>
      </li>
      <li class="header-menu-item">
        <p>Liên kết</p>
        <ul class="header-submenu-list hide ">
          <li class="header-submenu-item">
            <a href=""> Liên hệ</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href=""> Trở thành Nhà tài trợ</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href=""> Trở thành Đại sứ</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href=""> Trở thành Thành viên</a>
          </li>
          <div class="gray-line"></div>
          <li class="header-submenu-item">
            <a href=""> Dịch vụ kế nối khác</a>
          </li>
        </ul>
      </li>
      <li class="header-menu-item">
        <p>Tài khoản</p>
      </li>
    </ul>
    <button class="download_btn">
      <p>tải app</p>
    </button>
    <div class="mobile-menu-icon-wrap hide" >
    <i class="fa-solid fa-bars mobile-menu-icon" onclick="ShowMobileMenu()"></i>
    <div class="mobile-menu hide-menu">
      <ul class="mobile-menu-list mwidth">
        <li>
          <div class="mobile-menu-item" id="sub1" onclick="ShowMobileSubMenu(id)">
            <p >EM-Ventures</p>
            <i class="fa-sharp fa-solid fa-caret-down"></i>                  
          </div>
          <ul class="mobile-submenu-list mobile-hide show-sub1">
            <li class="mobile-submenu-item">
              <a href="./about-us.html"> Về chúng tôi</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href=""> Tầm nhìn</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href=""> Sứ mệnh</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href=""> Giá trị cốt lõi</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href="./strategic-partner.html"> Đối tác chiến lược</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href=""> Ban điều hành</a>
            </li>
          </ul>
        </li>

        <li>
          <div class="mobile-menu-item"  id="sub2" onclick="ShowMobileSubMenu(id)">
            <p>Hoạt động</p>
            <i class="fa-sharp fa-solid fa-caret-down"></i>                  
          </div>
          <ul class="mobile-submenu-list mobile-hide show-sub2">
            <li class="mobile-submenu-item">
              <a href="./em-trainning.html"> EM-Trainning </a>
            </li>
            <li class="mobile-submenu-item">
              <a href="./em-brands.html"> EM-Brands </a>
            </li>
            <li class="mobile-submenu-item">
              <a href="./em-retail.html"> EM-Retail </a>
            </li>
            <li class="mobile-submenu-item">
              <a href="./em-innovation.html"> EM-Innovation </a>
            </li>
            <li class="mobile-submenu-item">
              <a href="./em-voice.html"> EM-Voice </a>
            </li>
            <li class="mobile-submenu-item">
              <a href="./em-payday.html"> EM-Payday </a>
            </li>
          </ul>
        </li>
        <li>
          <div class="mobile-menu-item">
            <p>Sự kiện</p>
          </div>
        </li>
        <li>
          <div class="mobile-menu-item"  id="sub3" onclick="ShowMobileSubMenu(id)">
            <p>Liên kết</p>
            <i class="fa-sharp fa-solid fa-caret-down"></i>
          </div>
          <ul class="mobile-submenu-list mobile-hide show-sub3">
            <li class="mobile-submenu-item">
              <a href=""> Liên hệ</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href=""> Trở thành Nhà tài trợ</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href=""> Trở thành Đại sứ</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href=""> Trở thành Thành viên</a>
            </li>
            <div class="gray-line"></div>
            <li class="mobile-submenu-item">
              <a href=""> Dịch vụ kế nối khác</a>
            </li>
          </ul>
        </li>
        <li>
          <div class="mobile-menu-item">
            <p>Tài khoản</p>

          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>

</div>
</div>`

export const footerTem = `
<footer class="footer-wrap mwidth">
<section class="nav-footer ">
  <div class="footerColumn">
    <div class="titleColumn">
      EM-Ventures
      <a href="#">Về chúng tôi</a>
      <a href="#">Sự kiện cộng đồng</a>
    </div>
    <div class="titleColumn">
      Hoạt động
      <a href="#">EM-Training</a>
      <a href="#">EM-Brands</a>
      <a href="#">EM-Retails</a>
      <a href="#">EM-Innovation</a>
      <a href="#">EM-Voice</a>
      <a href="#">EM-Payday</a>
    </div>
    <div class="titleColumn">
      Đối tác chiến lược
      <a href="#">Đối tác chiến lược</a>
      <a href="#">Đối tác tài chính</a>
      <a href="#">Đối tác đồng hành</a>
    </div>
    <div class="titleColumn">
      Liên kết
      <a href="#">Liên hệ</a>
      <a href="#">Trở thành nhà tài trợ</a>
      <a href="#">Trở thành đại sứ</a>
      <a href="#">Trở thành Thành viên</a>
      <a href="#">Dịch vụ kết nối khác</a>
    </div>
  </div>
  <div class="emailBg">
    <label for="inputEmail">Nhận thông báo</label>
    <div class="input-Email">
      <input
        type="email"
        name=""
        id="inputEmail"
        placeholder="Email address"
      />
      <div class="img-wrapper"><img src="../images/ArrwSubmit.png" alt="" /></div>
    </div>
    <p class="emailHint">
      Đăng ký để nhận thông báo từ EM-Ventures để cập nhật những tin tức
      và khám phá mới.
    </p>
  </div>
</section>
<section class="endPage">
  <div>
    <img class="logo" src="../images/logo.png" alt="" />
  </div>
  <p>©2022 EM-Ventures. All Right Reserved</p>
  <div class="contact">
    <div>
      <img class="twitter" src="../images/twitter.png" alt="" />
    </div>
    <div>
      <img class="facebook" src="../images/facebook.png" alt="" />
    </div>
    <div>
      <img class="instagram" src="../images/Instagram.png" alt="" />
    </div>
  </div>
</section>
</footer>`;

// -------------------------- SECTION TEMPLATE -------------------------------------

export const venturesTem = `<div class="em-ventures em-wrap">
<div class="title hide">
  <p>
    EM-VENTURES xây dựng các giải pháp nhằm hỗ trợ Phụ nữ làm chủ
    cuộc sống của chính mình
  </p>
</div>
<div class="img-wrap em-container">
    <img src="../images/pictureEM-Venture.png" alt="" class="img-small" />
</div>
<div class="text-wrap em-container">
  <div class="title hide990">
    <p>
      EM-VENTURES xây dựng các giải pháp nhằm hỗ trợ Phụ nữ làm chủ
      cuộc sống của chính mình
    </p>
  </div>
  <div class="content">
    <p>
      Với mục tiêu giúp đỡ, hỗ trợ hàng triệu phụ nữ Việt Nam có cuộc
      sống tốt đẹp hơn, EM-Ventures triển khai các giải pháp đồng bộ,
      có tính kết nối, bằng từng hành động cụ thể, giúp phụ nữ xây
      dựng gia đình có sinh kế bền vững, hạnh phúc, tiến bộ, văn minh,
      chia sẻ trách nhiệm xã hội, góp phần xây dựng các giá trị tốt
      đẹp cho gia đình và cộng đồng:
    </p>
    <ul>
      <li><span class="bold">EM-Trainning</span>/ ĐÀO TẠO</li>
      <li>
        <span class="bold">EM-Brands</span>/ ỨNG DỤNG SỐ HOÁ NÂNG CAO THU NHẬP
      </li>
      <li>
        <span class="bold">EM-Retail
        </span>/ XÂY DỰNG CHUỖI CỬA HÀNG KẾT NỐI GIỚI THIỆU SẢN PHẨM
        TRUYỀN THỐNG, ĐẶC SẢN ĐỊA PHƯƠNG
      </li>
      <li>
        <span class="bold">EM-Innovation</span>/ HỖ TRỢ SÁNG KIẾN
      </li>
      <li><span class="bold">EM-Voice</span>/ TÔN VINH</li>
      <li>
        <span class="bold">EM-PAYDAY</span>/ DỊCH VỤ TÀI CHÍNH
      </li>
    </ul>
    <p class="purple_text bold">
      “Học – Thực hành – Tự doanh – Phát triển sáng kiến mới – Tôn
      vinh”
    </p>
    <p>
      Chặng đường phát triển bản thân của người phụ nữ được
      EM-Ventures phác hoạ và định hướng hỗ trợ cho từng thành viên
      của mình, để họ làm chủ cuộc sống của mình, từng bước vững chắc
      để tạo dựng sự nghiệp.
    </p>
  </div>
</div>
</div>`;

export const trainningTem = `<div class="em-trainning em-wrap">
  <div class="title hide">
    <h1>em-training</h1>
    <h2>dào tạo</h2>
  </div>
  <div class="img-wrap em-container">
    <img src="../images/em_trainning.png" alt="">
  </div>
  <div class="text-wrap em-container">
    <div class="text-wrap">
      <div class="title hide990">
        <h1>em-training</h1>
        <h2>dào tạo</h2>
      </div>
      <div class="content">
        <p>
          Trang bị cho Phụ nữ kiến thức cần thiết để chủ động trong công
          việc và cuộc sống hàng ngày, tạo cơ hội phát triển và khẳng định
          bản thân.
        </p>
        <ul>
          <li>Kiến thức về sản phẩm</li>
          <li>Kiến thức về xây dựng thương hiệu, tiếp thị</li>
          <li>Kiến thức về kinh doanh, kiểm soát tài chính</li>
          <li>Kiến thức về chuyển đổi số</li>
        </ul>
        <p>
          Thông tin chi tiết:<br />
          em-training@emventures.vn
        </p>
        <button class="more-btn">
          <p>Xem thêm</p>
          <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>`;

export const brandsTem = `<div class="em-brands em-wrap">
  <div class="title hide">
    <h1>EM-brands</h1>
    <h2>ỨNG DỤNG SỐ HOÁ NÂNG CAO THU NHẬP</h2>
  </div>
  <div class="img-wrap em-container">
    <div class="brands-list">
      <div class="item">
        <img src="../images/em_brand1.png" alt="" />
      </div>
      <div class="item">
        <img src="../images/em_brand2.png" alt="" />
      </div>
      <div class="item">
        <img src="../images/em_brand3.png" alt="" />
      </div>
      <div class="item">
        <img src="../images/em_brand4.png" alt="" />
      </div>
      <div class="item">
        <img src="../images/em_brand5.png" alt="" />
      </div>
      <div class="item">
        <img src="../images/em_brand1.png" alt="" />
      </div>
    </div>
  </div>
  <div class="text-wrap em-container">
    <div class="title hide990">
      <h1>EM-brands</h1>
      <h2>ỨNG DỤNG SỐ HOÁ NÂNG CAO THU NHẬP</h2>
    </div>
    <div class="content">
      <p>
        Chương trình EM-BRANDS được xây dựng dựa trên cơ sở phát triển
        nền tảng ứng dụng liên kết giữa các thương hiệu, nhãn hàng lớn,
        uy tín để đem lại giải pháp kinh doanh hiện đại, môi trường làm
        việc chủ động cho phụ nữ.
      </p>
      <ul>
        <li>
          Hướng dẫn hội viên phụ nữ tiếp cận số hóa để cải thiện, tăng
          thu nhập và nâng cao chất lượng cuộc sống.
        </li>
        <li>
          Giúp Hội viên được tiếp cận với các sản phẩm an toàn, chất
          lượng, có nguồn gốc xuất xứ rõ ràng, được kiểm định chất lượng
          nghiêm ngặt bởi các tổ chức uy tín trong và ngoài nước.
        </li>
        <li>
          Cùng với các hoạt động huấn luyện, đào tạo từ các nhãn hàng,
          thương hiệu, đây sẽ là một môi trường làm việc hiện đại, chủ
          động về thời gian, tạo không gian cho hội viên phụ nữ thúc đẩy
          tính năng động, sáng tạo trong công việc, cải thiện thu nhập.
        </li>
      </ul>
      <div class="em-content-bottom">
        <p>
          Thông tin chi tiết: <br />
          em-brands@emventures.vn
        <p>
          <button class="more-btn">
            Xem thêm <i class="fa-sharp fa-solid fa-arrow-right"></i>
          </button>
      </div>
    </div>
  </div>
  </div>
</div>`;

export const retailTem = `<div class="em-retail em-wrap">
<div class="title hide">
  <h1>em-retail</h1>
  <h2>
    XÂY DỰNG CHUỖI CỬA HÀNG KẾT NỐI GIỚI THIỆU SẢN PHẨM TRUYỀN
    THỐNG, ĐẶC SẢN ĐỊA PHƯƠNG
  </h2>
</div>
<div class="img-wrap em-container">
  <img src="../images/em_retail.png" alt="">
</div>
<div class="text-wrap em-container">
  <div class="title hide1366">
    <h1>em-retail</h1>
    <h2>
      XÂY DỰNG CHUỖI CỬA HÀNG KẾT NỐI GIỚI THIỆU SẢN PHẨM TRUYỀN
      THỐNG, ĐẶC SẢN ĐỊA PHƯƠNG
    </h2>
  </div>
  <div class="content">
    <p class="retail-intro">
      EM-RETAIL tiên phong là mắt xích kết nối cùng các đơn vị ban
      ngành liên quan để hỗ trợ phụ nữ các tỉnh/ thành phố tự tin duy
      trì và phát triển các sản phẩm truyền thống, đặc sản địa phương.
    </p>
    <ul>
      <li>
        Gìn giữ & phát triển làng nghề truyền thống khắp vùng miền
        Việt Nam.
      </li>
      <li>
        Tạo việc làm, tăng thu nhập cho phụ nữ thông qua mô hình kinh
        doanh tự doanh trên toàn quốc.
      </li>
      <li>
        Hỗ trợ mô hình kinh doanh; liên kết với đơn vị hỗ trợ tài
        chính để phụ nữ có nguồn vốn mở cửa hàng bán lẻ; phối hợp với
        các cơ quan ban ngành liên quan có thẩm quyền để chứng nhận
        chất lượng sản phẩm và phát triển thị trường; hỗ trợ phụ nữ
        xây dựng thương hiệu và phát triển thương hiệu.
      </li>
      <li>
        Áp dụng nền tảng số hoá, quản trị bằng công nghệ, góp phần
        thực hiện chuyển đổi số cho phụ nữ.
      </li>
    </ul>

    <div class="em-content-bottom">
      <p>Thông tin chi tiết: <br />em-brands@emventures.vn</p>
      <button class="more-btn">
        Xem thêm <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</div>
</div>`;

export const innovationTem = `<div class="em-innovation em-wrap">
<div class="title hide">
  <h1>em-innvation</h1>
  <h2>HỖ TRỢ SÁNG KIẾN</h2>
</div>
<div class="img-wrap em-container">
  <img src="../images/em_innovation.png" alt="">
</div>
<div class="text-wrap em-container">
  <div class="title hide1024">
    <h1>em-innvation</h1>
    <h2>HỖ TRỢ SÁNG KIẾN</h2>
  </div>
  <div class="content">
    <p>
      Khuyến khích và tạo điều kiện để phụ nữ có cơ hội thể hiện quan
      điểm, tư duy sáng tạo; từ đó hiện thực hoá các ý tưởng kinh
      doanh và sáng kiến mang lại giá trị cho đối tượng phụ nữ. Bên
      cạnh việc hỗ trợ nâng cao kỹ năng, kiến thức, EM-INNOVATION còn
      tạo cơ hội kết nối đầu tư cho các ý tưởng, đề xuất mang tính khả
      thi và xuất sắc.
    </p>
    <ul>
      <li>
        Phát động và khuyến khích hội viên phụ nữ gửi các ý tưởng kinh
        doanh (đề xuất các dự án phát triển kinh tế, khai thác thế
        mạnh địa phương: nông – lâm – thủy sản; thủ công mỹ nghệ, du
        lịch, văn hóa bản địa…) hoặc các sáng kiến cộng đồng mang lại
        lợi ích cho đối tượng là phụ nữ.
      </li>
      <li>
        Hỗ trợ nâng cao kỹ năng, kiến thức và tiếp cận nguồn vốn.
      </li>
      <li>
        Kết nối và đầu tư phát triển các dự án, mô hình có tiềm lực
        nhằm hỗ trợ hội viên phụ nữ phát triển kinh tế xã hội mang
        tính bền vững.
      </li>
    </ul>

    <div class="em-content-bottom">
      <p>
        Thông tin chi tiết: <br />
        em-brands@emventures.vn
      </p>
      <button class="more-btn">
        Xem thêm <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</div>

</div>`;

export const voiceTem = `<div class="em-voice em-wrap">
<div class="title hide">
  <h1>em-voice</h1>
  <h2>tôn vinh</h2>
</div>
<div class="img-wrap em-container">
    <img src="../images/em-voice.png  " alt="" width="400px" height="400px" class="em-voice-img">
</div>
<div class="text-wrap em-container">
  <div class="title hide990">
    <h1>em-voice</h1>
    <h2>tôn vinh</h2>
  </div>
  <div class="content">
    <p>
      Với sự hỗ trợ của EM-VENTURES, phụ nữ Việt Nam không những có
      thể vượt qua chính bản thân, tạo lập công việc chủ động và nâng
      chất lượng cuộc sống mà còn truyền cảm hứng tích cực cho thể hệ
      phụ nữ trong thời đại mới.
    </p>
    <ul>
      <li>
        Đánh giá hiệu quả hoạt động của các mô hình, dự án được triển
        khai làm cơ sở để nhận rộng thực hiện trong năm tiếp theo.
      </li>
      <li>
        Tổ chức sự kiện thường niên, tôn vinh phụ nữ đã thực sự tạo sự
        khác biệt, với sự hỗ trợ của EM-VENTURES, họ đã nỗ lực vươn
        lên để tạo dựng sự nghiệp và mang lại những giá trị tích cực
        cho cộng đồng, truyền cảm hứng tích cực cho thế hệ phụ nữ Việt
        Nam trong thời đại mới.
      </li>
    </ul>

    <button class="more-btn">
      Xem thêm <i class="fa-sharp fa-solid fa-arrow-right"></i>
    </button>
  </div>
</div>
</div>`;

export const paydayTem = `<div class="em-payday em-wrap">
  <div class="title hide">
    <h1>em-payday</h1>
    <h2>dịch vụ tài chính</h2>
  </div>
  <div class="img-wrap em-container">
    <img src="../images/em_payday.png" alt=""/>
  </div>
  <div class="text-wrap em-container">
    <div class="title hide990">
      <h1>em-payday</h1>
      <h2>dịch vụ tài chính</h2>
    </div>
    <div class="content">
      <p>
        Cùng với những đối tác là Doanh nghiệp lớn, có uy tín trong lĩnh
        vực tài chinh tại Việt Nam, EM-VENTURES cung cấp các dịch vụ liên
        kết như một App tài chính, dành cho những Phụ nữ là Hội viên của
        EM-VENTURES:
      </p>
      <ul>
        <li>Nạp/Rút tiền</li>
        <li>Chuyển tiền</li>
        <li>Thanh toán</li>
        <li>Gửi tiết kiệm/ Vay</li>
        <li>Tích hợp các dịch vụ sẵn có của tài chính</li>
      </ul>

      <div class="em-content-bottom">
        <p>
          Thông tin chi tiết: <br />
          em-brands@emventures.vn
        </p>
        <button class="more-btn">
          Xem thêm <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</div>`;
export const signupTem = `<div class="signup-wrap">
<img src="../images/signup-patern-left.png" alt="" class="signup-patern left-patern">
<img src="../images/signup-patern-right.png" alt="" class="signup-patern right-patern">
  <h2 class="purpleGrad"><span>tự chủ</span> là một lựa chọn để <span>bạn</span> hạnh phúc</h2>
  <p class="hide990">Tham gia cùng EM-Ventures để nhận được những gía trị và lợi ích thiết thực nhất</p>
<button class="signup-btn">
  Đăng ký ngay
  <i class="fa-sharp fa-solid fa-arrow-right"></i>
</button>
</div>`;

// -------------------------- func RenderHTML -------------------------------------

export function renderGoal(tag, text, link) {
  const tem = `<div class="goal-wrap">
    <h1 class="purpleGrad">${text}</h1>
    <img src="${link}" alt="" />
  </div>`;

  document.querySelector(`.${tag}`).innerHTML = tem;
}

export function renderList(title, arr) {
  var tem = `<h1 class="purpleGrad title">${title}</h1><div class="benefit-list-wrap"><ul class="benefit-list">\n`;
  for (var i = 0; i < arr.length; i++) {
    tem += `<li class="benefit-item">
        <h1>${arr[i].title}</h1>
        <p>${arr[i].content}</p>
      </li>`;
  }
  tem += "</div></ul>";

  document.querySelector(".benefit").innerHTML = tem;
}

export function renderBanner(title, descript) {
  var tem = `<section class="banner em-page">
  <div class="banner-bg-img"></div>
  <h2>EM-Power Woman Ventures</h2>
  <div class="banner-EM-title">
    <h1>${title}</h1>
    <p>${descript}</p>
    <div class="em-ventures-join btn hoverBrightness">
    <div>
    <p>Gia nhập EM-VENTURES</p>
    <i class="fa-sharp fa-solid fa-arrow-right"></i>
  </div>
    </div>
  </div>
  <div class="banner-info">
    <div class="banner-info-left">
      <h1 class="banner-title">TIN TỨC CỘNG ĐỒNG</h1>
      <div class="banner-img">
        <div class="bg-img img1">
          <img src="../images/Info-1.png" alt="" />
          <p>Là phụ nữ, làm thế nào ...</p>
        </div>
        <div class="bg-img img2">
          <img src="../images/Info-2.png" alt="" />
          <p>Là phụ nữ, làm thế nào ...</p>
        </div>
        <div class="bg-img img3">
          <img src="../images/Info-3.png" alt="" />
          <p>Là phụ nữ, làm thế nào ...</p>
        </div>
      </div>
    </div>
    <div class="banner-info-right">
      <div class="bg-img1">
        <img src="../images/LOGO_PDA_Healthcare&Beauty.png" alt="" />
      </div>
      <div class="bg-img2">
        <img src="../images/JRealver.png" alt="" />
      </div>
      <div class="bg-img3">
        <img src="../images/UGETHERlogo.png" alt="" />
      </div>
    </div>
  </div>
</section>`;
document.querySelector(".banner-wrapper").innerHTML = tem;
}
