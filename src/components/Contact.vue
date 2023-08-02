<script setup>
  import "../assets/css/contact.css";
</script>

<template>
    <section class="contact">
        <div class="max-w-6xl mx-auto my-[30px]">
            <div class="text-center py-[40px]">
                <h3 class="subtitle">CONTACT OUR TEAM</h3>
                <h1 class="title">歡迎您聯繫我們</h1>
            </div>
            <form id="project-contact-form" action="javascript:void(0)" method="post">
                <div>
                    <div id="success-project-contact-form" class="no-margin-lr"></div>
                    <div class="flex">
                        <input type="text" name="name" id="name" placeholder="姓名 Name*" class="big-input mr-[10px]">
                        <input type="text" name="phone" id="phone" placeholder="電話號碼 Phone number*"  class="big-input ml-[10px]">
                    </div>
                    <div class="flex">
                        <input type="text" name="email" id="email" placeholder="郵件信箱 Email address*" class="big-input mr-[10px]">
                        <select name="budget" id="budget" class="big-input ml-[10px]">
                            <option value="0">請選擇諮詢類別 Select a category</option>
                            <option value="1">平台應用諮詢 Platform consultation</option>
                            <option value="2">科技整合服務 Technology services</option>
                            <option value="3">技術合作 Technical cooperation</option>
                        </select>
                    </div>
                    <textarea name="comment" id="comment" placeholder="請留下您的訊息，我們將盡快與您聯繫 Please leave your message, we will contact you as soon as possible" rows="6" class="big-textarea"></textarea>
                    <div class=" text-center">
                        <button id="project-contact-us-button" type="submit" class="form-cta">確認送出</button>
                    </div>
                </div>
              </form>
        </div>

    </section>
</template>
