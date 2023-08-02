<script setup>
    import "../assets/css/homego.css"
</script>

<template>
    <!-- Hero Section -->
    <section class="hero">
        <!-- <div class="h-[600px] lg:mx-auto items-center" style="background-image: url(../src/assets/img/homego/hero.png)"> -->
        <div class="h-[600px] lg:mx-auto items-center bg-black">
            <div class="mx-auto max-w-6xl pt-[250px] text-center min-[1275px]:text-left">
                <h3 class="text-white text-base lg:text-lg subtitle">Home Go Housing Management System</h3>
                <h1 class="text-white my-[15px] title">Build Trust and Communication <br> with Standardized Procedures</h1>
                <p class="text-lg text-white paragraph">Increase the flexibility of management with multi-functional <br> and data-driven operating system</p>
            </div>
        </div>
    </section>

    <!-- Intro Section -->
    <section class="intro mb-[60px]">
        <div class="mx-auto max-w-6xl items-center font-noto mb-[60px]">
            <div class="mt-[60px] text-center">
                <h3 class="font-bold font-noto subtitle">Home Go</h3>
                <h1 class="mt-[12px] lg:mt-[17px] mb-[20px] lg:mb-[35px] title">Smart Housing Management</h1>
                <p class="text-base lg:text-lg paragraph">Creating personalized community management platform for buildings through customizable models and strategies, standardized digital and data management, and complimentary communication pipeline</p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto xl:grid xl:grid-cols-2">
            <div class="card">
                <h3 class="subtitle">All-in-One Data Analysis</h3>
                    <p>Organize building and operation data. Manage personnel, communities, contractors and contacts all in one place. 
                    </p>
                <img src="../assets/img/homego/info_management.png" alt="">
            </div>
                
            <div class="card">
                <h3 class="subtitle">Manage Inventory and Safety</h3>
                    <p>Combining facility maintenance records, task management, safety, and IOT devices. Reducing energy and space wastage from differences in management
                    </p>
                <img src="../assets/img/homego/info_management.png" alt="">
            </div>
        
            <div class="card">
                <h3 class="subtitle">Standardized Task Management</h3>
                    <p>Providing service requests and notifications for users, and task management model for admins</p>
                <img src="../assets/img/homego/info_management.png" alt="">
            </div>
            
            <div class="card">
                <h3 class="subtitle">Financial Dashboards And Goods </h3>
                <p>Financial system designed for building. Providing standardized workflow, automated analytical reports, and goods ordering and cash-flow platform</p>
                <img src="../assets/img/spacesgo/stats_analysis.JPG" alt="">
            </div>
        </div>
    </section>

    <!-- Product Comparison -->
    <section class="bg-gray-200">
        <div class="max-w-6xl mx-auto text-center">
            <div class="py-[80px]">
                <h1 class="title">One Platform, Four Scenarios</h1>
            </div>
            <img src="../assets/img/homego/app_comparison.png" alt="">
            <div class="lg:flex text-left">
                <div class="mx-auto sm-text-box w-[354px] lg:w-[414px] lg:mr-[18px]">
                    <p class="paragraph">Assist admin in daily tasks such as patrol reporting, and facility records</p>
                    <a class="app-cta" href="#">Learn More >
                    </a>
                </div>
                <div class="mx-auto sm-text-box  w-[354px] lg:w-[384px] lg:pr-[60px]">
                    <p class="paragraph">Web app for financial analysis and facility usage report</p>
                    <a class="app-cta" href="#">Learn More >
                    </a>
                </div>
                <div class="mx-auto sm-text-box w-[354px] lg:mx-0">
                    <p class="paragraph">Designed for touch screens to facilitate communication between admin and residents</p>
                    <a class="app-cta" href="#">Learn More >
                    </a>
                </div>
                <div class="mx-auto sm-text-box w-[354px] lg:w-[384px] lg:mx-0">
                    <p class="paragraph">Resident app for facility reservation, management fee payments and other daily tasks</p>
                    <a class="app-cta" href="#">Learn More >
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- App Functions -->
    <section>
        <div class="max-w-6xl mx-auto mb-[60px]">
            <div class="mt-[100px] text-center mx-auto w-4xl">
                <h1 class="title mb-[20px]">Home Go Features</h1>
            </div>
            <div class="min-[1200px]:grid min-[1200px]:grid-cols-2 mt-[50px]">

                <div class="min-[1200px]:flex icon-boxes box-left">
                    <div class="text-center min-[1200px]:text-right">
                        <h3>Data Management</h3>
                        <p>建物結構 / 社區資訊 / 成員 / 車位 / 入住統計 / <br> 管委會 / 文件管理 / 通訊錄 / 作業規則設定 / <br> 服區權會及投票 / 服務人員 ...</p>
                    </div>
                    <img src="../assets/img/homego/icon1.svg" alt="">
                </div>

                <div class="icon-boxes min-[1200px]:hidden box-right">
                    <img src="../assets/img/homego/icon1.svg" alt="">
                    <div class="text-center">
                        <h3>Data Management</h3>
                        <p>建物結構 / 社區資訊 / 成員 / 車位 / 入住統計 / <br> 管委會 / 文件管理 / 通訊錄 / 作業規則設定 / <br> 服區權會及投票 / 服務人員 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-right">
                    <img src="../assets/img/homego/icon2.svg" alt="">
                    <div class="text-center min-[1200px]:text-left">
                        <h3>Building Safety</h3>
                        <p class="min-[1]:w-[400px]">環境事件監控 / 事件處理及統計 /訪客作業與統計 / <br>巡邏及回報處理 / RFID卡片管理 / 物聯服務端口管理 /<br>機電巡檢及回報處理 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-left">
                    <div class="text-center min-[1200px]:text-right">
                        <h3>Tasks & Operation</h3>
                        <p>反映與委辦作業 / 任務交辦 / <br> 公設預訂及收費作業 / 公設使用及統計 / <br>公告 / 行事曆 / 郵務 / 寄放物 / 瓦斯登記 / <br>意見調查 / 自動化通知作業 ...</p>
                    </div>
                    <img  src="../assets/img/homego/icon3.svg" alt="">
                </div>

                <div class="icon-boxes min-[1200px]:hidden box-right">
                    <img  src="../assets/img/homego/icon3.svg" alt="">
                    <div class="text-center">
                        <h3>Tasks & Operation</h3>
                        <p>反映與委辦作業 / 任務交辦 / <br> 公設預訂及收費作業 / 公設使用及統計 / <br>公告 / 行事曆 / 郵務 / 寄放物 / 瓦斯登記 / <br>意見調查 / 自動化通知作業 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-right">
                    <img src="../assets/img/homego/icon4.svg" alt="">
                    <div class="text-center min-[1200px]:text-left">
                        <h3>Personalized Resident App</h3>
                        <p class="min-[1200px]:w-[400px]">管理費繳納 / 公設預訂 / 訪客預約 / 反映與委辦 /<br>瓦斯登記 / 郵件寄放物收領 / 意見調查 / 物品借用 /<br>社區服務人員及通話 / 公告及行事曆 / 生活服務訂購 /<br>綜合文件查閱 / 社區點數 / 儲值交易 / 自助化通行 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-left">
                    <div class="text-center min-[1200px]:text-right">
                        <h3>Asset Management</h3>
                        <p>設備、耗材清點及維護 / 維運付款紀錄 / <br>借用紀錄 / 合約及文件檔案管理 / 報廢清單 / <br>公設管理 / 公設使用及收費規則設定 / <br>機電巡檢紀錄 / 點數管理與交易紀錄 ... </p>
                    </div>
                    <img  src="../assets/img/homego/icon5.svg" alt="">
                </div>

                <div class="icon-boxes min-[1200px]:hidden box-right">
                    <img  src="../assets/img/homego/icon5.svg" alt="">

                    <div class="text-center">
                        <h3>Asset Management</h3>
                        <p>設備、耗材清點及維護 / 維運付款紀錄 / <br>借用紀錄 / 合約及文件檔案管理 / 報廢清單 / <br>公設管理 / 公設使用及收費規則設定 / <br>機電巡檢紀錄 / 點數管理與交易紀錄 ... </p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-right">
                    <img src="../assets/img/homego/icon6.svg" alt="">
                    <div class="text-center min-[1200px]:text-left">
                        <h3>Real-time Communication</h3>
                        <p>個人化FCM推播機制 / 卡片式通知 /<br>E-mail即時通 / SMS通知 / 自訂通知設定...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-left">
                    <div class="text-center min-[1200px]:text-right">
                        <h3>Financial Management</h3>
                        <p>管理費自動化出帳 / 制度化核銷作業 / <br>收入支出作業 / 帳戶現況 / 各項財務分析報表 / <br>例行事務作業及提醒機制 / 商品管理作業 / <br>銷售(商品、餐飲等)及付款機制 / 自動催繳機制 / <br>臨櫃收費作業及自動化表單 ...</p>
                    </div>
                    <img  src="../assets/img/homego/icon7.svg" alt="">
                </div>

                <div class="icon-boxes min-[1200px]:hidden box-right">
                    <img  src="../assets/img/homego/icon7.svg" alt="">

                    <div class="text-center">
                        <h3>Financial Management</h3>
                        <p>管理費自動化出帳 / 制度化核銷作業 / <br>收入支出作業 / 帳戶現況 / 各項財務分析報表 / <br>例行事務作業及提醒機制 / 商品管理作業 / <br>銷售(商品、餐飲等)及付款機制 / 自動催繳機制 / <br>臨櫃收費作業及自動化表單 ...</p>
                    </div>
                </div>

                <div class="min-[1200px]:flex icon-boxes box-right">
                    <img src="../assets/img/homego/icon8.svg" alt="">
                    <div class="text-center min-[1200px]:text-left">
                        <h3>Goods and Orders</h3>
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