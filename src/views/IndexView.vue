<script setup>
  import "../assets/css/index.css";
  import Contact from "../components/Contact.vue";
</script>

<template>
    <section class="hero">
        <div class="h-[600px] lg:mx-auto items-center">
            <div class="mx-auto max-w-6xl pt-[250px] text-center">
                <h3 class="text-black text-base lg:text-lg subtitle">勤禾科技服務</h3>
                <h1 class="text-black my-[15px] title">作業標準化建立溝通與信任</h1>
                <p class="text-lg text-black paragraph">綜合性的營運體系來設立管理標準化、<br>建構以數據為導向的營運方式,並增加彈性自由的環境</p>
            </div>
        </div>
    </section>

    <!-- Home Go Section -->

    <section>
        <div class="mx-auto max-w-6xl mb-[40px]">
            <div class="text-center mb-[60px]">
                <h1 class="title">Home Go</h1>
            </div>
            <img class="mx-auto mb-[40px]" src="../assets/img/placeholder.svg" alt="">
            <div class="flex mx-auto justify-between w-[225px]">
                <a class="app-cta" href="#">瞭解更多</a>
                <a class="app-cta-btn" href="#">聯絡我們</a>
            </div>
        </div>
    </section>

    <!-- Spaces Go Section -->

    <section class="bg-black">
        <div class="mx-auto max-w-6xl pt-[60px]">
            <div class="text-center mb-[60px]">
                <h1 class="title text-white"> Spaces Go </h1>
            </div>
            <div class="mx-auto w-[905px] h-[545px] bg-white mb-[40px]"></div>
            <div class="flex mx-auto justify-between w-[225px] pb-[30px]">
                <a class="app-cta" href="#">瞭解更多</a>
                <a class="app-cta-btn" href="#">聯絡我們</a>
            </div>
        </div>
    </section>

    <!-- Mission Statement Section -->
    <section class="bg-white">
        <div class="max-w-6xl mx-auto text-center my-[60px]">
            <h3 class="subtitle">WE FOCUS ON SPACE OPERATION AND USER EXPERIENCE</h3>
            <h1 class="title mb-[30px]">我們專注在空間營運及使用體驗</h1>
            <p class="mx-auto paragraph w-5/6">為了推動高度整合的智慧空間（Smart Spaces），勤禾長年投入空間及建築營運與研究，並透過自動化物件（Automated Things）和增強智慧（Augmented Intelligence）形式的人工智慧（AI），搭配物聯網（IoT）、邊緣運算（Edge Computing）和數位分身（Digital Twin）的使用，善用多種技術優勢，讓人與科技在這個開放且共同合作的連網生態內互動，致力提高人們與空間的互聯性、智能性與自主性。 <br> <br>
                我們提供的平台解決方案（Spaces Go Platform、Home Go Platform），結合了多種元素，包括人、流程、服務和物件，創造新的應用和生活體驗，同時提供營運方方便設計及管理新的客戶服務形態。我們相信只有親身投入現場的驗證（Field Testing），才能更理解營運方的各項需求與痛點，包括資源閒置、管理不善、當前的解決方式昂貴等，在我們多年的實測，需要綜合性的營運體系來設立管理標準化、建構以數據為導向的營運方式，並增加彈性自由的環境來提高用戶的使用體驗，強化社群間的信任。
            </p>
        </div>
    </section>
    
    <div class="max-w-7xl mx-auto xl:grid xl:grid-cols-3 text-center">
        <div class="card">
            <img src="../assets/img/homego/info_management.png" alt="">
            <h3 class="subtitle">整合資訊與管理</h3>
                <p>基礎建物資料維護與營運機制規劃，同時管理關係人、社群組識、服務廠商、聯繫資訊。解決人員異動及住戶資訊落差。
                </p>
        </div>
        <div class="card">
            <img src="../assets/img/homego/info_management.png" alt="">
            <h3 class="subtitle">整合資訊與管理</h3>
                <p>基礎建物資料維護與營運機制規劃，同時管理關係人、社群組識、服務廠商、聯繫資訊。解決人員異動及住戶資訊落差。
                </p>
        </div>
        <div class="card">
            <img src="../assets/img/homego/info_management.png" alt="">
            <h3 class="subtitle">整合資訊與管理</h3>
                <p>基礎建物資料維護與營運機制規劃，同時管理關係人、社群組識、服務廠商、聯繫資訊。解決人員異動及住戶資訊落差。
                </p>
        </div>
    </div>

    <!-- Tech partner Section -->
    <section class="partner">
        <div class="max-w-6xl text-center mx-auto my-[60px]">
            <h1 class="title">技術夥伴</h1>
        </div>
    </section>

    <!-- Well Building Section -->
    <section class="partner bg-dark_green text-white">
        <div class="max-w-6xl text-center mx-auto py-[60px]">
            <h1 class="title">建築標章</h1>
        </div>
    </section>

    <!-- Well Building Section -->
    <section class="partner">
        <div class="max-w-6xl text-center mx-auto my-[60px]">
            <h1 class="title">合作案例</h1>
        </div>
    </section>

    <Contact/>

</template>
