<script setup>
    import "../assets/css/homego.css"
</script>

<template>
    <!-- Hero Section -->
    <section class="hero">
        <div class="h-[600px] lg:mx-auto items-center bg-[url('../assets/img/homego/hero.png')]" style="background-image: url(../assets/img/homego/hero.png)">
            <div class="mx-auto max-w-6xl pt-[250px] text-center min-[1275px]:text-left">
                <h3 class="text-white text-base lg:text-lg subtitle">Home Go 樓宇經營平台</h3>
                <h1 class="text-white my-[15px] title">作業標準化建立溝通與信任</h1>
                <p class="text-lg text-white paragraph">綜合性的營運體系來設立管理標準化、<br>建構以數據為導向的營運方式,並增加彈性自由的環境</p>
            </div>
        </div>
    </section>

    <!-- Intro Section -->
    <section class="intro mb-[60px]">
        <div class="mx-auto max-w-6xl items-center font-noto mb-[60px]">
            <div class="mt-[60px] text-center">
                <h3 class="font-bold font-noto subtitle">Home Go</h3>
                <h1 class="mt-[12px] lg:mt-[17px] mb-[20px] lg:mb-[35px] title">樓宇經營智慧化</h1>
                <p class="text-base lg:text-lg paragraph">為建築建構其專有的建築/社區經營平台，透過大量可變的管理模型<br>及策略、數位制度化管理與客觀數據、完整溝通渠道，創造互信、<br>友善社會的企業經營目標。</p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto xl:grid xl:grid-cols-2">
            <div class="card">
                <h3 class="subtitle">整合資訊與管理</h3>
                    <p>基礎建物資料維護與營運機制規劃，同時管理關係人、社群組識、服務廠商、聯繫資訊。解決人員異動及住戶資訊落差。
                    </p>
                <img src="../assets/img/homego/info_management.png" alt="">
            </div>
                
            <div class="card">
                <h3 class="subtitle">管理資產與環境安全</h3>
                    <p>建物內部資產的各項維護作業流程、與事務模組的關聯紀錄、安全管理、設備物聯網整合應用紀錄。減少因管理機制的差異，而造成的能源、資產與空間浪費
                    </p>
                <img src="../assets/img/homego/info_management.png" alt="">
            </div>
        
            <div class="card">
                <h3 class="subtitle">標準化事務管理</h3>
                    <p>提供用戶們服務通知、服務立案管道、物業與任務管理模組，優化溝通管道，讓住戶即時感受服務</p>
                <img src="../assets/img/homego/info_management.png" alt="">
            </div>
            
            <div class="card">
                <h3 class="subtitle">財務管理與訂購服務</h3>
                <p>專為建物設計的財務系統，提供制度化作業流程、自動化分析財報，並有完整的點數系統、訂購與金流平台。</p>
                <img src="../assets/img/spacesgo/stats_analysis.JPG" alt="">
            </div>
        </div>
    </section>

    <!-- Product Comparison -->
    <section class="bg-gray-200">
        <div class="max-w-6xl mx-auto text-center">
            <div class="py-[80px]">
                <h1 class="title">專為不同情境打造的四款軟體</h1>
            </div>
            <img src="../assets/img/homego/app_comparison.png" alt="">
            <div class="lg:flex text-left">
                <div class="mx-auto sm-text-box w-[354px] lg:w-[414px] lg:mr-[18px]">
                    <p class="paragraph">協助管理人員處理郵務、巡檢大型機電、巡邏回報、訪客登記等日常任務</p>
                    <a class="app-cta" href="#">瞭解更多 >
                    </a>
                </div>
                <div class="mx-auto sm-text-box  w-[354px] lg:w-[384px] lg:pr-[60px]">
                    <p class="paragraph">後台網站整合資訊，協助管理者分析財務、公設使用情形等數據</p>
                    <a class="app-cta" href="#">瞭解更多 >
                    </a>
                </div>
                <div class="mx-auto sm-text-box w-[354px] lg:mx-0">
                    <p class="paragraph">專為觸控螢幕設計，簡化管理人員與住戶及訪客間的互動</p>
                    <a class="app-cta" href="#">瞭解更多 >
                    </a>
                </div>
                <div class="mx-auto sm-text-box w-[354px] lg:w-[384px] lg:mx-0">
                    <p class="paragraph">提供住戶公設預約、商品團購、管理費繳納等日常服務</p>
                    <a class="app-cta" href="#">瞭解更多 >
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- App Functions -->
    <section>
        <div class="max-w-6xl mx-auto mb-[60px]">
            <div class="mt-[100px] text-center mx-auto w-4xl">
                <h3 class="text-gray-400">App Features</h3>
                <h1 class="title mb-[20px]">Home Go 功能模組</h1>
                <p>以用戶為中心設計的多項功能，解決管理上的一切需求</p>
            </div>
            <div class="min-[1200px]:grid min-[1200px]:grid-cols-2 mt-[50px]">

                <div class="min-[1200px]:flex icon-boxes box-left">
                    <div class="text-center min-[1200px]:text-right">
                        <h3>基礎資料管理</h3>
                        <p>建物結構 / 社區資訊 / 成員 / 車位 / 入住統計 / <br> 管委會 / 文件管理 / 通訊錄 / 作業規則設定 / <br> 服區權會及投票 / 服務人員 ...</p>
                    </div>
                    <img src="../assets/img/homego/icon1.svg" alt="">
                </div>

                <div class="icon-boxes min-[1200px]:hidden box-right">
                    <img src="../assets/img/homego/icon1.svg" alt="">
                    <div class="text-center">
                        <h3>基礎資料管理</h3>
                        <p>建物結構 / 社區資訊 / 成員 / 車位 / 入住統計 / <br> 管委會 / 文件管理 / 通訊錄 / 作業規則設定 / <br> 服區權會及投票 / 服務人員 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-right">
                    <img src="../assets/img/homego/icon2.svg" alt="">
                    <div class="text-center min-[1200px]:text-left">
                        <h3>環境安全管理</h3>
                        <p class="min-[1]:w-[400px]">環境事件監控 / 事件處理及統計 /訪客作業與統計 / <br>巡邏及回報處理 / RFID卡片管理 / 物聯服務端口管理 /<br>機電巡檢及回報處理 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-left">
                    <div class="text-center min-[1200px]:text-right">
                        <h3>事務作業管理</h3>
                        <p>反映與委辦作業 / 任務交辦 / <br> 公設預訂及收費作業 / 公設使用及統計 / <br>公告 / 行事曆 / 郵務 / 寄放物 / 瓦斯登記 / <br>意見調查 / 自動化通知作業 ...</p>
                    </div>
                    <img  src="../assets/img/homego/icon3.svg" alt="">
                </div>

                <div class="icon-boxes min-[1200px]:hidden box-right">
                    <img  src="../assets/img/homego/icon3.svg" alt="">
                    <div class="text-center">
                        <h3>事務作業管理</h3>
                        <p>反映與委辦作業 / 任務交辦 / <br> 公設預訂及收費作業 / 公設使用及統計 / <br>公告 / 行事曆 / 郵務 / 寄放物 / 瓦斯登記 / <br>意見調查 / 自動化通知作業 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-right">
                    <img src="../assets/img/homego/icon4.svg" alt="">
                    <div class="text-center min-[1200px]:text-left">
                        <h3>住戶APP個人化服務</h3>
                        <p class="min-[1200px]:w-[400px]">管理費繳納 / 公設預訂 / 訪客預約 / 反映與委辦 /<br>瓦斯登記 / 郵件寄放物收領 / 意見調查 / 物品借用 /<br>社區服務人員及通話 / 公告及行事曆 / 生活服務訂購 /<br>綜合文件查閱 / 社區點數 / 儲值交易 / 自助化通行 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-left">
                    <div class="text-center min-[1200px]:text-right">
                        <h3>資產管理</h3>
                        <p>設備、耗材清點及維護 / 維運付款紀錄 / <br>借用紀錄 / 合約及文件檔案管理 / 報廢清單 / <br>公設管理 / 公設使用及收費規則設定 / <br>機電巡檢紀錄 / 點數管理與交易紀錄 ... </p>
                    </div>
                    <img  src="../assets/img/homego/icon5.svg" alt="">
                </div>

                <div class="icon-boxes min-[1200px]:hidden box-right">
                    <img  src="../assets/img/homego/icon5.svg" alt="">

                    <div class="text-center">
                        <h3>資產管理</h3>
                        <p>設備、耗材清點及維護 / 維運付款紀錄 / <br>借用紀錄 / 合約及文件檔案管理 / 報廢清單 / <br>公設管理 / 公設使用及收費規則設定 / <br>機電巡檢紀錄 / 點數管理與交易紀錄 ... </p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-right">
                    <img src="../assets/img/homego/icon6.svg" alt="">
                    <div class="text-center min-[1200px]:text-left">
                        <h3>即時通知模組</h3>
                        <p>個人化FCM推播機制 / 卡片式通知 /<br>E-mail即時通 / SMS通知 / 自訂通知設定...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-left">
                    <div class="text-center min-[1200px]:text-right">
                        <h3>財務管理</h3>
                        <p>管理費自動化出帳 / 制度化核銷作業 / <br>收入支出作業 / 帳戶現況 / 各項財務分析報表 / <br>例行事務作業及提醒機制 / 商品管理作業 / <br>銷售(商品、餐飲等)及付款機制 / 自動催繳機制 / <br>臨櫃收費作業及自動化表單 ...</p>
                    </div>
                    <img  src="../assets/img/homego/icon7.svg" alt="">
                </div>

                <div class="icon-boxes min-[1200px]:hidden box-right">
                    <img  src="../assets/img/homego/icon7.svg" alt="">

                    <div class="text-center">
                        <h3>財務管理</h3>
                        <p>管理費自動化出帳 / 制度化核銷作業 / <br>收入支出作業 / 帳戶現況 / 各項財務分析報表 / <br>例行事務作業及提醒機制 / 商品管理作業 / <br>銷售(商品、餐飲等)及付款機制 / 自動催繳機制 / <br>臨櫃收費作業及自動化表單 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-right">
                    <img src="../assets/img/homego/icon8.svg" alt="">
                    <div class="text-center min-[1200px]:text-left">
                        <h3>精緻收活服務與訂購管理</h3>
                        <p>社區專屬電子商務平台 / 居家服務訂購/ <br>商品團購 / 線上多元支付 / Go-Points 回饋 /<br>專屬飯店式服務 / 封閉式商品上架系統</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission Statement Section -->
    <section>
        <div class="max-w-6xl mx-auto mt-[30px]">
            <div class="mt-[100px] text-center mx-auto w-4xl">
                <h3 class="text-gray-400 mb-[15px]">CREATING POSITIVE INTERACTION AND TRUST</h3>
                <h1 class="title mb-[30px]">社區營造與友善生活的橋樑</h1>
                <p class="hidden lg:block">都市化的過程中,人們的生活品質與建築經營密不可分,建設公司、居民委員會、物業管理<br>與居民等多方的互助信任關係,一直以來都是艱難的課題<br><br>勤禾將樓宇長期營運的作業流程標準化、建構其專有的建築/社區經營平台、提高管理與<br>決策品質。建立全面性的溝通管道,建構人、事、物的資訊中樞,讓資訊通透及知識共享。<br>透過大量可變的管理模型及策略、數位制度化管理與客觀數據、完整溝通渠道等,創造互<br>信、友善社會的企業經營目標。</p>
                <p class="lg:hidden">都市化的過程中,人們的生活品質與建築經營密不可分,建設公司、居民委員會、物業管理與居民等多方的互助信任關係,一直以來都是艱難的課題<br><br>勤禾將樓宇長期營運的作業流程標準化、建構其專有的建築/社區經營平台、提高管理與決策品質。建立全面性的溝通管道,建構人、事、物的資訊中樞,讓資訊通透及知識共享。透過大量可變的管理模型及策略、數位制度化管理與客觀數據、完整溝通渠道等,創造互信、友善社會的企業經營目標。</p>
            </div>
            <img src="../assets/img/homego/features.png" alt="">
        </div>
    </section>

    <!-- Colab Section -->
    <section  class="bg-gray-200">
        <div class="max-w-6xl mx-auto pt-[30px]">
            <div class="pt-[50px] text-center mx-auto w-4xl">
                <h3 class="text-gray-400 pb-[15px]">COOPERATION CASES</h3>
                <h1 class="title pb-[30px]">合作案例</h1>
            </div>


        </div>
    </section>
</template>