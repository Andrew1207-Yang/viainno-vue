<script setup>
  import "../assets/css/contact.css";
</script>

<template>
    <section class="contact">
        <div class="max-w-6xl mx-auto my-[30px]">
            <div class="text-center py-[40px]">
                <h3 class="title">Contact Us</h3>
            </div>
            <form id="project-contact-form" action="javascript:void(0)" method="post">
                <div>
                    <div id="success-project-contact-form" class="no-margin-lr"></div>
                    <div class="flex">
                        <input type="text" name="name" id="name" placeholder="Name*" class="big-input mr-[10px]">
                        <input type="text" name="phone" id="phone" placeholder="Phone number*"  class="big-input ml-[10px]">
                    </div>
                    <div class="flex">
                        <input type="text" name="email" id="email" placeholder="Email address*" class="big-input mr-[10px]">
                        <select name="budget" id="budget" class="big-input ml-[10px]">
                            <option value="0">Select a category</option>
                            <option value="1">Platform consultation</option>
                            <option value="2">Technology services</option>
                            <option value="3">Technical cooperation</option>
                        </select>
                    </div>
                    <textarea name="comment" id="comment" placeholder="Please leave your message, we will contact you as soon as possible" rows="6" class="big-textarea"></textarea>
                    <div class=" text-center">
                        <button id="project-contact-us-button" type="submit" class="form-cta">Submit</button>
                    </div>
                </div>
              </form>
        </div>

    </section>
</template>
