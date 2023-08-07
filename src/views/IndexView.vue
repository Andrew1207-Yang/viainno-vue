<script setup>
  import "../assets/css/index.css";
  import Contact from "../components/Contact.vue";
</script>

<template>
    <!-- Hero Section -->
    <section class="hero text-white">
        <div class="h-[600px] lg:mx-auto items-center bg-cover" style="background-image: url('src/assets/img/index/buildingmanagement.jpg');">
            <div class="h-[600px] lg:mx-auto items-center bg-cover" style="background-color: rgba(0, 0, 0, 0.6)">
                <div class="mx-auto max-w-6xl pt-[250px] text-center min-[1275px]">
                    <h3 class="text-white text-base my-[30px] lg:text-lg subtitle">勤禾科技服務 Viainno</h3>
                    <h1 class="text-white title">重新定義空間營運及使用體驗</h1>
                    <p class="text-lg text-white my-[30px] paragraph">使用 ＿＿＿＿＿ 的 Home Go 及 Spaces Go 系列產品提升管理的彈性</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Home Go Section -->
    <section class="bg-black text-white py-6">
        <div class="mx-auto max-w-6xl my-[40px]">
            <div class="text-center mb-[60px]">
                <h1 class="title">Home Go</h1>
            </div>
            <img class="mx-auto mb-[40px]" src="../assets/img/placeholder.svg" alt="">
            <div class="flex mx-auto justify-between w-[250px]">
                <a class="app-cta" href="#">瞭解更多</a>
                <a class="app-cta-btn" href="#">聯絡我們</a>
            </div>
        </div>
    </section>

    <!-- Spaces Go Section -->

    <section class="bg-white">
        <div class="mx-auto max-w-6xl pt-[60px]">
            <div class="text-center mb-[60px]">
                <h1 class="title text-black"> Spaces Go </h1>
            </div>
            <div class="mx-auto w-[905px] h-[545px] bg-white mb-[40px]"></div>
            <div class="flex mx-auto justify-between w-[250px] pb-[30px]">
                <a class="app-cta" href="#">瞭解更多</a>
                <a class="app-cta-btn" href="#">聯絡我們</a>
            </div>
        </div>
    </section>

    <!-- Mission Statement Section -->
    <section class="bg-clip-padding bg-gradient-to-r from-emerald-800 to-green-600 text-white rounded-2xl py-[60px] mx-[30px]">
        <div class="max-w-6xl mx-auto text-center mb-[60px]">
            <h3 class="subtitle">WE FOCUS ON SPACE OPERATION AND USER EXPERIENCE</h3>
            <h1 class="title mb-[30px]">我們專注在空間營運及使用體驗</h1>
        </div>
        <div class="max-w-7xl mx-auto xl:grid xl:grid-cols-3 text-center">
            <div class="card">
                <h3>整合資訊與管理</h3>
                    <p>我們提供不同的解決方案，透過平台的 SaaS 服務可以讓您的辦公室、共享空間、旅館、甚至社區營運完全自動化，並且讓您可以更有效的運用資源，方便管理多個空間，讓擴展您的業務發揮最大效益。
                    </p>
            </div>
            <div class="card">
                <h3>建立您的社群</h3>
                    <p>基礎建物資料維護與營運機制規劃，同時管理關係人、社群組識、服務廠商、聯繫資訊。解決人員異動及住戶資訊落差。
                    </p>
            </div>
            <div class="card">
                <h3>提升空間營收</h3>
                    <p>基礎建物資料維護與營運機制規劃，同時管理關係人、社群組識、服務廠商、聯繫資訊。解決人員異動及住戶資訊落差。
                    </p>
            </div>
        </div>
    </section>

    <!-- Tech partner Section -->
    <section class="partner">
        <div class="max-w-6xl text-center mx-auto my-[60px]">
            <h1 class="title">技術夥伴</h1>
        </div>
    </section>

    <!-- Well Building Section -->
    <section class="partner bg-gradient-to-r from-dark_green to-emerald-600 text-white">
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
