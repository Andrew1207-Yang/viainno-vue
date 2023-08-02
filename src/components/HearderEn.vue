<script setup>
    const toggle = () => {
        var x = document.getElementById("navLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    const toggleApp = () => {
        var x = document.getElementById("appLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
</script>

<template>
  <header class="w-full fixed bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-5 lg:p-3 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <router-link :to="{name: 'home'}">
                    <span class="sr-only">Viainno</span>
                    <img class="h-8 w-auto" src="../assets/img/logo.svg" alt="">
                </router-link>
            </div>

            <div class="lg:hidden">
                <button type="button" class="space-y-2" @click="toggle">
                    <div class="w-8 h-0.5 bg-gray-600"></div>
                    <div class="w-8 h-0.5 bg-gray-600"></div>
                    <div class="w-8 h-0.5 bg-gray-600"></div>
                </button>
            </div>
            
            <div class='hidden lg:flex'>
                <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">Home</router-link>
                <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">About Us</router-link>
                <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">Solutions</router-link>
                <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">用科技整合生活</router-link>
                <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">Contact</router-link>
            </div>
        </nav>

        <div id="navLinks" class='bg-gray-200 hidden text-center'>
            <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">Home</router-link>
                <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">About Us</router-link>
            <button @click="toggleApp" class="mx-auto block m-2.5 p-1.5 font-noto">Solutions</button>
            
            <div id="appLinks" class='bg-gray-200 hidden text-center font-light'>
                <router-link :to="{name: 'homego'}" class="block m-2.5 p-1.5 font-noto">Home Go</router-link>
                <router-link :to="{name: 'spacesgo'}" class="block m-2.5 p-1.5 font-noto">Spaces Go</router-link>
            </div>

            <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">用科技整合生活</router-link>
            <router-link :to="{name: 'home'}" class="block m-2.5 p-1.5 font-noto">Contact</router-link>
        </div>
        
    </header>
</template>